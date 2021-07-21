const dayInput = document.querySelector('.clock .day > .symbol');
const hoursInput = document.querySelector('.clock .hour > .symbol');
const minutesInput = document.querySelector('.clock .minutes > .symbol');
const secondsInput = document.querySelector('.clock .seconds > .symbol');



function setTime() {
    let day = calculateDay();
    const date = new Date();
    let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();;
    let seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();;
    dayInput.textContent = day;
    hoursInput.textContent = hours;
    minutesInput.textContent = minutes;
    secondsInput.textContent = seconds;
}

setInterval(() => {
    setTime();
}, 1000);

// function clock() {
//     let date = new Date();
//     let h = date.getHours();
//     let m = date.getMinutes();
//     let s = date.getSeconds();
  
//     console.log(`${h} : ${m} : ${s}`); 
//   }
  
//   setInterval(() => {
//     clock();
//   }, 1000);



function calculateDay() {
    let date = new Date();
    switch(date.getDay()) {
        case 0:
            return 'sun';
        case 1:
            return 'mon';
        case 2:
            return 'tue';
        case 3:
            return 'wed';
        case 4:
            return 'thu';
        case 5:
            return 'fri';
        case 6:
            return 'sat';
        default: 
            return false;
    }
}