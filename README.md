# Movie search App

📎 [Demo](https://nemo-next-weather-app.herokuapp.com/)

## Introduction
- 전세계 도시를 검색하면 날씨 정보를 제공하는 애플리케이션입니다.
- API : [OpenWeather](https://openweathermap.org/)
<br/>

<br/>

## Development Environment
- Client: Next.js

<br/>

## Reference
📎 [Creating a Weather Forecast Web App with Next.js - Next.js Beginner Project](https://youtu.be/6UlpfXQWysg)

<br/>

### 레퍼런스 프로젝트보다 개선된 사항
- TypeScript 환경에서 작업하였습니다.
- 기존 애플리케이션은 City list가 로컬 파일이었으나, API로 데이터를 가져와 사용하였습니다.
- 기존 City list는 영문만 포함이었으나, API로 가져온 City list는 전세계 언어가 포함되어 있어 원하는 언어로 검색이 가능합니다.



## Tree
```
next-weather-app
├── components
│   ├── FamousPlaces.tsx
│   ├── Header.tsx
│   ├── HourlyWeather.tsx
│   ├── SearchBox.tsx
│   ├── TodaysWeather.tsx
│   └── WeeklyWeather.tsx
├── package-lock.json
├── package.json
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx
│   └── location
│       └── [city].tsx
├── public
│   ├── images
│   │   ├── london.jpg
│   │   ├── new-york.jpg
│   │   ├── paris.jpg
│   │   └── tokyo.jpg
│   └── vercel.svg
├── styles
│   └── main.scss
└── tsconfig.json

```
