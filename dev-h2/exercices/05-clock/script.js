const clockElement = document.querySelector('.js-clock')
const clockHoursElement = clockElement.querySelector('.js-hours')
const clockMinutesElement = clockElement.querySelector('.js-minutes')
const clockSecondsElement = clockElement.querySelector('.js-seconds')

const tick = () =>
{
    const date = new Date()

    const hours = date.getHours()
    const angleHours = (hours % 12) / 12 * 360

    clockHoursElement.style.transform = `rotate(${angleHours}deg)`

    const minutes = date.getMinutes()
    const angleMinutes = minutes /60 * 360 + hours * 360

    clockMinutesElement.style.transform = `rotate(${angleMinutes}deg)`

    const seconds = date.getSeconds()
    const angleSecondes = seconds /60 * 360 + hours * 360 + minutes * 360

    clockSecondsElement.style.transform = `rotate(${angleSecondes}deg)`
}

window.setInterval(tick, 1000)
