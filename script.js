let typeText = document.getElementById("type");
const textz = ["Title", "Website", "Something?", "Mother F**ker"];
let typeIdx = 0;
let dir = 1;
let pauseTimer = 0;
let delay = 250;
setInterval(() => {
    if (typeText.innerHTML === textz[typeIdx]) {
        if (pauseTimer >= delay*3) {
            dir = -1;
            pauseTimer = 0;
        }
        else {
            pauseTimer += delay;
        }
    }
    else if (typeText.innerHTML === "") {
        typeIdx = (typeIdx+1)%textz.length;
        dir = 1;
        
    }
    typeText.innerHTML = pauseTimer===0?textz[typeIdx]:textz[typeIdx].substring(0,typeText.innerHTML.length+dir);
}, delay);

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

let sections = [
    document.getElementById("about"),
    document.getElementById("hobbies"),
    document.getElementById("coursework"),
    document.getElementById("animation")
]

let navBarElements = document.getElementsByClassName("navItem")

addEventListener('scroll', (event) => {
    for (let i = 0; i<sections.length; i++) {
        if (isInViewport(sections[i])) {
            navBarElements[i].classList.add("active");
        }
        else {
            navBarElements[i].classList.remove("active");
        }
    }
});