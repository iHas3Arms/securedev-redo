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

function scrollToTop() {
    window.scrollTo(0, 0);
}

allHeaderLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        if (link == homeLink) {
            scrollToTop();
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