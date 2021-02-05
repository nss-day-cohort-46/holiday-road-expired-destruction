import { useAttractions } from "./AttractionProvider.js"

export const AttractionsHtml = (attraction) => {
    return `
        <section class="attraction">
            <h3 class="attraction__name">${attraction.name}</h3>
            <div class="attraction__">${attraction.state}</div>
            <div class="attraction__">${attraction.city}</div>
            <button id="attraction--${attraction.id}">${attraction.name} Details</button>
        </section>
    `
}

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".attractionDiv")

eventHub.addEventListener("click", event => {
    // console.log(event)
    if(event.target.id.startsWith("attraction--")) {
        const [prefix, attractionId] = event.target.id.split("--") 
    
            const attractionsArray = useAttractions()
            const selectedAttraction = attractionsArray.find((attraction) => attraction.id === parseInt(attractionId))
            contentTarget.innerHTML = `
            ${detailsWindow(selectedAttraction)}
            `
            // detailsWindow(selectedattraction)
        // console.log(prefix, event)
        const customEvent = new CustomEvent("attractionButtonClicked", {
            detail: {
                attractionId: parseInt(attractionId)
            }
        })
        // console.log(customEvent)
        eventHub.dispatchEvent(customEvent) 
    }
})

const detailsWindow = (attraction) => {
    console.log(attraction.ameneties)
    return `
    <section class="windowContainerContent">
    <h2>Attraction: ${attraction.name}</h2>
    <p>City: ${attraction.city}</p> 
    <p>State: ${attraction.state}</p> 
    <p>${attraction.description}</p> 
    <h4>Ameneties:</h4>
    <p>Restrooms: ${attraction.ameneties.restrooms}</p>
    </section> 
    `
}