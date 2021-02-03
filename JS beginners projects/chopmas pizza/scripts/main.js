// DOM elements
let form = document.querySelector('#form');
let breadType = document.querySelector('#bread-type');
let breadResult = document.querySelector('#bread-result');

let radiusButtons = document.querySelectorAll('.button-round');

// first initial for bread type
breadResult.textContent = breadType.value;

//functions
function breadTypeChanger(){
    return breadResult.textContent = breadType.value;
}

function radiusSelector(value){

    radiusButtons.forEach(item => {
        if(value != item.dataset.value){
            item.classList.remove('red-bg');
        } else {
            item.classList.add('red-bg');
        }
        console.log(item.dataset.value);
    })
}




// events
breadType.addEventListener('change', breadTypeChanger);

radiusButtons.forEach(item => {
    item.addEventListener('click', function() {
        radiusSelector(item.dataset.value);
    })
})