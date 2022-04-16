import React, { useEffect, useState, useMemo } from 'react'
import Link from 'next/link';
import Router from 'next/router';
import { debounce } from 'lodash';

export interface Icities {
	id: number
	name: string
	country: string
	state: string
	coord: {
		lat: number
		lon: number
	}
	local_names: {
		ko: string
	}
	slug: string
}

const SearchBox = ({ placeholder }: { placeholder: string }) => {
	const [query, setQuery] = useState("");
	const [cities, setCities] = useState<Icities[]>([]);

	useEffect(() => {
		// 검색창 리셋
		const clearQuery = () => setQuery("");

		// mount
		Router.events.on("routeChangeComplete", clearQuery);

		// unmount
		return () => {
			Router.events.off("routeChangeComplete", clearQuery);
		}
	}, [])

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		console.log(value)
		debouncedSearch(value);
	}

	// debounce 최적화
	const debouncedSearch = useMemo(() => debounce((query) => {
		// 모든 호출이 아닌 
		// 지정 간격 마다 리턴 값 받아서 state에 담고
		setQuery(query);
		// console.log(query);

		// 그 값으로 API 데이터 가져오기
		fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${process.env.NEXT_PUBLIC_API_KEY}`)
		.then(res => res.json())
		.then(data => {
			if(!data.errors) {
				setCities(data);
			} else {
				setCities([]);
			}
		})
	}, 300), [ query ]);

	return (
		<div className="search">
			<input 
				type="text" 
				onChange={onChange} 
				placeholder={placeholder ? placeholder : ""}
			/>

			{query.length > 1 && (
				<ul>
					{
						cities.length > 0 
							? (
								cities.map((city, idx) => (
									<li key={idx}>
										<Link href={`/location/${city.name.toLowerCase()}`}>
											<a>
												{
													city.local_names
													? city.local_names.ko
														? city.local_names.ko
														: city.name
													: city.name
												}
												{city.state ? `, ${city.state}` : ' '}
												<span> ({city.country})</span>
											</a>
										</Link>
									</li>
								))
							) 
							: (<li className="search__no-results">검색 결과가 존재하지 않습니다.</li>)
					}
				</ul>
			)}
		</div>
	)
}

export default SearchBox