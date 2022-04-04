import type { NextPage } from 'next'
import Head from 'next/head'
import SearchBox from '../components/SearchBox'
import FamousPlaces from '../components/FamousPlaces'
import { Header } from '../components/Header'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Weather App | 전세계 실시간 날씨 검색 - Next</title>
			</Head>

			<div className="home">
				<Header />
				<div className="container">
					<SearchBox placeholder='도시명을 입력해주세요. (ex. 서울, New york ...)'/>
					<FamousPlaces />
				</div>
			</div>
		</div>
	)
}

export default Home
