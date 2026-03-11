let startTime = 0;
let elapsedTime = 0;
let timer = null;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function formatTime(time){

    let ms = time % 1000;
    let sec = Math.floor(time / 1000) % 60;
    let min = Math.floor(time / 60000) % 60;
    let hr  = Math.floor(time / 3600000);

    return (
        String(hr).padStart(2,"0")+":"+
        String(min).padStart(2,"0")+":"+
        String(sec).padStart(2,"0")+"."+
        String(ms).padStart(3,"0")
    );
}

function update(){
    elapsedTime = Date.now() - startTime;
    display.innerText = formatTime(elapsedTime);
}

document.getElementById("start").onclick = () => {
    if(timer) return; // prevents speed bug
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update,10); // 🔥 updates every 10ms
};

document.getElementById("pause").onclick = () => {
    clearInterval(timer);
    timer = null;
};

document.getElementById("reset").onclick = () => {
    clearInterval(timer);
    timer = null;
    elapsedTime = 0;
    display.innerText = "00:00:00.000";
    laps.innerHTML="";
};

document.getElementById("lap").onclick = () => {
    if(!timer) return;

    const li = document.createElement("li");
    li.textContent = display.innerText;
    laps.appendChild(li);
};