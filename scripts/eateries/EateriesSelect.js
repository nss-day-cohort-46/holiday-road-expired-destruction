import { useEateries, getEateries } from "./EateryProvider.js"

const eventHub = document.querySelector(".container")
const conetentTarget = document.querySelector(".eateriesDropdown")

eventHub.addEventListener("change", changeEvent => {
    if(changeEvent.target.id === "eaterySelect") {
        const selectedEatery = changeEvent.target.value
        // console.log(changeEvent.target.value)

        const eaterySelectedCustomEvent = new CustomEvent("eateriesSelected", {
            detail: {
                selectedEateryId: selectedEatery
            }
        })
        eventHub.dispatchEvent(eaterySelectedCustomEvent)
    }
})

export const EaterySelect = () => {
    getEateries()
        .then( () => {
            const eatery = useEateries()
            render(eatery)
        })
}

const render = eateryCollection => {
    // console.log(eateryCollection)
    conetentTarget.innerHTML = `
    <select class="dropdown" id="eaterySelect">
        <option value="0">Please Select an Eatery...</option>
    ${
        eateryCollection.map(eatery => `<option value="${eatery.id}">${eatery.businessName}</option>`).join("")
    }
    </select>
    `
}