import { useParks, getParks } from "./ParkProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".parksDropdown")

eventHub.addEventListener("change", changeEvent => {
    if(changeEvent.target.id === "parkSelect") {
        const selectedPark = changeEvent.target.value
        // console.log(changeEvent.target.value)

        const parkSelectedCustomEvent = new CustomEvent("parkSelected", {
            detail: {
                selectedParkId: selectedPark
            }
        })

        eventHub.dispatchEvent(parkSelectedCustomEvent)
    }
})

export const ParkSelect = () => {
    getParks()
    .then( () => {
        const park = useParks()
        render(park)
    })
}

const render = parkCollection => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="parkSelect">
        <option value="0">Please Select a Park...</option>
        ${
            parkCollection.map(park => `<option value="${park.id}">${park.fullName}</option>`).join("")
        }
    </select>
    `
}