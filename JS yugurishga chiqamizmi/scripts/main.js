// variables decloration

var result = document.querySelector('#result');
var temprature = document.querySelector('#temprature');
var raining = document.querySelector('#raining');
var gym = document.querySelector('#gym');
var ask = document.querySelector('#ask');

// Havo haroratini kiritish

temprature.addEventListener('keyup', function (e) {
    e.preventDefault();

    tempChecking();
})

function tempChecking() {
    var temp = temprature.value;

    if (temp >= 5 && temp <= 30) {
        result.innerHTML = (`<span style="color: green;"> HA</span>`);
    } else {
        result.innerHTML = (`<span style="color: red;"> YO'Q</span>`);
    }
}

var rain = false; //checkbox ning dastlabki qiymatiga false berdim 
var zal = false; // gym ning checkbox sining dastlabki qiymatiga false berdim

raining.addEventListener('click', function () {
    
    rainings();
})

gym.addEventListener('click', function () {

    gymOpen();
})

function rainings() {
    rain = !rain;
    
    if (rain) {
        result.innerHTML = (`<span style="color: red;"> YO'Q</span>`);
    } 
}

function gymOpen(){    
    zal = !zal;
    
    if(zal){
        result.innerHTML = (`<span style="color: green;"> HA</span>`);
    } 
}


