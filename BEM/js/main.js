var modalButton = document.querySelector('#ask-me');
var modalWindow = document.querySelector('#modal');
var closeButton = document.querySelector('#close-btn');
console.log(modal-window);

modalButton.addEventListener('click', function(){
    modalWindow.classList.add('opened')
    // modalContact.classList.toggle('opened')
    // closeButton.classList.toggle('opened')
});

closeButton.addEventListener('click', function() {
    modalWindow.classList.remove('opened')
})