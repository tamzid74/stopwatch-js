const hours = document.getElementById('hours-field');
const minutes = document.getElementById('minutes-field');
const seconds = document.getElementById('seconds-field');

let num =0
const interval = setInterval(()=>{
    const sec = ++num;
    seconds.innerText = sec;
    if(sec >= 60){
        clearInterval(interval);
    }
},1000)