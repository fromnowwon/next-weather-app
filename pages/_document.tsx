import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
		<Html>
			<Head>
				<meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
				{/* Font */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap"
					rel="stylesheet"
				></link>
				<link rel="preload" href='/images/seoul.jpg' as="image" />
				{/* <link rel="preload" href='../public/images/london.jpg' as="image" />
				<link rel="preload" href='../public/images/paris.jpg' as="image" />
				<link rel="preload" href='../public/images/new-york.jpg' as="image" /> */}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
  );
}