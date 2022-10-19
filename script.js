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