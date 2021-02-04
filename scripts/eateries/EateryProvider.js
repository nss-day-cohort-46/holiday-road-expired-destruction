let eateries = []

export const useEateries = () => {
    return eateries.slice()
}

export const getEateries = () => {
    return fetch("http://holidayroad.nss.team/eateries")
    .then(response => response.json())
        .then(parsedEatery => {
            // console.log("Eatery test 2", parsedEatery)
             eateries = parsedEatery
        })
}