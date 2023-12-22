let toogler = document.querySelector(".toogle");
let nav = document.querySelector("nav");
let close = document.querySelector(".close")

toogler.onclick = (e) => {
    nav.classList.add('open')
}

close.onclick = (e) => {
    nav.classList.remove('open')
}

document.onkeyup = (e) => {
    if(e.key === "Escape") {
        nav.classList.remove('open')
    }
}


document.onkeyup = (e) => {
    console.log(e)
}