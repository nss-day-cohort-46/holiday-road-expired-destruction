export const EateriesHtml = (eatery) => {
    return `
        <section class="eatery">
            <h3 class="eatery__name">${eatery.businessName}</h3>
            <div class="eatery__">${eatery.state}</div>
            <div class="eatery__">${eatery.city}</div>
            <button id="eatery--${eatery.id}">${eatery.businessName} Details</button>
        </section>
    `
}