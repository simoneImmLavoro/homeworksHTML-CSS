let sliderPiece = document.querySelector(".slider-piece");
let plantGallery = document.querySelector(".plant-gallery")
let circleTag = document.querySelectorAll(".circle-tag")


let plantArchive = "http://localhost:3000/plants";
let plantImgs = [];
let interval = 1400;
let forCart = [];

sliderPiece.setAttribute("src", "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.l.040-1_1.jpg&w=640&q=80");


fetch(plantArchive)
    .then(data => {
        return data.json();
    })
    .then(response => {
        response.forEach(plant => {
            plantImgs.push(plant.img);
            createPlantCard(plant);
        });
        setInterval(randomizeSliderPlants, interval);
    })

    let lastRandomIndex = -1;

    function randomizeSliderPlants() {
        if (plantImgs.length > 1) {
            let random;
            do {
                random = Math.floor(Math.random() * plantImgs.length);
            } while (random === lastRandomIndex);
    
            lastRandomIndex = random;
            sliderPiece.setAttribute("src", plantImgs[random]);
        } else if (plantImgs.length === 1) {
            sliderPiece.setAttribute("src", plantImgs[0]);
        }
    }

function createPlantCard(plant){
    let plantCard = document.createElement("div");
    let plantCardInner = document.createElement("div");
    let plantImgBox = document.createElement("div");
    let plantImg= document.createElement("img");
    let plantTexBox = document.createElement("div");
    let textBox = document.createElement("div");
    let plantName = document.createElement("h5");
    let plantFamily = document.createElement("p");
    let plantPrice = document.createElement("p");
    let plantAmount = document.createElement("span");
    let plantDescr = document.createElement("p");
    let plantButtonDiv = document.createElement("div");
    let plantButtonCta = document.createElement("div");
    let plantAlert = document.createElement("p");

    plantCard.setAttribute("class", "plant-card")
    plantCardInner.setAttribute("class", "plant-card-inner")
    plantImgBox.setAttribute("class", "plant-img-box")
    plantImg.setAttribute("class", "plant-img")
    plantImg.setAttribute("src", plant.img)
    plantTexBox.setAttribute("class", "plant-text-box")
    textBox.setAttribute("class", "text-box")
    plantName.setAttribute("class", "p-name")
    plantFamily.setAttribute("class", "p-family")
    plantPrice.setAttribute("class", "p-price")
    plantAmount.setAttribute("class", "p-amount")
    plantDescr.setAttribute("class", "p-descr")
    plantButtonDiv.setAttribute("class", "p-button-div")
    plantButtonCta.setAttribute("class", "p-cta add")
    plantAlert.setAttribute("class", "p-alert")

    plantName.textContent = plant.nome;
    plantFamily.textContent = plant.family;
    plantPrice.textContent = "Price: €";
    plantAmount.textContent = plant.prezzo;
    plantDescr.textContent = plant.shortDescr;
    plantButtonCta.textContent = "Add to Cart";
    plantAlert.textContent = "Element added!"

    plantButtonCta.addEventListener("click", function(){
        if(plantButtonCta.classList.contains("add")){
            plantAlert.style.visibility = "visible";
            plantButtonCta.classList.remove("add");
            plantButtonCta.classList.add("remove");
            plantButtonCta.textContent = "Remove item";
            forCart.push(plant.id)
        } else {
            plantAlert.style.visibility = "hidden";
            plantButtonCta.classList.remove("remove");
            plantButtonCta.classList.add("add");
            plantButtonCta.textContent = "Add to Cart";

            forCart = forCart.filter(id => id !== plant.id)
        }

        console.log(forCart.length); 
        cartNumberTag()
    })
    
    plantCardInner.appendChild(plantImgBox)
    plantCardInner.appendChild(plantTexBox)
    
    plantImgBox.appendChild(plantImg)
    plantTexBox.appendChild(textBox)
    plantTexBox.appendChild(plantPrice)
    
    textBox.appendChild(plantName)
    textBox.appendChild(plantFamily)
    
    plantPrice.appendChild(plantAmount)

    plantButtonDiv.appendChild(plantButtonCta)
    plantButtonDiv.appendChild(plantAlert)
    
    plantCard.appendChild(plantCardInner)
    plantCard.appendChild(plantDescr)
    plantCard.appendChild(plantButtonDiv)

    plantGallery.appendChild(plantCard)
}

function cartNumberTag(){
    circleTag.forEach(tag =>{
        if(forCart.length > 0){
            tag.style.visibility = "visible";
            tag.textContent = forCart.length
        } else {
            tag.style.visibility = "hidden";
        }
    })
}