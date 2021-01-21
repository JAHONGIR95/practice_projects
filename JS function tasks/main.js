console.log('******************** factorial *****************');

var factorial = 1;
function factorialFinder(num){
    for(i = 1; i <= num; i++){
        factorial *= i;
    }
    console.log(num + '!: ' + factorial);
}
factorialFinder(5);
console.log('******************** 10 va 30 oralig\'i *****************');

var total = 0;
function oddFinder(){
    for(i = 10; i <= 30; i++){
        if(i % 2 !== 0){
            total += i;
        }
    }
    console.log('Yig\'indi: ' + total);
}
oddFinder();
console.log('******************** Array yig\'indisi *****************');

var sum = 0;
function sumArray([x1, x2, x3, x4, x5]){

    sum += x1 + x2 + x3 + x4 + x5
    console.log('Array yig\'indisi: ' + sum);
}
sumArray([1, -1, 8, 6, 4]);
