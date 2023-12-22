let lists = document.querySelectorAll(".box ul li")
console.log(lists)

let contents = document.querySelectorAll(".content div")
console.log(contents)

lists.forEach((li) => {
    li.onclick = (e) => {
        lists.forEach((el) => {
            el.classList.remove("active")
        })
        e.target.classList.add("active")
        if(e.target.classList.contains("1")) {
            document.querySelector(".container .box .content div.one").style.display = 'block'
            document.querySelector(".container .box .content div.two").style.display = 'none'
            document.querySelector(".container .box .content div.three").style.display = 'none'
        }else if (e.target.classList.contains("2")) {
            document.querySelector(".container .box .content div.one").style.display = 'none'
            document.querySelector(".container .box .content div.two").style.display = 'block'
            document.querySelector(".container .box .content div.three").style.display = 'none'
        }else if(e.target.classList.contains("3")) {
            document.querySelector(".container .box .content div.one").style.display = 'none'
            document.querySelector(".container .box .content div.two").style.display = 'none'
            document.querySelector(".container .box .content div.three").style.display = 'block'
        }
    }
})
