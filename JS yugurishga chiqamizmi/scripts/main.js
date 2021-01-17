// variables decloration

var result = document.querySelector('#result');
var temprature = document.querySelector('#temprature');
var raining = document.querySelector('#raining');
var gym = document.querySelector('#gym');
var ask = document.querySelector('#ask');

// Havo haroratini kiritish

temprature.addEventListener('keyup', function (e) {
    e.preventDefault();

    tempChecking();
})

function tempChecking() {
    var temp = temprature.value;

    if (temp >= 5 && temp <= 30) {
        result.innerHTML = (`<span style="color: green;"> HA</span>`);
    }
    else {
        result.innerHTML = (`<span style="color: red;"> YO'Q</span>`);
    }
}


function tekshirish(){
    // console.log(rainings());
    
    var rain = false; //checkbox ning dastlabki qiymatiga false berdim 
    var zal = false; // gym ning checkbox sining dastlabki qiymatiga false berdim
    
    ask.addEventListener('change', function(e){
        e.preventDefault();
        
        
        // Yomg'ir yog'ayotganimi tekshirish
        raining.addEventListener('click', function (e) {
            e.preventDefault();
            
            rainings();
        })
        
        
        
        // is GYM open? checking
        gym.addEventListener('click', function (e) {
            e.preventDefault();
            
            gymOpen();
        })
        
        function rainings() {
            rain = !rain;
            
            // console.log(rain);
            
            if (rain == true) {
                result.innerHTML = (`<span style="color: red;"> YO'Q</span>`);
            } else {
                result.innerHTML = (`<span style="color: green;"> HA</span>`);
            }
        }
        
        function gymOpen(){
            
            zal = !zal;
        
            // console.log(zal);
        
            if(zal == true){
                result.innerHTML = (`<span style="color: red;"> YO'Q</span>`);
            } else {
                result.innerHTML = (`<span style="color: green;"> HA</span>`);
            }
        }


        // if(rain == true && zal == true){
        //     alert('yuguramiz');
        // }
        
        console.log(rain);
        console.log(zal);
    })
    
}
tekshirish();

