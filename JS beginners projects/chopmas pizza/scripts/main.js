// DOM elements
let form = document.querySelector('#form');
let breadType = document.querySelector('#bread-type');
let breadResult = document.querySelector('#bread-result');

let radiusButtons = document.querySelectorAll('.button-round');
let radiusResult = document.querySelector('#kattaligi-result');

let ustigaItems = document.querySelectorAll('.item-ustiga');
let ustigaResult = document.querySelector('#ustida-result');

let ustigaArr = ['Pomidor', 'Kurka go\'shti', 'Zaytun', 'Tuzlangan bodring', 'Qo\'ziqorin', 'Qazi'];

let qoshimchaItems = document.querySelectorAll('#item-qoshimcha');
let qoshimchaResult = document.querySelector('#qushimcha');



// first initial for bread type
breadResult.textContent = breadType.value;

//functions
function breadTypeChanger() {
    return breadResult.textContent = breadType.value;
}

function radiusSelector(value) {
    radiusButtons.forEach(item => {
        if (value != item.dataset.value) {
            item.classList.remove('red-bg');
        } else {
            item.classList.add('red-bg');
        }
        console.log(item.dataset.value);
    })
}

function ustigaSelector() {
    ustigaItems.forEach(item => {
        if (item.checked) {
            let ustigaListItem = document.createElement('li');
            ustigaListItem.textContent = `${ustigaArr[item.dataset.num - 1]}`;
            ustigaResult.appendChild(ustigaListItem);
        } else {
            // ustigaListItem.replace()           
        }
    })
}

function qoshimchaSelector(){
    qoshimchaItems.forEach(item => {
        if
    })
}


// events
breadType.addEventListener('change', breadTypeChanger);

radiusButtons.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        radiusSelector(item.dataset.value);
        radiusResult.textContent = `${item.dataset.value} cm`;
    })
})

ustigaItems.forEach(item => {
    item.addEventListener('change', function () {
        ustigaSelector();
    })
})


