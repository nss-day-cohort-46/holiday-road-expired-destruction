import { useParks } from "../parks/ParkProvider.js"
import { ParksHtml } from "../parks/Parks.js"

const contentContainer = document.querySelector(".parkContainer")



const eventHub = document.querySelector(".container")
eventHub.addEventListener("parkSelected", event => {
    // console.log(event)
    const selectedParkId = event.detail.selectedParkId
    const parksArray = useParks()
    const selectedPark = parksArray.find((park) => park.id === selectedParkId)
    // console.log(selectedPark)
    // console.log(selectedParkId)
    contentContainer.innerHTML = ParksHtml(selectedPark)
})