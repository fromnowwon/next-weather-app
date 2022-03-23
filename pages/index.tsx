import type { NextPage } from 'next'
import Head from 'next/head'
import SearchBox from '../components/SearchBox'
import FamousPlaces from '../components/FamousPlaces'
import { Header } from '../components/Header'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Weather App - Next</title>
			</Head>

			<div className="home">
				<Header />
				<div className="container">
					<SearchBox placeholder='Search for a city...'/>
					<FamousPlaces />
				</div>
			</div>
		</div>
	)
}

export default Home
