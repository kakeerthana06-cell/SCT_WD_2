const display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value =
        Function('"use strict";return ('+display.value+')')();
    }catch{
        display.value="Error";
    }
}

/* Keyboard Support */
document.addEventListener("keydown",(e)=>{
    if(!isNaN(e.key) || "+-*/.".includes(e.key))
        append(e.key);

    if(e.key==="Enter") calculate();
    if(e.key==="Backspace") deleteLast();
    if(e.key==="Escape") clearDisplay();
});