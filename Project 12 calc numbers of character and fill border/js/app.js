let input = document.querySelector('input')
let progress = document.querySelector(".progress")
let count = document.querySelector('.count')

let maxLength = input.getAttribute('maxlength')

input.oninput = (e) => {
    count.innerHTML = maxLength - input.value.length

    count.innerHTML == 0 ? count.classList.add("zero") : count.classList.remove("zero")

    progress.style.width = `${(input.value.length * 100)/ maxLength}%`

}
