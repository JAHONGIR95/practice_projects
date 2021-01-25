var inputBank = document.querySelector('#input2');
var yourBank = document.querySelector('#your-bank');
var cardSelection = document.querySelector('#card-selection');
var inputCart = document.querySelector('#input1');
var imageWrapper = document.querySelector('.image-wrapper');

inputCart.addEventListener('keyup', function () {

    switch (inputCart.value) {
        case '9860':
            cardSelection.setAttribute('src', './images/humo.png');
            break;

        case '8600':
            cardSelection.setAttribute('src', './images/uzcard.png');
            break;

        case '4278':
            cardSelection.setAttribute('src', './images/visa.png');
            break;

        case '5300':
            cardSelection.setAttribute('src', './images/mastercard.png');
            break;
        // default:
    }
})


inputBank.addEventListener('keyup', function () {

    switch (inputBank.value) {
        case '1650':
            yourBank.textContent = 'Kapital Bank';
            break;
        case '2742':
            yourBank.textContent = 'NBU';
            break;
        case '3572':
            yourBank.textContent = 'TBC';
            break;
        case '1660':
            yourBank.textContent = 'Orient Finance';
            break;
        case '7532':
            yourBank.textContent = 'SQB';
            break;
        case '1135':
            yourBank.textContent = 'Xalq';
            break;
    }
})