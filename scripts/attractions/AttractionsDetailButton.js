import "./AttractionPreview.js"

const eventHub = document.querySelector(".container")
// const contentTarget = document.querySelector(".attractionContainer")


export const ShowAttractionsButton = (attraction) => {
    return `<button id="attraction--${attraction.id}">Details</button> `
}

eventHub.addEventListener("click", event => {
    console.log(event.target.value)
    if (event.target.id.startsWith("attraction--")) {
        const [prefix, attractionId] = event.target.id.split("--")
        console.log(prefix, event)
        const customEvent = new CustomEvent("AttractionsClicked", {
            detail: {
                attractionId: parseInt(attractionId)
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})