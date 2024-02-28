
const button = document.querySelector("button");
const timer = document.getElementById("timer");

let count = 0 ;

const timerInterval = setInterval(() => { count++; 
   timer.innerText = `타이머 : ${count}`}, 1000);

button.addEventListener('click',function(){
   clearInterval(timerInterval)
})

console.log(timerInterval)