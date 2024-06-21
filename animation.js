let cardContainer = document.querySelector(".card-container");
let card1 = document.getElementById("card-1");
let card2 = document.getElementById("card-2");
let card3 = document.getElementById("card-3");
let card4 = document.getElementById("card-4");

let isSmall = false;
let slideshowInterval = 4000;

if (window.innerWidth < 845) isSmall = true;

function idleChangeCards() {
    if (isSmall) {
        smallIdleChangeCards();
        return;
    }
    i = 1;
    let interval = setInterval(function() {
        if (i === 0) {
            card4.style.width = "max(70px, 7rem)";
            card1.style.width = "90rem";
            i++;
        } else if (i === 1) {
            card1.style.width = "max(70px, 7rem)";
            card2.style.width = "90rem";
            i++;
        } else if (i === 2) {
            card2.style.width = "max(70px, 7rem)";
            card3.style.width = "90rem";
            i++;
        } else if (i == 3) {
            card3.style.width = "max(70px, 7rem)";
            card4.style.width = "90rem";
            i++;
        }
        if (i > 3) i = 0;
    }, slideshowInterval);
}

function smallIdleChangeCards() {
    i = 1;
    let interval = setInterval(function() {
        if (i === 0) {
            card4.style.width = "max(40px, 4rem)";
            card1.style.width = "90rem";
            i++;
        } else if (i === 1) {
            card1.style.width = "max(40px, 4rem)";
            card2.style.width = "90rem";
            i++;
        } else if (i === 2) {
            card2.style.width = "max(40px, 4rem)";
            card3.style.width = "90rem";
            i++;
        } else if (i == 3) {
            card3.style.width = "max(40px, 4rem)";
            card4.style.width = "90rem";
            i++;
        }
        if (i > 3) i = 0;
    }, slideshowInterval);
}

idleChangeCards();

let countUpNumbers = document.querySelectorAll(".count-up");

let stat1 = document.getElementById("stat-1");
let stat2 = document.getElementById("stat-2");
let stat3 = document.getElementById("stat-3");
let stat4 = document.getElementById("stat-4");
let allStats = [stat1, stat2, stat3, stat4];

let increment = 2;
let duration = 3000;

countUpNumbers.forEach((number) => {
    let startValue = 0;
    let endValue = parseInt(number.getAttribute("data-val"));

    let interval = duration / endValue;
    console.log(number.id);

    let counter = setInterval(function() {
        startValue += increment;
        number.innerText = startValue;
        if (startValue >= endValue) {
            number.innerText = endValue;
            clearInterval(counter);
        }
    }, interval);
});