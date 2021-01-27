var imageSlider = document.querySelector('.image-slider');

var i = 0;

setInterval(function(){
    bgChanger();
}, 2000)

setTimeout(() => {
    // this code gives us first 3 second image
    imageSlider.style.backgroundImage = `url('./images/car3.jpg')`   
}, 10);

function bgChanger(){
    // this algorithm gives us same index number repeatedly
    var num = i % 4;
    i++;
    // background image changes every 3 second repeatedly
    imageSlider.style.backgroundImage = `url('./images/car${num}.jpg')`  
}
