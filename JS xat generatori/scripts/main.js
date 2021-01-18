var result = document.querySelector('#result');
var kimga = document.querySelector('#kimga');
// console.log(result);

function onamga() {
}

kimga.addEventListener('change', function (e) {
    e.preventDefault();
    console.log(kimga.value);

    switch (true) {
        case (kimga.value == 'Onajon'):
            result.innerHTML = (`Assalomu alaykum, ${kimga.value}`);
            break;

        case (kimga.value == `Do'stim`):
            result.innerHTML = (`Assalomu alaykum, ${kimga.value}`);
            break;

        case (kimga.value == 'Men...'):
            result.innerHTML = (`Assalomu alaykum, ${kimga.value}`);
            break;

        case (kimga.value == 'Sevgilim'):
            result.innerHTML = (`Salom ${kimga.value}`);
            break;


    }

})

