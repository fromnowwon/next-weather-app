# Next Weather App

π [Demo](https://nemo-next-weather-app.herokuapp.com/)

![](./public/images/next-weather-app-16_9.gif)

<br/>

## Introduction
- μ μΈκ³ λμλ₯Ό κ²μνλ©΄ λ μ¨ μ λ³΄λ₯Ό μ κ³΅νλ μ νλ¦¬μΌμ΄μμλλ€.
- API : [OpenWeather](https://openweathermap.org/)

<br/>

## Development Environment
- Client: Next.js, TypeScript, SCSS

<br/>

## μ΅μ ν
- Lodash λΌμ΄λΈλ¬λ¦¬
	- debounce λ©μλλ‘ κ²μ νΌ μ΅μ ν

<br />

## Reference
π [Creating a Weather Forecast Web App with Next.js - Next.js Beginner Project](https://youtu.be/6UlpfXQWysg)

<br/>

### λ νΌλ°μ€λ³΄λ€ κ°μ λ μ¬ν­
- κ²μ νΌ μ΅μ ν
- TypeScript νκ²½μμ μμνμμ΅λλ€.
- κΈ°μ‘΄ μ νλ¦¬μΌμ΄μμ City listκ° λ‘μ»¬ νμΌμ΄μμΌλ, APIλ‘ λ°μ΄ν°λ₯Ό κ°μ Έμ μ¬μ©νμμ΅λλ€.
- κΈ°μ‘΄ City listλ μλ¬Έλ§ ν¬ν¨μ΄μμΌλ, APIλ‘ κ°μ Έμ¨ City listλ μ μΈκ³ μΈμ΄κ° ν¬ν¨λμ΄ μμ΄ μνλ μΈμ΄λ‘ κ²μμ΄ κ°λ₯ν©λλ€.

<br/>

## Tree
```
next-weather-app
βββ pages (λΌμ°ν κΈ°λ₯ λ΄λΉ)
β   βββ _app.tsx (Application Container. κΈλ‘λ² CSS & κ³΅ν΅ λ μ΄μμ λ±μ μ μ©νλ κ³³)
β   βββ _document.tsx (<head> νκ·Έ μμ μμ±λ  CDNμ΄λ κ³΅ν΅μΌλ‘ μΆκ°λ  meta νκ·Έλ₯Ό μμ±)
β   βββ index.tsx (Root Page. /λ‘ μμλλ κ²½λ‘λ₯Ό λ§νλ€.)
β   βββ location (λ€μ΄λλ―Ή λΌμ°ν°)
β       βββ [city].tsx
βββ public (μ μ  μμμ root λλ ν λ¦¬)
β   βββ images
βββ components (μ»΄ν¬λνΈ νμΌ λ³΄κ΄)
β   βββ FamousPlaces.tsx (μΈκΈ° κ²μ μ₯μ)
β   βββ Header.tsx (ν€λ)
β   βββ SearchBox.tsx (κ²μμ°½)
β   βββ HourlyWeather.tsx (μκ°λ³ λ μ¨)
β   βββ TodaysWeather.tsx (μ€λμ λ μ¨)
β   βββ WeeklyWeather.tsx (μ£Όκ° λ μ¨)
βββ styles (μ μ  μμ μ€ CSS νμΌμ λ³λ λ³΄κ΄)
β   βββ main.scss
βββ .eslintrc.json (env, parser, plugins, extends, rules λ±μ μ μ)
βββ next.config.js
βββ tsconfig.json
βββ package.json
```
