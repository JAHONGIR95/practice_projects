// let someData = 'salom';

// String.prototype.toCapital = function(){

//     console.log(someData.charAt(0).toUpperCase() + someData.slice(1).toLowerCase());
// }

// someData.toCapital();

//  ******************************************

// let someData2 = 'hammaga salom';
// let str = [];

// String.prototype.toWaveCase = function(){

//     someData2.split('').forEach((item, index) => {
//         if(index % 2 == 0){
//             str.push(item.toUpperCase());
//         } else {
//             str.push(item.toLowerCase());
//         }
//     });
//     console.log(str.join(''));
// }

// someData2.toWaveCase();

// *******************************************

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum;
// Array.prototype.sumAll = function(){

//     sum = arr.reduce((total, number) => total + number, 0)//arr.reduce((a, b) => a + b, 0)
//     console.log(sum);
// }

// arr.sumAll();

// **********************************************

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [];
Array.prototype.multiplyTo = function(son){
    arr.forEach(element => {
        arr2.push((element * son));
    });
    console.log(arr2);
}

arr.multiplyTo(5)

// ************************************************

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = [];
// Array.prototype.multiplyTo = function(son){
//     arr.forEach(element => {
//         arr2.push((element ** son));
//     });
//     console.log(arr2);
// }
// arr.multiplyTo(2)

