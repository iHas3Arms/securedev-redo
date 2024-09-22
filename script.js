// let face = document.querySelector("#face");

// setTimeout(function() {
//     face.style.display = "block";
// }, Math.floor((Math.random() * 20) + 10) * 1000);

let scrollToTopBtn = document.querySelector(".scroll-to-top");
let headerLogo = document.getElementById("logo");
let headerLogoLink = document.getElementById("logo-link");
let listItems = links.querySelectorAll("li");

document.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        
        header.classList.add("scrolled");
        headerLogo.style.width = "7vh";
        headerLogoLink.style.width = "7vh";
        headerLogo.style.borderRadius = "50%";
    } else {
        header.classList.remove("scrolled");
        headerLogo.style.width = "21vh";
        headerLogo.style.borderRadius = "0";
        headerLogoLink.style.width = "21vh";
        links.style.color = "white";
    }
    
    if (window.scrollY > window.innerHeight) {
        scrollToTopBtn.style.opacity = 1;
    } else {
        scrollToTopBtn.style.opacity = 0;
    }
});

function scrollToTop() {
    window.scrollTo(0, 0);
}

let homeSection = document.getElementById("card-container");
let aboutSection = document.getElementById("about-us");
let servicesSection = document.getElementById("our-services");
let projectSection = document.getElementById("our-projects");
let teamSection = document.getElementById("exec-team");

let homeLink = document.getElementById("home-link");
let aboutLink = document.getElementById("about-link");
let servicesLink = document.getElementById("services-link");
let projectLink = document.getElementById("project-link");
let teamLink = document.getElementById("team-link");
let allHeaderLinks = [homeLink, aboutLink, servicesLink, projectLink, teamLink];

allHeaderLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        if (link == homeLink) {
            window.scrollToTop();
        } else if (link == aboutLink) {
            console.log(aboutSection.getBoundingClientRect().y - header.offsetHeight);
            window.scrollTo(0, window.scrollY + aboutSection.getBoundingClientRect().y - header.offsetHeight);
        } else if (link == servicesLink) {
            window.scrollTo(0, window.scrollY + servicesSection.getBoundingClientRect().y - header.offsetHeight);
        } else if (link == projectLink) {
            window.scrollTo(0, window.scrollY + projectSection.getBoundingClientRect().y - header.offsetHeight);
        } else if (link == teamLink) {
            window.scrollTo(0, window.scrollY + teamSection.getBoundingClientRect().y - header.offsetHeight);
        }
    });
});