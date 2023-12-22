let button = document.querySelector(".generate")
let serial = document.querySelector(".serial")





button.onclick = (e) => {
    let characters = "ELEMENATORAN0055085154815DW05150sdfEAREPH0104t4she"
    let count = 10
    let randomSerial = ""
    for(let i = 0; i < count; i++) {
        randomSerial += characters[Math.floor(Math.random() * characters.length)]
    }
    serial.innerHTML = randomSerial
}

