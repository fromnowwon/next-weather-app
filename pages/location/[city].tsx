import React from 'react'
import { Icities } from '../../components/SearchBox'
import cityJSON from '../../public/data/city.list.json'
import Head from 'next/head'
import moment from 'moment-timezone';
import TodaysWeather from '../../components/TodaysWeather';
import HourlyWeather from '../../components/HourlyWeather'
import WeeklyWeather from '../../components/WeeklyWeather';
import SearchBox from '../../components/SearchBox';
import Link from 'next/link';

export default function City({ 
	hourlyWeather, 
	weeklyWeather, 
	city,
	timezone
}: {
	hourlyWeather: any[], 
	weeklyWeather: any[], 
	city: Icities,
	timezone: string
}) {
	return (
		<div>
			<Head>
				<title>{ city.name } Weather - Next Weather App</title>
			</Head>

			<div className="page-wrapper">
				<div className="container">
					<Link href="/">
						<a className="back-link">&larr; Home</a>
					</Link>
					<SearchBox placeholder={`Search for another location...`} />
					<TodaysWeather city={city} weather={weeklyWeather[0]} timezone={timezone}/>
					<HourlyWeather hourlyWeather={hourlyWeather} timezone={timezone} />
					<WeeklyWeather weeklyWeather={weeklyWeather} timezone={timezone} />
				</div>
			</div>
		</div>
	)
}

const getCity = (param: string) => {
	let jsonString = JSON.parse(JSON.stringify(cityJSON));

	// 공백 제거
	const cityParam = param.trim();
	// City id 추출
	const splitCity = cityParam.split("-");
	const id = splitCity[splitCity.length -1];

	if (!id) {
		return null;
	}

	const city = jsonString.find((city: { id: string }) => city.id.toString() === id);

	if(city) {
		return city;
	} else {
		return null;
	}
}

const getHourlyWeather = (hourlyData: any[], timezone: string) => {
	// const current = new Date();
	// current.setHours(current.getHours(), 0, 0, 0);
	// const tomorrow = new Date();
	// tomorrow.setDate(tomorrow.getDate() + 1);
	// tomorrow.setHours(0,0,0,0);

	// // divide by 1000 to get timestamps in seconds
	// const currentTimeStamp = Math.floor(current.getTime() / 1000);
	// const tomorrowTimeStamp = Math.floor(tomorrow.getTime() / 1000);

	const endOfDay = moment().tz(timezone).endOf('day').valueOf();
	const eodTimeStamp = Math.floor(endOfDay / 1000);

	const todaysData = hourlyData.filter((data: { dt: number }) => data.dt < eodTimeStamp)
	return todaysData;
}

export const getServerSideProps = async(context: any) => {
	const city = getCity(context.params.city);
	// const slug = context.params.city;

	if(!city) {
		return {
			notFound: true,
		};
	}

	const res = await fetch(
		`https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${process.env.API_KEY}&units=metric&exclude=minutely`
	)
	
	const data = await res.json();

	if(!data) {
		return {
			notFound: true,
		}
	}

	const hourlyWeather = getHourlyWeather(data.hourly, data.timezone);

	return {
		props: {
			city: city,
			timezone: data.timezone,
			currentWeather: data.current,
			weeklyWeather: data.daily,
			hourlyWeather: hourlyWeather,
		}
	}
}