var humburgerMenu = document.querySelector('#humburger');
var overlay = document.querySelector('#overlay');


humburgerMenu.addEventListener('click', function(){
    humburgerMenu.classList.toggle('clicked');
    overlay.classList.toggle('clicked');
})