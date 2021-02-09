import { useParks } from "../parks/ParkProvider.js";
import { getWeather, useWeather } from "../weather/WeatherProvider.js"
import { Weather } from "../weather/Weather.js";
import "../parks/ParksPreview.js"

          
const contentContainer = document.querySelector(".parkContainer")
const eventHub = document.querySelector(".container")

// may need to use the listener from park select instead, this is from park preview
eventHub.addEventListener("parkSelected", event => {
    // console.log(event)
    const selectedParkId = event.detail.selectedParkId
    const parksArray = useParks()
    const selectedPark = parksArray.find((park) => park.id === selectedParkId)
    console.log(selectedPark)
    // console.log(selectedParkId)
    contentContainer.innerHTML = ParksHtml(selectedPark)
})
    
    
    getWeather(selectedPark.latitude, selectedPark.longitude)
    .then(()=> {
        const newWeatherArray = useWeather()
        render(newWeatherArray)
        
    })




const render = (weatherArray) => {  
    let weatherHTMLRep = ""
    
     for (let otherWeatherArray of weatherArray) {
        weatherHTMLRep += Weather(otherWeatherArray)
     }
        contentContainer.innerHTML = `
    <h3>5-Day Forecast</3>
    <section class="weatherList">
        ${weatherHTMLRep}
    </section>
    `
    }

