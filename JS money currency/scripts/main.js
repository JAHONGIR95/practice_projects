var currencyForm = document.querySelector('#currency'); //form
var select = document.querySelector('#currency-choosing'); //select options
var dollar = document.querySelector('#toSum'); // natija chiqadigan joy
var exchange = document.querySelector('#submit'); // amal button
var insertMoney = document.querySelector('#amount'); // user input


function toChange(pul) {

    if (pul > 0) {
        return dollar.innerHTML = pul * select.value;
    }
        else {
            return 'Summani kiriting';
    }
}

insertMoney.addEventListener('keyup', function(e){
    e.preventDefault();

    toChange(insertMoney.value)
})


select.addEventListener('change', function(e){
    e.preventDefault();
    
    toChange(insertMoney.value);
})
