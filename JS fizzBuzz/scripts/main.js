var form = document.querySelector('#form');
var info = document.querySelector('#info');
var result = document.querySelector('#result');


function fizzBuzzCode(item){

    if(item % 3 == 0 && item % 5 == 0){
        result.innerHTML = 'FizzBuzz';
    } else if(item % 3 == 0){
        result.innerHTML = 'Fizz';
    } else if(item % 5 == 0){
        result.innerHTML = 'Buzz';
    } else {
        result.innerHTML = 'Ikkisiga ham bo\'linmas ekan';
    }
}

info.addEventListener('keyup', function(e){
    e.preventDefault();

    fizzBuzzCode(info.value);
})

