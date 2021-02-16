let milliSecond = 0;
let second = 0;
let minute = 0;

let displayMilliSec = 0;
let displaySec = 0;
let displayMinute = 0;


let interval = null;


let status = "stopped";

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

     
    document.getElementById("display").innerHTML = displayMinute + ":" + displaySec + ":" + displayMilliSec;



}


function startStop(){
    if(status==="stopped"){

        interval = window.setInterval(stopWatch,10);
        document.getElementsByClassName("start-stop").innerHTML = "Stop";
        document.getElementById("start").src = "img/pause.png";
        status = "started";
    }else {
        window.clearInterval(interval);
        document.getElementsByClassName("start-stop").innerHTML = "Start";
        document.getElementById("start").src = "img/play.png";
        status = "stopped";
    }

}

function reset(){
    
    window.clearInterval(interval);
    milliSecond = 0;
    second = 0;
    minute = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementsByClassName("start-stop").innerHTML = "Start";
}

