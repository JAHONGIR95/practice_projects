function fizzBuzzCode(item){

    if(item % 3 == 0 && item % 5 == 0){
        console.log('FizzBuzz');
    } else if(item % 3 == 0){
        console.log('Fizz');
    } else if(item % 5 == 0){
        console.log('Buzz');
    } else {
        console.log('Ikkalasiga ham bo\'linmaydi');
    }
}

fizzBuzzCode(555);