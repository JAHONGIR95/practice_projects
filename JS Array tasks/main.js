console.log('*************** task 1 *****************');
var mark = [1, 2, 3, 4];
var average = (arr) => {
    s = 0;
    avarage = 0;

    arr.forEach(item => {
        s += item;
    })
    avarage = s / arr.length;
    console.log(avarage);
}
average(mark);

// function avarageNumber(mark){
//     for(var i = 0; i < mark.length; i++){
//         s += mark[i];
//     }
//     average = s / mark.length;
//     return 'Arrayning o\'rta qiymati: ' + average;
// }
// console.log(avarageNumber(mark));
console.log('*************** task 2 *****************');

var mark = [1, -1, 2, -5, 6];
var k = [];
function positiveNumbers(mark) {
    for (var i = 0; i < mark.length; i++) {
        if (mark[i] > 0) {
            k.push(mark[i]);
        }
    }
    console.log('Positive Numbers: ' + k.join(', '));
}
positiveNumbers(mark);
console.log('*************** task 3 *****************');

var mark = [1, 2, 3, 4, 5, 25, 2];
var max = mark[0]
function maxNumber(mark) {
    for (var i = 0; i < mark.length; i++) {
        if (mark[i] > max) {
            max = mark[i];
        }
    }
    return 'Max: ' + max;
}
console.log(maxNumber(mark));