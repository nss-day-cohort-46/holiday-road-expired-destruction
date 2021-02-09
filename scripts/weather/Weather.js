export const Weather = (weatherObj) => {
    return `
    <div class ="weatherObj">
        <p>High: ${weatherObj.temp.max}°</p>
        <p>Low: ${weatherObj.temp.min}°</p>
    </div>
    `
}