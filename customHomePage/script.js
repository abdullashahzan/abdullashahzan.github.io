const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const hourAPI = new Date();
const inputField = document.getElementById("inputField");

let paddedHours = hourAPI.getHours();
let paddedMinutes = hourAPI.getMinutes();
let formattedHours = paddedHours.toString().padStart(2, '0');
let formattedMinutes = paddedMinutes.toString().padStart(2, '0');

hour.innerHTML = formattedHours;
minute.innerHTML = formattedMinutes;

inputField.value = "";

function goToT3nsor() {
    window.location.href = "https://www.t3nsor.tech/";
}