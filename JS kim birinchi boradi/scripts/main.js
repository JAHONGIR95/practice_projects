var form = document.querySelector('#form'); // form
var masofa = document.querySelector('#distance'); // user input
var result1 = document.querySelector('#result'); //natija oynasi
var result2 = document.querySelector('#result2'); //natija oynasi 2
var result3 = document.querySelector('#result3'); //natija oynasi 3
var result4 = document.querySelector('#result4'); //natija oynasi 4
var speed = [3.6, 12.1, 70, 800];
console.log(speed[1]);



form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // var distance = parseInt(masofa.value);
    // for ( var i = 0; i <= speed.length; i++) {
    //     var time = (distance / speed[0]);
    //     var fixedTime = time.toFixed(2);

    //     totalTime = fixedTime * 60;


    //         if (totalTime % 60 == 0) {
    //             result[i].innerHTML = time + ' soat';
    //         } else {
    //             var minut = (totalTime % 60).toFixed(0);
    //             var soat = totalTime / 60;
    //             result[i].innerHTML = Math.floor(soat) + ' soat' + '<br>' + minut + ' daqiqa';
    //         }
    // }

    piyoda();
    bike();
    car();
    airplane();
})

function piyoda() {
var distance = parseInt(masofa.value); 
    var time =  (distance / 3.6);
    var fixedTime = time.toFixed(2);

    totalTime = fixedTime * 60;

    if(totalTime % 60 == 0){
        result1.textContent = time + ' soat';
    } else {
        var minut = (totalTime % 60).toFixed(0);
        var soat = totalTime / 60;
        result1.innerHTML = Math.floor(soat) + ' soat'  + '<br>' + minut + ' daqiqa';
    }
}

function bike() {
    var distance = parseInt(masofa.value); 
    var time =  (distance / 12.1);
    var fixedTime = time.toFixed(2);

    totalTime = fixedTime * 60;

    if(totalTime % 60 == 0){
        result2.textContent = time + ' soat';
    } else {
        var minut = (totalTime % 60).toFixed(0);
        var soat = totalTime / 60;
        result2.innerHTML = Math.floor(soat) + ' soat'  + '<br>' + minut + ' daqiqa';
    }
}

function car() {
    var distance = parseInt(masofa.value); 
    var time =  (distance / 70);
    var fixedTime = time.toFixed(2);

    totalTime = fixedTime * 60;

    if(totalTime % 60 == 0){
        result3.textContent = time + ' soat';
    } else {
        var minut = (totalTime % 60).toFixed(0);
        var soat = totalTime / 60;
        result3.innerHTML = Math.floor(soat) + ' soat'  + '<br>' + minut + ' daqiqa';
    }
}

function airplane() {
    var distance = parseInt(masofa.value); 
    var time =  (distance / 800);
    var fixedTime = time.toFixed(2);

    totalTime = fixedTime * 60;

    if(totalTime % 60 == 0){
        result4.textContent = time + ' soat';
    } else {
        var minut = (totalTime % 60).toFixed(0);
        var soat = totalTime / 60;
        result4.innerHTML = Math.floor(soat) + ' soat'  + '<br>' + minut + ' daqiqa';
    }
}