import "./EateriesPreview.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {
    console.log(event.target.value)
    if(event.target.id.startsWith("eatery--")) {
        const [prefix, eateryId] = event.target.id.split("--")
        console.log(prefix, event)
        const customEvent = new CustomEvent("EateriesClicked", {
            detail: {
                eateryId: parseInt(eateryId)
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})