const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");

function setTime() {
    const hourAPI = new Date();
    let paddedHours = hourAPI.getHours();
    let paddedMinutes = hourAPI.getMinutes();
    let formattedHours = paddedHours.toString().padStart(2, '0');
    let formattedMinutes = paddedMinutes.toString().padStart(2, '0');

    hour.innerHTML = formattedHours;
    minute.innerHTML = formattedMinutes;
}

setInterval(setTime, 5000);
