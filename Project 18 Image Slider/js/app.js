let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

let slidescount = sliderImages.length;

let currentSlides = 1;

let slideNumberElement = document.querySelector('.slide-number');


let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');


nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

let paginationElement = document.createElement('ul')

paginationElement.setAttribute("id","pagination-ul")

for(let i = 1; i <= slidescount ; i++) {
    let paginationItem = document.createElement('li')

    paginationItem.setAttribute('data-index',i)

    paginationItem.appendChild(document.createTextNode(i))

    paginationElement.appendChild(paginationItem)
}

let indicator = document.querySelector('.indicator');
indicator.appendChild(paginationElement)

let paginationCreatedUl = document.getElementById("pagination-ul")

let paginationBullets = document.querySelectorAll('#pagination-ul li')
for(let i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function() {
        currentSlides = parseInt(this.getAttribute('data-index'))
        theChecker()
    }
}

function nextSlide() {
    if(nextButton.classList.contains('disable')) {
        return false
    } else {
        currentSlides++  
        theChecker()
    }
}

function prevSlide() {
    if(prevButton.classList.contains('disable')) {
        return false
    } else {
        currentSlides--
        theChecker()
    }
}

function theChecker() {
    slideNumberElement.textContent = `Slide # ${currentSlides} Of ${slidescount}`
    removeAllActive()
    sliderImages[currentSlides-1].classList.add("active")
    paginationCreatedUl.children[currentSlides-1].classList.add("active")
    if(currentSlides == 1) {
        prevButton.classList.add("disable")
    } else {
        prevButton.classList.remove("disable")
    }
    if(currentSlides == slidescount) {
        nextButton.classList.add("disable")
    } else {
        nextButton.classList.remove("disable")
    }
}
theChecker()
function removeAllActive() {
    sliderImages.forEach((img) => {
        img.classList.remove("active")
    })
    paginationBullets.forEach((bullet) => {
        bullet.classList.remove('active')
    })
}


