const departMinutes = 5
let temps = departMinutes * 61

const timerElement = document.getElementById("timer")

setInterval(() => {
    let secondes = parseInt(temps % 61, 10)

    secondes = secondes < 10 ? "0" + secondes : secondes

    timerElement.innerText = `${secondes}`
    temps = temps <= 0 ? 0 : temps - 1
}, 1000)