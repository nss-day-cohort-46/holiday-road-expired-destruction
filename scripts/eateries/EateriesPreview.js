import { useEateries } from "./EateryProvider.js"
import { EateriesHtml } from "./Eateries.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".eateryContainer")

eventHub.addEventListener("eateriesSelected", event => {
    console.log(event)
    const selectedEateryId = event.detail.selectedEateryId
    const eateriesArray = useEateries()
    const selectedEatery = eateriesArray.find((eatery) => eatery.id === parseInt(selectedEateryId))
    contentTarget.innerHTML = EateriesHtml(selectedEatery)

    
})



