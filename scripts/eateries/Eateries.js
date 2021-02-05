import {useEateries} from "./EateryProvider.js"
export const EateriesHtml = (eatery) => {
    return `
        <section class="eatery">
            <h3 class="eatery__name">${eatery.businessName}</h3>
            <div class="eatery__">${eatery.state}</div>
            <div class="eatery__">${eatery.city}</div>
            <button id="eatery--${eatery.id}">${eatery.businessName} Details</button>
        </section>
    `
}


const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {
    // console.log(event)
    if(event.target.id.startsWith("eatery--")) {
        const [prefix, eateryId] = event.target.id.split("--") 
    
            const eateriesArray = useEateries()
            const selectedEatery = eateriesArray.find((eatery) => eatery.id === parseInt(eateryId))
     
            detailsWindow(selectedEatery)
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
    window.alert( `
    Eatery: ${eatery.businessName}
    City: ${eatery.city}
    
    
    `


    )
}