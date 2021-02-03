export const AttractionsHtml = (attraction) => {
    return `
        <section class="attraction">
            <div class="attraction__name">${attraction.name}</div>
            <div class="attraction__">${attraction.state}</div>
            <div class="attraction__">${attraction.city}</div>
            <div class="attraction__">${attraction.description}</div>
            <div class="attraction__">${attraction.ameneties[0].restrooms}</div>
        </section>
    `
}