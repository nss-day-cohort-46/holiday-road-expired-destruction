import { useAttractions, getAttractions } from "./attractions/AttractionProvider.js"
import { AttractionSelect } from "./attractions/AttractionSelect.js"
// import { ShowAttractionsButton } from "./attractions/AttractionsDetailButton.js"
import "./attractions/AttractionPreview.js"
import { getEateries } from "./eateries/EateryProvider.js"
import { EaterySelect } from "./eateries/EateriesSelect.js"

EaterySelect()
console.log(getEateries())
AttractionSelect()
useAttractions()
getAttractions()
// ShowAttractionsButton()