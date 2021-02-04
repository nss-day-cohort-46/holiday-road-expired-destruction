export const EateriesHtml = (eatery) => {
    return `
        <section class="eatery">
            <h3 class="eatery__name">${eatery.name}</h3>
            <div class="eatery__">${eatery.state}</div>
            <div class="eatery__">${eatery.city}</div>
            <button id="eatery--${eatery.id}">${eatery.name} Details</button>
        </section>
    `
}