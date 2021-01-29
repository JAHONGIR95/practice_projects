var buttons = document.querySelectorAll('.buttons');
var select = document.querySelector('#select');

function buttonSwitcher(arg){

    select.value = arg;
    buttons.forEach(item => {
        if(arg != item.dataset.orderNum){
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    })
}

buttons.forEach(item => {
    item.addEventListener('click', function(){
        buttonSwitcher(item.dataset.orderNum);
    })
})

select.addEventListener('change', function(){
    buttonSwitcher(select.value);
})