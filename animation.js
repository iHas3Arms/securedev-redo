let cardContainer = document.querySelector(".card-container");
let card1 = document.getElementById("card-1");
let card2 = document.getElementById("card-2");
let card3 = document.getElementById("card-3");
let card4 = document.getElementById("card-4");

let isSmall = false;

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
    }, 5000);
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
    }, 5000);
}

idleChangeCards();

let countUpNumbers = document.querySelectorAll(".count-up");
let timeForCountNumbers = 3000;

countUpNumbers.forEach((number) => {
    let startValue = 0;
    let endValue = parseInt(number.getAttribute("data-val"));
    let duration = timeForCountNumbers / endValue;
    let counter = setInterval(function() {
        startValue += 1;
        number.innerText = startValue;
        if (startValue === endValue) {
            clearInterval(counter);
            console.log("ALL ARE FINISHED" + startValue);
        }
    }, duration);
});