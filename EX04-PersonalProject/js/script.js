let mainTitle = document.querySelector(".main-title");
let underTitle = document.querySelector(".undertitle");
let header = document.querySelector("header");
let headerBox = document.querySelector(".header-box");
let companyName = document.querySelector(".company-name");
let desktopNav = document.querySelector(".desktop-nav");
let downArrow = document.querySelector(".down-arrow");
let hero = document.querySelector("#hero");
let logoImg = document.querySelector(".logo")

window.addEventListener("scroll", function () {
    if (window.scrollY >= window.innerHeight) {
        logoImg.style.opacity = 1;
        header.style.backgroundColor = "#578165"
        headerBox.style.opacity = "1"
    } else {
        header.style.backgroundColor = "transparent"
        logoImg.style.opacity = 0;
        headerBox.style.opacity = "1"
    }
});

function Plant(name, family, img, prezzo, shortDescr){
    this.name = name;
    this.family = family;
    this.img = img;
    this.prezzo = prezzo;
    this.shortDescr = shortDescr
}

window.addEventListener('beforeunload', function () {
    window.scrollTo(0, 0);
});

function mainTitleAppear() {
    mainTitle.style.opacity = "1";
}

function underTitleAppear() {
    underTitle.style.opacity = "1";
}

function utilsAppear() {
    headerBox.style.opacity = "1";
    downArrow.style.opacity = "0.6";
}

if (window.matchMedia("(min-width: 630px)").matches) {
    setTimeout(mainTitleAppear, 500);
    setTimeout(underTitleAppear, 1000);
    setTimeout(utilsAppear, 1800);
} else {
    mainTitleAppear();
    underTitleAppear();
    utilsAppear();
}

downArrow.addEventListener("click", function () {
    window.scrollBy({top: window.innerHeight, left: 0, behavior: 'smooth'});
});