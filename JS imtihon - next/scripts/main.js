var inputBank = document.querySelector('#input2');
var yourBank = document.querySelector('#your-bank');

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


    console.log(inputBank.value);
})