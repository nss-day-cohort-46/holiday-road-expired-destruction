import { useAttractions, getAttractions } from "./attractions/AttractionProvider.js"
import { AttractionSelect } from "./attractions/AttractionSelect.js"
// import { ShowAttractionsButton } from "./attractions/AttractionsDetailButton.js"
import "./attractions/AttractionPreview.js"
import { getEateries, useEateries } from "./eateries/EateryProvider.js"
import { EaterySelect } from "./eateries/EateriesSelect.js"
import "./eateries/EateriesPreview.js"

AttractionSelect()
useAttractions()
getAttractions()
EaterySelect()
useEateries()
getEateries()
// ShowAttractionsButton()