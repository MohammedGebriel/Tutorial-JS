let submit = document.querySelector("input[type='submit']")

let input = document.querySelector("input[type='text']")

let result = document.querySelector(".box .result")

let x;

submit.onclick = function(e) {
    localStorage.removeItem("value")
    localStorage.setItem("value",input.value)
}

result.innerHTML = localStorage.getItem("value")
