import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import "../styles/main.scss"

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		const start = () => NProgress.start();
		const end = () => NProgress.done();

		// 라우터 이벤트 실행
		// routeChangeStart - 경로 변화 감지
		// routeChangeComplete - 경로가 완전히 변경됐을 때
		// routeChangeError - 경로 변경 시 오류가 발생하거나 경로 로드가 취소될 때 
		Router.events.on("routeChangeStart", start);
		Router.events.on("routeChangeComplete", end);
		Router.events.on("routeChangeError", end);

		return () => {
			// 이벤트 종료
			Router.events.off("routeChangeStart", start);
			Router.events.off("routeChangeComplete", end);
			Router.events.off("routeChangeError", end);
		}
	}, [])

  return <Component {...pageProps} />
}

export default MyApp
