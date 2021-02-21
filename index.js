let milliSecond = 0;
let second = 0;
let minute = 0;

let displayMilliSec = 0;
let displaySec = 0;
let displayMinute = 0;

let interval = null;
let status = "stopped";

const startStopButton = document.getElementById("start-stop");
const startStopButtonImg = document.getElementById("start");
const timeDisplay = document.getElementById("display");
const resultsList = document.getElementById("results");

function stopWatch(){

    milliSecond++;
    
    if(milliSecond/100 ===1){
        milliSecond = 0;
        second++;
        if(second/60 ===1){
            second=0;
            minute++;
        }

    }


    
    if(milliSecond < 10){
        displayMilliSec = "0" + milliSecond.toString();
    }else{
        displayMilliSec = milliSecond;
    }
    if(second < 10){
        displaySec = "0" + second.toString();
    }else{
        displaySec = second;
    }
    if(minute < 10){
        displayMinute = "0" + minute.toString();
    }else{
        displayMinute = minute;
    }

     
    timeDisplay.innerHTML = displayMinute + ":" + displaySec + ":" + displayMilliSec;



}


function startStop(){
    if(status==="stopped"){
        interval = window.setInterval(stopWatch,10);
        startStopButtonImg.src = "img/pause.png";
        status = "started";
    }else {
        window.clearInterval(interval);
        startStopButtonImg.src = "img/play.png";
        status = "stopped";
    }
}

function reset(){
    window.clearInterval(interval);
    milliSecond = 0;
    second = 0;
    minute = 0;
    timeDisplay.innerHTML = "00:00:00";
    startStopButtonImg.src = "img/play.png";
    status = "stopped";
}

function lap(){
    let listItem= document.createElement('li');
    listItem.innerText = timeDisplay.innerText;
    listItem.className = "item";

    resultsList.appendChild(listItem);
    resultsList.style.display='block';
    
    milliSecond = 0;
    second = 0;
    minute = 0;


}