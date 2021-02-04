import { useAttractions } from "../attractions/AttractionProvider.js"
import { AttractionsHtml } from "./Attractions.js"

const contentContainer = document.querySelector(".attractionContainer")

// export const AttractionDetail = (attractionObj) => {
//     const HTMLRep = `
//     <div id="alibi__modal" class="modal--parent">
//         <div class="modal--content">
//             <h1>Known attraction for ${attractionObj.name}</h1>
//             ${attractionObj.known_attraction.map(attraction => {
//         return `<section class="attraction__container">
//             <div class="attraction__name">${attraction.name}</div>
//             <div class="attraction__city">${attraction.city}</div>
//             <div class="attraction__state">${attraction.state}</div>
//             <div class="attraction__description">${attraction.description}</div>
//             <div class="attraction__amenenties">${attraction.amenenties[0]}</div>
//             </section>`
//     }).join("")}
//     <button id="modal--close">close preview</button>
//         </div>
//     </div>
//         `

//     contentContainer.innerHTML = HTMLRep
// }

const eventHub = document.querySelector(".container")
eventHub.addEventListener("attractionSelected", event => {
    const selectedAttractionId = event.detail.attractionId
    const attractionsArray = useAttractions()
    const selectedAttraction = attractionsArray.find((attraction) => attraction.id === selectedAttractionId)
    contentContainer.innerHTML = AttractionsHtml(selectedAttraction)
})


// eventHub.addEventListener("click", event => {
//     if (event.target.id === "modal--close") {
//         closeModal()
//     }
// })

// const closeModal = () => {
//     contentContainer.innerHTML = ""
// }