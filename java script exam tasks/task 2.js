// Arrayni sort qiling, oldin tartiblangan sonlar, keyin stringlar kelsin

let testArr1 = [1,6,0, 2, 99, 76, 'Khumoyun', 'aaccbb', 'najot'];
let testArr2 = ['Yiqilish', 'haydalish', 'dumalash', 'imthon', 'sessiya', 0, '0.1', '0.5'];
let testArr3 = [3,66, 'Bonzaaaai', 'Blin', 'Banana', 17, 11, 48, 'Qirq sakkiz'];

function arraySorter(arr) {
  var arr2 = [];
  var arr3 = [];
  arr.forEach(item => {
    if(typeof item == 'number'){
      arr2.push(item);
    }
    if(typeof item == 'string'){
      arr3.push(item);
    }
  })
  return arr2.sort(function(a,b) {return a - b}).concat(arr3.sort());
  
  //Write your code here
}

// console.log(arraySorter(testArr1));
console.log(arraySorter(testArr2));
// console.log(arraySorter(testArr3));