import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import SeoulImage from '../public/images/seoul.jpg';
import LondonImage from '../public/images/london.jpg';
import ParisImage from '../public/images/paris.jpg';
import TokyoImage from '../public/images/tokyo.jpg';
import NewYorkImage from '../public/images/new-york.jpg';

const places = [
	{
		name: "서울",
		image: SeoulImage,
		url: "/location/seoul",
	},
	{
		name: "런던",
		image: LondonImage,
		url: "/location/london",
	},
	{
		name: "파리",
		image: ParisImage,
		url: "/location/paris",
	},
	{
		name: "도쿄",
		image: TokyoImage,
		url: "/location/tokyo",
	},
	{
		name: "뉴욕",
		image: NewYorkImage,
		url: "/location/new-york-city",
	},
]

export default function FamousPlaces() {
	return (
		<div className="places">
			<div className="places__row">
				{
					places.length > 0 &&
					places.map((place, index) => (
						<div className="places__box" key={index}>
							<Link href={place.url}>
								<a>
									<div className="places__image-wrapper">
										<Image 
											src={place.image} 
											alt={`${place.name} Image`} 
											layout="fill"
											objectFit='cover'
										/>
									</div>
									<span>{place.name}</span>
								</a>
							</Link>
						</div>
					))
				}
			</div>
		</div>
	)
}
