// For Babies 

// let colors = ['red','yellow','black','brown','white','blueviolet','orange','orangered']
// document.body.style.backgroundColor = `${colors[Math.floor(Math.random() * colors.length)]}`






// For Professionals
let hexArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let newArray = [];
for(let i = 0; i < 6; i++) {
    newArray.push(hexArray[Math.floor(Math.random() * hexArray.length)])
}
let color = `#${newArray.join('')}`
document.body.style.backgroundColor = color



