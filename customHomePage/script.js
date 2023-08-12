const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const overlay = document.querySelector(".overlayContainer");
const overlayIcon = document.querySelector(".overlayIcon");
const timeField = document.querySelector(".timeField");
var overlayStatus = 0;

function setTime() {
    const hourAPI = new Date();
    let paddedHours = hourAPI.getHours();
    let paddedMinutes = hourAPI.getMinutes();
    let formattedHours = paddedHours.toString().padStart(2, '0');
    let formattedMinutes = paddedMinutes.toString().padStart(2, '0');

    hour.innerHTML = formattedHours;
    minute.innerHTML = formattedMinutes;
}

function openCloseOverlay() {
    if (overlayStatus == 0) {
        overlayStatus = 1;
        overlay.style.opacity = 1;
        overlayIcon.classList.remove("bi-search");
        overlayIcon.classList.add("bi-x-circle");
        timeField.style.filter = "blur(10px)";
    } else {
        overlayStatus = 0;
        overlay.style.opacity = 0
        overlayIcon.classList.remove("bi-x-circle");
        overlayIcon.classList.add("bi-search");
        timeField.style.filter = "blur(0px)";
    }
}

setInterval(setTime, 5000);
