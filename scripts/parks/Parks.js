export const ParksHtml = (park) => {
    return `
        <section class="park">
            <h3 class="attraction__name">${park.fullName}</h3>
            <div class="attraction__">${park.states}</div>
            <button id="attraction--${park.id}">${park.fullName} Details</button>
        </section>
    `
}