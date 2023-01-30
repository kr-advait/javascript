const body = document.body;
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
var id = null;
var clicked = false;


startBtn.addEventListener('click',()=>{
    if(!clicked){
        clicked = true;
        id = setInterval(()=>{
            const red = Math.floor(Math.random()*126);
            const green = Math.floor(Math.random()*126);
            const blue = Math.floor(Math.random()*126);
            // const rgb = `rgb(${red},${green},${blue},${Math.random()})`;
            const rgb = `rgb(${red},${green},${blue})`;
            body.style.backgroundColor = rgb;
        }, 1000);
    }

})

stopBtn.addEventListener('click',()=>{
    clearInterval(id);
    clicked = false;
})