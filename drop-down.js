let dropDownBtn = document.getElementById("drop-down-btn");
let nav = document.getElementById("links");
let links = document.getElementById("links");
let header = document.querySelector("header");

let menuOpen = false;

let contactBtnInList = false;

let contactHyperLink = document.createElement("a");
contactHyperLink.innerText = "CONTACT";
let contactListItem = document.createElement("li");
contactListItem.className = "contact-list-item";
contactListItem.append(contactHyperLink);

function changeStateOfDropDown() {
    if (!contactBtnInList) {
        links.append(contactListItem);
        contactBtnInList = true;
    }

    if (!menuOpen) {
        openMenu();
        menuOpen = true;
    } else {
        closeMenu();
        menuOpen = false;
    }
}

function openMenu() {
    nav.style.top = header.offsetHeight + "px";
    nav.style.display = "flex";
    nav.style.opacity = "1";
    nav.style.maxHeight = "10000px";
    header.style.gap = "10px";
    dropDownBtn.style.outline = "3px solid rgb(151, 151, 151)";
}

function closeMenu() {
    nav.style.opacity = "0";
    nav.style.maxHeight = "0";
    header.style.gap = "0";
    dropDownBtn.style.outline = "0";
    setTimeout(() => {
        nav.style.display = "none";
    }, 300);
}