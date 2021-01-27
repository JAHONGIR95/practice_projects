var model = document.querySelector('#model');
var cost = document.querySelector('#cost');
var color = document.querySelector('#color');
var country = document.querySelector('#country');

var generate = document.querySelector('#generate');

var carData = [
    {
        src: `url('../images/car0.jpg')`,
        model: 'Nexia',
        cost: '$12000',
        color: 'Red',
        country: 'Germany'
    }
]

function getRandomInt(n) {
    return Math.floor(Math.random() * Math.floor(n));
}


generate.addEventListener('click', function(){
    var random = getRandomInt(4);
    console.log(random);
})