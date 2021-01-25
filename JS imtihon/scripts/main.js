var form = document.querySelector('#qoute-form');
var textarea = document.querySelector('#quote');
var generator = document.querySelector('#generator');

var arr = [
    {
        id: 0,
        text: '"Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance"'
    },
    {
        id: 1,
        text: '"Do your best. Future is yours"'
    },
    {
        id: 2,
        text: '"Education is best thing to invest for your future"'
    },
    {
        id: 3,
        text: '"Helloouuuu...! This is your day"'
    },
    {
        id: 4,
        text: '"What is you main focus for Today?"'
    }
]

function random(n){
    return Math.floor(Math.random() * Math.floor(n));
}


generator.addEventListener('click', function(e){
    e.preventDefault();
    
    var randomNum = random(5);

    textarea.value = arr[randomNum].text;
})

setInterval(function(){
    generator.click();
}, 3000)