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
function oddFinder(a, b){
    for(i = a; i <= b; i++){
        if(i % 2 !== 0){
            total += i;
        }
    }
    console.log('Yig\'indi: ' + total);
}
oddFinder(10, 30);
console.log('******************** Array yig\'indisi *****************');

var sum = 0;
var mark = [1, -1,  8, 6, 4];
function sumArray(mark){

    for(i = 0; i < mark.length; i++){
        sum += mark[i];
    }
    console.log('Array yig\'indisi: ' + sum);
}
sumArray(mark);


var arr = [1, 5, 4, 9, 3, 16];
var max = arr[0];

for(var i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log('max: ' + max);