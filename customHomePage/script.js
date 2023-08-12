const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const TodaysDate = document.querySelector(".date");
const overlay = document.querySelector(".overlayContainer");
const overlayIcon = document.querySelector(".overlayIcon");
const timeField = document.querySelector(".timeField");
const bubblesDiv = document.querySelector(".bubblesDiv");
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

function getFormattedDate(date) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    let daySuffix;
    if (day === 1 || day === 21 || day === 31) {
        daySuffix = "st";
    } else if (day === 2 || day === 22) {
        daySuffix = "nd";
    } else if (day === 3 || day === 23) {
        daySuffix = "rd";
    } else {
        daySuffix = "th";
    }

    TodaysDate.innerHTML = `${dayOfWeek}, ${day}${daySuffix} ${month} ${year}`;
}

// Usage example:
const date = new Date("2023-08-18");
const formattedDate = getFormattedDate(date);
console.log(formattedDate);

function openCloseOverlay() {
    if (overlayStatus == 0) {
        overlayStatus = 1;
        overlay.style.opacity = 1;
        overlayIcon.classList.remove("bi-search");
        overlayIcon.classList.add("bi-x-circle");
        timeField.style.filter = "blur(10px)";
        bubblesDiv.style.filter = "blur(1px)";
    } else {
        overlayStatus = 0;
        overlay.style.opacity = 0
        overlayIcon.classList.remove("bi-x-circle");
        overlayIcon.classList.add("bi-search");
        timeField.style.filter = "blur(0px)";
        bubblesDiv.style.filter = "blur(0px)";
    }
}

setInterval(setTime, 100);
