import {useEateries} from "./EateryProvider.js"
export const EateriesHtml = (eatery) => {
    return `
        <section class="eatery previewSelect">
            <h3 class="eatery__name">${eatery.businessName}</h3>
            <div class="eatery__">${eatery.state}</div>
            <div class="eatery__">${eatery.city}</div>
            <button class="detailsButton" id="eatery--${eatery.id}">${eatery.businessName} Details</button>
        </section>
    `
}

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".eateryDiv")

eventHub.addEventListener("click", event => {
    // console.log(event)
    if(event.target.id.startsWith("eatery--")) {
        const [prefix, eateryId] = event.target.id.split("--") 
    
            const eateriesArray = useEateries()
            const selectedEatery = eateriesArray.find((eatery) => eatery.id === parseInt(eateryId))
            contentTarget.innerHTML = `
            ${detailsWindow(selectedEatery)}
            `
            // detailsWindow(selectedEatery)
        // console.log(prefix, event)
        const customEvent = new CustomEvent("EateryButtonClicked", {
            detail: {
                eateryId: parseInt(eateryId)
            }
        })
        // console.log(customEvent)
        eventHub.dispatchEvent(customEvent) 
    }
})

const detailsWindow = (eatery) => {
    console.log(eatery.ameneties)
    return `
    <section class="windowContainerContent previewSelect">
    <h2>Eatery: ${eatery.businessName}</h2>
    <p>City: ${eatery.city}</p> 
    <p>State: ${eatery.state}</p> 
    <p>${eatery.description}</p> 
    <h4>Ameneties:</h4>
    <p>Restrooms: ${eatery.ameneties.restrooms}</p>
    <p>Wifi: ${eatery.ameneties.wifi}</p>
    </section> 
    `
}