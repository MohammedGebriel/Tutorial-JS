let btn = document.querySelector(".up")

window.onscroll = function() {
    if(window.scrollY >= 1000) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }
}

btn.addEventListener('click', (e) => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})


