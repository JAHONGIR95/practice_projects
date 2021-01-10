var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

var dropIcon = document.querySelector('#drop-icon');

dropIcon.addEventListener('click', function(){
    dropIcon.classList.toggle('clicked');
})