var form = document.querySelector('#form');
var colorInput = document.querySelector('#input');

form.addEventListener('submit', function(){
    document.body.style.backgroundColor = colorInput.value;
})
