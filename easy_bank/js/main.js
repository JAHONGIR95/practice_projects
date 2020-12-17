var humburgerMenu = document.querySelector('#humburger');
var overlay = document.querySelector('#overlay');
var humburMenu = document.querySelector('#humbur-menu');
var body = document.querySelector('body')


humburgerMenu.addEventListener('click', function(){
    humburgerMenu.classList.toggle('clicked');
    overlay.classList.toggle('clicked');
    humburMenu.classList.toggle('opened');
    body.classList.toggle('overflow');
})