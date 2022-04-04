# Next Weather App

📎 [Demo](https://nemo-next-weather-app.herokuapp.com/)

![](./public/images/next-weather-app-16_9.gif)

<br/>

## Introduction
- 전세계 도시를 검색하면 날씨 정보를 제공하는 애플리케이션입니다.
- API : [OpenWeather](https://openweathermap.org/)

<br/>

## Development Environment
- Client: Next.js, TypeScript, SCSS

<br/>

## Reference
📎 [Creating a Weather Forecast Web App with Next.js - Next.js Beginner Project](https://youtu.be/6UlpfXQWysg)

<br/>

### 레퍼런스보다 개선된 사항
- TypeScript 환경에서 작업하였습니다.
- 기존 애플리케이션은 City list가 로컬 파일이었으나, API로 데이터를 가져와 사용하였습니다.
- 기존 City list는 영문만 포함이었으나, API로 가져온 City list는 전세계 언어가 포함되어 있어 원하는 언어로 검색이 가능합니다.

<br/>

## Tree
```
next-weather-app
├── pages (라우팅 기능 담당)
│   ├── _app.tsx (Application Container. 글로벌 CSS & 공통 레이아웃 등을 적용하는 곳)
│   ├── _document.tsx (SPA에서 시작점이 되는 index.html <head>태그 내용 등을 작성)
│   ├── index.tsx (Root Page. /로 시작되는 경로를 말한다.)
│   └── location (다이나믹 라우터)
│       └── [city].tsx
├── public (정적 자원의 root 디렉토리)
│   └── images
├── components (컴포넌트 파일 보관)
│   ├── FamousPlaces.tsx (인기 검색 장소)
│   ├── Header.tsx (헤더)
│   ├── SearchBox.tsx (검색창)
│   ├── HourlyWeather.tsx (시간별 날씨)
│   ├── TodaysWeather.tsx (오늘의 날씨)
│   └── WeeklyWeather.tsx (주간 날씨)
├── styles (정적 자원 중 CSS 파일을 별도 보관)
│   └── main.scss
├── README.md
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
└── tsconfig.json
```
