let dropDownBtn = document.getElementById("drop-down-btn");
let nav = document.getElementById("links");
let links = document.getElementById("links");
let header = document.querySelector("header");

let headerReplacement = document.querySelector(".header-replacement");

let headerHeight = header.offsetHeight;

console.log(headerHeight);

headerReplacement.style.height = headerHeight + "px";

let menuOpen = false;

let contactListItemAdded = false;

let contactHyperLink = document.createElement("a");
contactHyperLink.innerText = "Contact";
let contactListItem = document.createElement("li");
contactListItem.className = "contact-list-item";
contactListItem.append(contactHyperLink);



function changeStateOfDropDown() {
    if (!contactListItemAdded) {
        links.append(contactListItem);
        contactListItemAdded = true;
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
}