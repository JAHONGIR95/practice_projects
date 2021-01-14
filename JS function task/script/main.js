var carName = document.querySelector("#task1-input");
var carBrand = document.querySelector('#task1-btn');
var brandSpace = document.querySelector('#brand-name');

function carBrandFinder() {
    return carName.value + 'ning Brandi ' + 'Chevrolet';
}

carBrand.addEventListener('click', function () {
    brandSpace.innerHTML = carBrandFinder();
})

// ***********************************************************************88

var square = document.querySelector('#kv');
var squareButton = document.querySelector('#kv-btn');


squareButton.addEventListener('click', function () {

    var num;
    num = square.value;

    function squareAndCubCalculator() {
        return num * num;
    }

    console.log(num + ' ning kvadirati : ' + squareAndCubCalculator());
    console.log(num + ' ning kubi : ' + num * squareAndCubCalculator());
})

// *****************************************************************************

var nameBtn = document.querySelector('#name-btn');

nameBtn.addEventListener('click', function () {

    var ism = document.querySelector('#name').value;
    var surname = document.querySelector('#surname').value;

    function greeting() {
        return 'Salom! ' + ism + ' ' + surname;
    }

    alert(greeting());
})

// ******************************************************************************

var celButton = document.querySelector('#to-fah');
var fahButton = document.querySelector('#to-cel');
var fahResult = document.querySelector('#fah-result');
var celResult = document.querySelector('#cel-result');

celButton.addEventListener('click', function () {
    var celsius = document.querySelector('#cel').value;

    function celsiusFinder() {
        return ((celsius * 9 / 5) + 32);
    }

    fahResult.innerHTML = celsiusFinder();
})

fahButton.addEventListener('click', function () {
    var fahrenheit = document.querySelector('#fah').value;

    function fahrenheitFinder() {
        return ((fahrenheit - 32) * 5 / 9);
    }

    celResult.innerHTML = fahrenheitFinder();
})

// *****************************************************************************

var hour = document.querySelector('#hour');
var hourButton = document.querySelector('#hour-btn');
const minute = 60;

hourButton.addEventListener('click', function () {

    var soat = hour.value;

    function hourToMinute() {
        return soat * minute;
    }

    console.log(soat + ' soat ' + hourToMinute() + ' daqiqadir.');
})

