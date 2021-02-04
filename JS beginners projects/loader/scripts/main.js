// asosiy blockni DOM dan chaqirib olish
let frame = document.querySelector('.frame');

// DOM da yaratilgan blockning eni ni topish
const width = frame.clientWidth;
// DOM da yaratilgan blockning bo'yi ni topish
const height = frame.clientHeight;

// event DOM dagi block ustida animatsiya uchun function
frame.addEventListener('mousemove', function(e){

    // mouse ni DOM dagi positsiyasini topish X bo'yicha
    const xPosition = e.layerX;
    // mouse ni DOM dagi positsiyasini topish Y bo'yicha
    const yPosition = e.layerY;

    // Y bo'yicha qancha burilishini hisoblash
    const yRotation = 50 * ((xPosition - width / 2) / width);
    // X bo'yicha qancha burilishini hisoblash
    const xRotation = -50 * ((yPosition - height / 2) / height);


    this.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) `;
    
})

frame.addEventListener('mouseleave', function(e){
    this.style.transform = `rotateX(0) rotateY(0)`;
})

