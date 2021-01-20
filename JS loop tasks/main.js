console.log('**************** task 1************************');

for (i = 1; i <= 10; i++) {
    console.log(i);
}
console.log('*************** task 2 *************************');

for (i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
console.log('****************** task 3 **********************');

for (i = 1; i <= 10; i++) {
    console.log('7 * ' + i + ' = ' + 7 * i);
}
console.log('******************* task 4 *********************');

for (i = 1; i <= 10; i++) {
    console.log('****************************************');

    for (j = 1; j <= 10; j++) {

        console.log(i + ' * ' + j + ' = ' + (i * j));

    }
}
console.log('******************* task 5 *********************');

var summa = 0;
for (i = 1; i <= 10; i++){
    summa += i;
}
console.log('Yig\'indi: ' + summa);