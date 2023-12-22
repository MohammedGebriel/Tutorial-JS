let colors = ['red','green','blue','yellow','bluevile','aliceblue','azure','#eee','#333','black']
let  page = document.querySelector("body")
let button = document.querySelector('button')

button.onclick = function(e) {
    page.style.backgroundColor = `${colors[Math.floor(Math.random() * colors.length)]}`
}





