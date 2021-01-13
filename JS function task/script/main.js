var carName = document.querySelector("#task1-input");
var carBrand = document.querySelector('#task1-btn');
var brandSpace = document.querySelector('#brand-name');

function carBrandFinder(){
    return carName.value + 'ning Brandi ' + 'Chevrolet';
}

carBrand.addEventListener('click', function(){
    brandSpace.innerHTML = carBrandFinder();
})

// ***********************************************************************88

var square = document.querySelector('#kv');
var squareButton = document.querySelector('#kv-btn');


squareButton.addEventListener('click', function(){
    
    var num;
    num = square.value;
    
    function squareAndCubCalculator(){
        return num * num;
    }

    console.log(num + ' ning kvadirati : ' + squareAndCubCalculator());
    console.log(num + ' ning kubi : ' + num * squareAndCubCalculator());
})

// *****************************************************************************

var nameBtn = document.querySelector('#name-btn');

nameBtn.addEventListener('click', function(){

    var ism = document.querySelector('#name').value;
    var surname = document.querySelector('#surname').value;

    function greeting(){
        return 'Salom! ' + ism + ' ' + surname;
    }

    alert(greeting());
})

