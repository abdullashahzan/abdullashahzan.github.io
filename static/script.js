function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 10;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

var navbtn = document.querySelector(".burger");
var nav = document.querySelector(".overlayNav");
var crossbtn = document.querySelector(".cross");

navbtn.addEventListener("click", openMenu);
crossbtn.addEventListener("click", closeMenu);

function openMenu() {
    nav.style.display = 'block';
}

function closeMenu() {
    nav.style.display = "none";
    nav.classList.remove = 'smooth'
}


var blurredContainer = document.querySelector(".getBlurred");

function getBlurred() {
    var blur;
    if (window.pageYOffset < 200) {
        blur = window.pageYOffset/80;
    }
    blurredContainer.style.filter = "blur(" + blur + "px)";
}

window.addEventListener("scroll", getBlurred);