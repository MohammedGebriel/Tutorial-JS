let scroller = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.onscroll = (e) => {
    let scrollTop = document.documentElement.scrollTop
    scroller.style.width = `${(scrollTop / height) * 100}%`
}






