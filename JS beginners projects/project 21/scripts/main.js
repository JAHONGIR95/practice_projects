var model = document.querySelector('#model');
var cost = document.querySelector('#cost');
var color = document.querySelector('#color');
var country = document.querySelector('#country');
var cardTop = document.querySelector('.card-top');
// console.log(cardTop);

var generate = document.querySelector('#generate');

var carData = [
    {
        src: `url('./images/car0.jpg')`,
        model: 'Nexia',
        cost: '$12000',
        color: 'Red',
        country: 'Germany'
    },
    {
        src: `url('./images/car1.jpg')`,
        model: 'Lasetti',
        cost: '$14000',
        color: 'White',
        country: 'Italy'
    },
    {
        src: `url('./images/car2.jpg')`,
        model: 'Cobolt',
        cost: '$18000',
        color: 'Grey',
        country: 'Poland'
    },
    {
        src: `url('./images/car3.jpg')`,
        model: 'Chevrolet',
        cost: '$15000',
        color: 'Blue',
        country: 'Korea'
    },
]

function getRandomInt(n) {
    return Math.floor(Math.random() * Math.floor(n));
}


generate.addEventListener('click', function(){
    var random = getRandomInt(4);
    cardTop.style.backgroundImage = carData[random].src;
    model.textContent = carData[random].model;
    cost.textContent = carData[random].cost;
    color.textContent = carData[random].color;
    country.textContent = carData[random].country;
    console.log(country.textContent = carData[random].country);
})