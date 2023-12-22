let section = document.querySelector(".three")
let nums = document.querySelectorAll(".nums .num")
let started = false;

window.onscroll = (e) => {
    if(window.scrollY >= section.offsetTop - 300) {
        if (!started) {
            nums.forEach((num) => {
                startCount(num)
            })
        }
        started = true;
    }
}


function startCount(num) {
    let goal = num.dataset.goal
    let count = setInterval((e) => {
        num.textContent++
        if(num.textContent == goal) {
            clearInterval(count)
        }
    },200 / num.dataset.goal)    
}

