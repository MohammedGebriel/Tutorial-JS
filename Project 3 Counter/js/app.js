let number = document.querySelector(".number");

let lower = document.querySelector(".lower");

let add = document.querySelector(".add");


lower.onclick = function(e) {
    number.innerHTML = number.innerHTML - 1
    if(number.innerHTML < 0) {
        number.style.setProperty("color","red")
    }
}

add.onclick = function(e) {
    number.innerHTML = number.innerHTML - (-1)
    if(number.innerHTML >= 0) {
        number.style.setProperty("color","green")
    }
}












