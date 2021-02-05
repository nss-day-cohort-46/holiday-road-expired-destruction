import { useEateries } from "./EateryProvider.js"

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


let eatery1 = useEateries()

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {
    // console.log(event)
    if(event.target.id.startsWith("eatery--")) {
        const [prefix, eateryId] = event.target.id.split("--") 
       
        window.alert(`${eatery1}`);
        alert(`${eatery1}`);

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

// const WindowPopUp = (eatery) => {
//     return window.alert(`<h3 class="eatery__name">${eatery.businessName}</h3>
//     <div class="eatery__">${eatery.state}</div>
//     <div class="eatery__">${eatery.city}</div>`)
// }
// WindowPopUp()