var result = document.querySelector('#result');
var minus = document.querySelector('#minus');
var plus = document.querySelector('#plus');

// initial point of result
var count = 0; 

// function for showing result on browser
function resulting() {
    // result will be taken from count variable
    result.textContent = count;

    // result color changing conditions
    if(count > 0){
        result.classList.add('green');
        result.classList.remove('red');
    } else if(count < 0){
        result.classList.add('red');
        result.classList.remove('green');
    } else{
        result.classList.remove('red');
        result.classList.remove('green');
    }
}

// minus button event listener
minus.addEventListener('click', function(e){
    e.preventDefault();

    count--;
    resulting();
    console.log(resulting());
})

// plus button event listener
plus.addEventListener('click', function(e){
    e.preventDefault();

    count++;
    resulting();
    console.log(resulting());
})

