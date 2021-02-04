let attraction = []
    // console.log("Attraction test",attraction)

export const useAttractions = () => {
    return attraction.slice()
}
export const getAttractions = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
    .then(response => response.json())
        .then(parsedAttraction => {
            // console.log("Attraction test 2", parsedAttraction)
             attraction = parsedAttraction
        })
}