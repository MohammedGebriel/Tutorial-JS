let images = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg"]

let img = document.querySelector('.container .box img');

let left = document.querySelector('.container .box .left');

let right = document.querySelector('.container .box .right')

let x = 0;

right.addEventListener('click',(e) => {
    img.src = `images/${images[++x]}`
    if(x === 8) {
        x = 0
        img.src = `images/${images[x]}`
    }
})

left.addEventListener('click',(e) => {
    img.src = `images/${images[--x]}`
    if(x === -1) {
        x = 7
        img.src = `images/${images[x]}`
    }

})








