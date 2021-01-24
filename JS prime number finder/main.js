function tubSon(num){
    for(var i = 2; i <= num; i++){
        let tub = true;
        for(var j = 2; j < i; j++){
            if(i % j == 0){
                tub = false;
                break;
            }
        }
        if(tub){
            console.log(i);
        }
    }
}
tubSon(100);

var primeNumberDecisionMaker = function(num){
    var prime = true;
    for(i = 2; i < num; i++){
        if(num % i == 0){
            prime = false;
            console.log(num + ' tub son emas');
            break;
        }
    }
    if(prime){
    console.log(num + ' tub son');
    }
}
primeNumberDecisionMaker(16);