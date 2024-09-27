let scrollToTopBtn = document.querySelector(".scroll-to-top");
let headerLogo = document.getElementById("logo");
let headerLogoLink = document.getElementById("logo-link");

document.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
    
    if (window.scrollY > window.innerHeight) {
        scrollToTopBtn.style.opacity = 1;
    } else {
        scrollToTopBtn.style.opacity = 0;
    }
});