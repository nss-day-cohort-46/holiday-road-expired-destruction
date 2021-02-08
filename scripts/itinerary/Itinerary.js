const eventHub = document.querySelector(".container")

eventHub.addEventListener("parkSelected", event => {
    newItenaryObj.parkId = event.detail.selectedParkId
    console.log(newItenaryObj)
})

eventHub.addEventListener("eateriesSelected", changeEvent => {
    newItenaryObj.eateriesId = changeEvent.detail.selectedEateryId
    console.log(newItenaryObj)
})

eventHub.addEventListener("attractionSelected", changeEvent => {
    newItenaryObj.attractionId = changeEvent.detail.selectedAttractionId
    console.log(newItenaryObj)
})


// Find out which resources park, attracction, eatery has bneen currently selected most recently
// listen for the respective custom events, get those values and update empty on object
// then if someone selected them listen for when items are added to iteneray and store them in an object, to eventually send to the database
// when all three resources have a value enable the save button
// post method , need iternary provider with a post method
// listener on eventhub for parksSelected, etc hold on to park id example parkSelected (how do we want to save it in the database) as for the others 
// create itenary object 
const newItenaryObj = {
    parkId: "",
    attractionId: "",
    eateriesId: ""
}





























// const contentTarget = document.querySelector(".saveButtonContainerr")
// // const htmlRep = contentTarget.innerHTML = `<button class="saveButton">Save Itinerary</button>`

// const attractC = document.getElementsByClassName("attractionContainer");
// const parkC = document.getElementsByClassName("parkContainer");
// const eateryC = document.getElementsByClassName("eateryContainer");

// // eventHub.addEventListener("change", event => 

// export const buttonReveal = () => 
// {
// if (attractC.is(':empty')  || parkC.is(':empty') || eateryC.is(':empty') === false ){
//     return  ""
// } else {
//     return contentTarget.innerHTML = `<button class="saveButton">Save Itinerary</button>`
// }
// } 
