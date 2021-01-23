
function tubSon(num, num2){
    for(var i = num; i <= num2; i++){
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

tubSon(2, 125);