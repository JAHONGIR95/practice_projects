
var hr = document.querySelector('#hr');
var min = document.querySelector('#min');
var sc = document.querySelector('#sc');

const deg = 6;

setInterval(() => {
    var day = new Date();
    
    var hour = day.getHours() * 30;
    var minute = day.getMinutes() * deg; 
    var second = day.getSeconds() * deg;

    
    hr.style.transform = `rotateZ(${(hour)+(minute/12)}deg)`;
    min.style.transform = `rotateZ(${minute}deg)`;
    sc.style.transform = `rotateZ(${second}deg)`;

}, 1000);