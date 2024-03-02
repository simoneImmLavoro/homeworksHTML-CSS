let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let quantity = document.querySelector("#amount");
let minus2 = document.querySelector("#minus2");
let plus2 = document.querySelector("#plus2");
let quantity2 = document.querySelector("#amount2");
let minus3 = document.querySelector("#minus3");
let plus3 = document.querySelector("#plus3");
let quantity3 = document.querySelector("#amount3");


minus.addEventListener("click", function(){
    let actualValue = quantity.value;
    if(actualValue > 0){
        actualValue--
        quantity.value = actualValue
    }
})

plus.addEventListener("click", function(){
    let actualValue = quantity.value;
        actualValue++
        quantity.value = actualValue
})

minus2.addEventListener("click", function(){
    let actualValue = quantity2.value;
    if(actualValue > 0){
        actualValue--
        quantity2.value = actualValue
    }
})

plus2.addEventListener("click", function(){
    let actualValue = quantity2.value;
        actualValue++
        quantity2.value = actualValue
})

minus3.addEventListener("click", function(){
    let actualValue = quantity3.value;
    if(actualValue > 0){
        actualValue--
        quantity3.value = actualValue
    }
})

plus3.addEventListener("click", function(){
    let actualValue = quantity3.value;
        actualValue++
        quantity3.value = actualValue
})