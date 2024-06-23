// Cards animation

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
        } else if (i === 1) {
            card1.style.width = "max(70px, 7rem)";
            card2.style.width = "90rem";
        } else if (i === 2) {
            card2.style.width = "max(70px, 7rem)";
            card3.style.width = "90rem";
        } else if (i == 3) {
            card3.style.width = "max(70px, 7rem)";
            card4.style.width = "90rem";
        }
        i++;
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

// Stats

let stat1 = document.getElementById("stat-1");
let stat2 = document.getElementById("stat-2");
let stat3 = document.getElementById("stat-3");
let stat4 = document.getElementById("stat-4");
let stats = [stat1, stat2, stat3, stat4];
let endNumbers = [245, 24, 52, 818];

let duration = 3000;

stats.forEach(stat => {
    let startValue = 0;
    let endValue = endNumbers[stat.id.split("-")[1] - 1];
    let i = 3;
    if (stat === stat2) {
        i = .25;
    } else if (stat === stat3) {
        i = .5;
    } else if (stat === stat4) i = 8;

    let counter = setInterval(function() {
        startValue += i;
        stat.innerText = parseInt(startValue);
        if (startValue >= endValue) {
            stat.innerText = endValue;
            clearInterval(counter);
        }
    }, 20);
    console.log(endValue);

    let bounce = setInterval(function() {
        let randomTime = Math.floor(Math.random() * 7) * 1000;
        stat.style.animation = "bounce 1.5s ease";
        stat.addEventListener("animationend", () => {
            stat.style.animation = "none";
        })
    }, 3000);
});

// Our Services flip animation

let boxes = document.querySelectorAll(".box");

let textContainers = document.querySelectorAll(".text-container");

let flipped = false;

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (!flipped) {
            flipped = true;
            box.style.transform = "rotateY(180deg)";
        } else {
            flipped = false;
            box.style.transform = "rotateY(0deg)";
        }
    });
});