import "./ParksPreview.js"

const eventHub = document.querySelector(".container")





eventHub.addEventListener("click", event => {
    console.log(event.target.value)
    if (event.target.id.startsWith("park--")) {
        const [prefix, parkId] = event.target.id.split("--")
        // console.log(prefix, event)
        const customEvent = new CustomEvent("ParksClicked", {
            detail: {
                parkId: parseInt(parkId)
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})