var form = document.querySelector('#form'); // form
var masofa = document.querySelector('#distance'); // user input
var result = document.querySelector('#result'); //natija oynasi


form.addEventListener('submit', function(e){
    e.preventDefault();
    
    
    piyoda();
})

function piyoda() {
    var distance = parseInt(masofa.value);
    
    var time =  (distance / 60);
    var fixedTime = time.toFixed(2);
    totalTime = fixedTime * 60;
    
    
    minutDaqiqa();
}

function minutDaqiqa(){
    
    if(totalTime % 60 == 0){
        result.textContent = time + ' soat';
    } else {
        var minut = (totalTime % 60).toFixed(0);
        var soat = totalTime / 60;
        
        result.innerHTML = Math.floor(soat) + ' soat'  + '<br>' + minut + ' daqiqa';
    }
}