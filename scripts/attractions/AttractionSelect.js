import { useAttractions, getAttractions } from "./AttractionProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".attractionsDropdown")

eventHub.addEventListener("change", changeEvent => {
    if(changeEvent.target.id === "attractionSelect") {
        const selectedAttraction = changeEvent.target.value
        console.log(changeEvent.target.value)

        const attractionSelectedCustomEvent = new CustomEvent("attractionSelected", {
            detail: {
                selectedAttractionId: selectedAttraction
            }
        })

        eventHub.dispatchEvent(attractionSelectedCustomEvent)
    }
})

export const AttractionSelect = () => {
    getAttractions()
    .then( () => {
        const attraction = useAttractions()
        render(attraction)
    })
}

const render = attractionCollection => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="attractionSelect">
        <option value="0">Please Select an Attraction...</option>
        ${
            attractionCollection.map(attraction => `<option value="${attraction.id}">${attraction.name}</option>`).join("")
        }
    </select>
    `
}