var buttons = document.querySelectorAll('.buttons');
var select = document.querySelector('#select');

// console.log();

function buttonSwitcher(num) {
    select.value = num;

    buttons.forEach((item) => {
        if (num != item.dataset.orderNum) {
            item.classList.remove('active')
        } else {
            item.classList.add('active')
        }
    })
}

buttons.forEach(item => {
    item.addEventListener('click', function () {
        buttonSwitcher(item.dataset.orderNum)
    })
})

select.addEventListener('change', function () {
    buttonSwitcher(select.value);
})
