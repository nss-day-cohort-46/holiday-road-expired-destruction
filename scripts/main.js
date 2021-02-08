import { useAttractions, getAttractions } from "./attractions/AttractionProvider.js"
import { AttractionSelect } from "./attractions/AttractionSelect.js"
// import { ShowAttractionsButton } from "./attractions/AttractionsDetailButton.js"
import "./attractions/AttractionPreview.js"
import { getParks, useParks } from "./parks/ParkProvider.js"
import { ParkSelect } from "./parks/ParksSelect.js"
import "./parks/ParksPreview.js"
import { getEateries, useEateries } from "./eateries/EateryProvider.js"
import { EaterySelect } from "./eateries/EateriesSelect.js"
import "./eateries/EateriesPreview.js"
import { getWeather, useWeather } from "./weather/WeatherProvider.js"


AttractionSelect()
useAttractions()
getAttractions()
// ShowAttractionsButton()
getParks()
useParks()
ParkSelect()
EaterySelect()
useEateries()
getEateries()
// ShowAttractionsButton()

useWeather()
getWeather ()
