export const AttractionsHtml = (attraction) => {
    return `
        <section class="attraction">
            <h3 class="attraction__name">${attraction.name}</h3>
            <div class="attraction__">${attraction.state}</div>
            <div class="attraction__">${attraction.city}</div>
        </section>
    `
}