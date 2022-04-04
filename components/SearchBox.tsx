import React from 'react'
import { useState } from 'react';
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

	useEffect(() => {
		// 검색창 리셋
		const clearQuery = () => setQuery("");
		Router.events.on("routeChangeComplete", clearQuery);

		// unmount
		return () => {
			Router.events.off("routeChangeComplete", clearQuery);
		}
	}, [])

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setQuery(value);

		fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&appid=${process.env.NEXT_PUBLIC_API_KEY}`)
			.then(res => res.json())
			.then(data => {
				if(!data.errors) {
					setCities(data);
				} else {
					setCities([]);
				}
			})
	}

	return (
		<div className="search">
			<input type="text" value={query} onChange={onChange} placeholder={placeholder ? placeholder : ""}/>

			{query.length > 0 && (
				<ul>
					{cities.length > 0 ? (
						cities.map((city) => (
							<li key={city.slug}>
								<Link href={`/location/${city.name.toLowerCase()}`}>
									<a>
										{city.name}
										{city.state ? `, ${city.state}` : ' '}
										<span> ({city.country})</span>
									</a>
								</Link>
							</li>
						))
					) : (
						<li className="search__no-results">검색 결과가 존재하지 않습니다.</li>
					)}
				</ul>
			)}
		</div>
	)
}

export default SearchBox