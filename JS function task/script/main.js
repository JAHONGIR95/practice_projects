var carName = document.querySelector("#task1-input");
var carBrand = document.querySelector('#task1-btn');
var brandSpace = document.querySelector('#brand-name');

function carBrandFinder(){
    return carName.value + 'ning Brandi ' + 'Chevrolet';
}


carBrand.addEventListener('click', function(){
    brandSpace.innerHTML = carBrandFinder();
})

