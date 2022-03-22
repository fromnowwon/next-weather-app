import React from 'react'
import { useState } from 'react';
import cityJSON from '../lib/city.list.json'
import { useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';

export interface Icities {
	id: number
	name: string
	country: string
	state: string
	coord: {
		lat: number
		lon: number
	}
	slug: string
}

const SearchBox = ({ placeholder }: { placeholder: string }) => {
	const [query, setQuery] = useState("");
	const [cities, setCities] = useState<Icities[]>([]);
	const [results, setResults] = useState<Icities[]>([]);

	useEffect(() => {
		// 검색창 리셋
		const clearQuery = () => setQuery("");
		Router.events.on("routeChangeComplete", clearQuery);

		// unmount
		return () => {
			Router.events.off("routeChangeComplete", clearQuery);
		}
	}, [])

	useEffect(() => {
		let jsonString = JSON.parse(JSON.stringify(cityJSON));
		setCities(jsonString);
	}, []);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setQuery(value);

		let matchingCities = [];

		if (value.length > 3) {
			for(let city of cities) {
				if(matchingCities.length > 5) {
					break;
				}

				const match = city.name.toLowerCase().startsWith(value.toLowerCase());
				
				if (match) {
					// 각 city unique slug 추가
					const cityData = {
						...city, 
						slug: `${city.name.toLowerCase().replace(/ /g, "-")}-${city.id}`
					}
					matchingCities.push(cityData);
				}
			}
		}
		return setResults(matchingCities);
	}

	return (
		<div className="search">
			<input type="text" value={query} onChange={onChange} placeholder={placeholder ? placeholder : ""}/>

			{query.length > 3 && (
				<ul>
					{results.length > 0 ? (
						results.map((city) => (
							<li key={city.slug}>
								<Link href={`/location/${city.slug}`}>
									<a>
										{city.name}
										{city.state ? `, ${city.state}` : ' '}
										<span>({city.country})</span>
									</a>
								</Link>
							</li>
						))
					) : (
						<li className="search__no-results">No results found!</li>
					)}
				</ul>
			)}
		</div>
	)
}

export default SearchBox