import { useAttractions, getAttractions } from "./attractions/AttractionProvider.js"
import { AttractionSelect } from "./attractions/AttractionSelect.js"
// import { ShowAttractionsButton } from "./attractions/AttractionsDetailButton.js"
import "./attractions/AttractionPreview.js"
import { getParks, useParks } from "./parks/ParkProvider.js"
import { ParkSelect } from "./parks/ParksSelect.js"
import "./parks/ParksPreview.js"

AttractionSelect()
useAttractions()
getAttractions()
// ShowAttractionsButton()
getParks()
useParks()
ParkSelect()
