
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

tubSon(4);