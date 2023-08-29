const hours = document.getElementById('hours-field');
const minutes = document.getElementById('minutes-field');
const seconds = document.getElementById('seconds-field');
let interval;

function startBtn(){
    let num =0
     interval = setInterval(()=>{
        const sec = ++num;
        seconds.innerText = sec;
        if(sec >= 60){
            clearInterval(interval);
        }
    },1000)
}

function stopBtn(){
            clearInterval(interval);
}
function resetBtn(){
    seconds.innerText = '00';
}