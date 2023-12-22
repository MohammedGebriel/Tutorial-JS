let buttons = document.querySelectorAll(".switcher li");
let images = document.querySelectorAll(".gallery img")


buttons.forEach((button) => {
    button.onclick = (e) => {
        buttons.forEach((el) => {
            el.classList.remove("active")
        })
        e.target.classList.add("active")

        images.forEach((img) => {
            img.style.display = 'none'
        })
        document.querySelectorAll(e.target.dataset.cat).forEach(e => {
            e.style.display = 'block'
        })
    }
})




