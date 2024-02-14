let openBtn = document.querySelector("#openMenu");
let closeBtn = document.querySelector("#closeMenu");
let mobileMenu = document.querySelector(".mobile-nav")
let mobileMenuLinks = document.querySelectorAll(".mobile-nav a")

openBtn.addEventListener("click", function(){
    mobileMenu.style.right = "0";
})

closeBtn.addEventListener("click", function(){
    mobileMenu.style.right = "-70%";
})

mobileMenuLinks.forEach(link => {
    link.addEventListener("click", function(){
        mobileMenu.style.right = "-70%";
    })
})

// var widthPercent = ($('.one'). width() / $(window). width())*100;

let menuWidth = (mobileMenu.offsetWidth /window.innerWidth)*100

console.log(mobileMenu.offsetWidth);
console.log(window.innerWidth);

console.log(menuWidth);