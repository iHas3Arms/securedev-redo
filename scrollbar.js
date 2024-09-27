let body = document.body;
let html = document.documentElement;
let scrollbar = document.getElementById("scrollbar");

let pageHeight = Math.max( body.scrollHeight, body.offsetHeight,
                           html.clientHeight, html.scrollHeight, html.offsetHeight );

let scrollPageHeight = pageHeight - window.innerHeight;

document.addEventListener("scroll", function() {
    let percentScrolledDown = window.scrollY / scrollPageHeight;
    scrollbar.style.scale = percentScrolledDown + " 1";
});