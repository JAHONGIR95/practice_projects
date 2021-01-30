var a, b, c;
var soat = document.querySelector('#time');
var bNol = document.querySelector('#b-nol');
var cNol = document.querySelector('#c-nol');
var aNol = document.querySelector('#a-nol');

function timeMetr(time){

    a = Math.floor(time / 3600);
    time = time % 3600;
    b = Math.floor(time / 60);
    time = time % 60;
    c = time
    
    soat.innerHTML = `<span id="a-nol">0</span> ${a} : <span id="b-nol"> 0</span> ${b} : <span id="c-nol"> 0</span> ${c}`;

    if(a >= 10){
        document.querySelector('#a-nol').style.display = 'none';
    }
    else if(a == 0){
        document.querySelector('#a-nol').textContent = 0;
    }
    if(b >= 10){
        document.querySelector('#b-nol').style.display = 'none';
    }
    else if(b == 0){
        document.querySelector('#b-nol').textContent = 0;
    }
    if(c >= 10){
        document.querySelector('#c-nol').style.display = 'none';
    }
    else if(c == 0){
        document.querySelector('#c-nol').textContent = 0;
    }
}

soat.addEventListener('click', function(){
    timeMetr(450);
})