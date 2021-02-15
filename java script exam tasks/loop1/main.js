var buttons = document.querySelectorAll('.btn');
var body = document.querySelector('.body');

buttons.forEach(item =>{
    item.addEventListener('click', () =>{
        body.style.backgroundColor = `${item.dataset.color}`
    })
})

document.addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key == 49) {
        body.classList.toggle('active');
      }
});

