// variables decloration

var result = document.querySelector('#result');
var temprature = document.querySelector('#temprature');
var raining = document.querySelector('#raining');
var gym = document.querySelector('#gym');

// Havo haroratini kiritish

temprature.addEventListener('keyup', function (e) {
    e.preventDefault();

    tempChecking();
})

function tempChecking() {
    var temp = temprature.value;

    if (temp >= 5 && temp <= 30) {
        result.innerHTML = (`<span style="color: green;"> HA</span>`);
    }
    else {
        result.innerHTML = (`<span style="color: red;"> YO'Q</span>`);
    }
}

// Yomg'ir yog'ayotganimi tekshirish

raining.addEventListener('change', function (e) {
    e.preventDefault();

    rainings();

})

var rain = false; //checkbox ning dastlabki qiymatiga false berdim 

function rainings() {

    rain = !rain;
    
    if (rain == true) {
        result.innerHTML = (`<span style="color: red;"> YO'Q</span>`);
    } else {
        result.innerHTML = (`<span style="color: green;"> HA</span>`);
    }
}

// is GYM open? checking

gym.addEventListener('change', function (e) {
    e.preventDefault();

    gymOpen();

})

var zal = false; // gym ning checkbox sining dastlabki qiymatiga false berdim

function gymOpen(){

    zal = !zal;

    // console.log(zal);

    if(zal == true){
        result.innerHTML = (`<span style="color: green;"> HA</span>`);
    } else {
        result.innerHTML = (`<span style="color: red;"> YO'Q</span>`);
    }
}