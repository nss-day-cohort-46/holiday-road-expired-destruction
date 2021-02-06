import {settings} from "../Settings.js"

let weather = []

export const useWeather = () => {
    return weather.slice()
}

export const getWeather = () => {
// only able to fetch one zip at a time but is in imperial units so it shows as degrees. Can also do a city but not sure how to pull all of them at once. or any locaiton we need??
    return fetch (`https:api.openweathermap.org/data/2.5/weather?zip=37013,us&APPID=${settings.weatherKey}&units=imperial`)
    .then (response => response.json())
        .then(parsedweather =>{
            console.log("weather",parsedweather)
            weather = parsedweather.main
        })
}
