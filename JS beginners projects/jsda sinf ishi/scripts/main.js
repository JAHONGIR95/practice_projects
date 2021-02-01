var odamlar = [
    {
        id: 1,
        name: 'John',
        wealth: 30000000000
    },

    {
        id: 2,
        name: 'Tom',
        wealth: 60000000000
    },

    {
        id: 3,
        name: 'Jeck',
        wealth: 30000000
    },

    {
        id: 4,
        name: 'Johnson',
        wealth: 750000000
    },

    {
        id: 5,
        name: 'Akmal',
        wealth: 8360000000
    },

    {
        id: 6,
        name: 'Jahongir',
        wealth: 70000000000000
    },

    {
        id: 7,
        name: 'Salim',
        wealth: 6000000000
    },

    {
        id: 8,
        name: 'Saloh',
        wealth: 200000000
    },

    {
        id: 9,
        name: 'Sobir',
        wealth: 4500000000000
    },

    {
        id: 10,
        name: 'Diyor',
        wealth: 7890000000000
    },

    {
        id: 11,
        name: 'Jasur',
        wealth: 500000
    },

    {
        id: 12,
        name: 'Ortiq',
        wealth: 78200000000
    },

    {
        id: 13,
        name: 'Javlon',
        wealth: 300000
    },

    {
        id: 14,
        name: 'Halil',
        wealth: 120000
    },
];

var boylar = [];
var kichikBoylar = [];
var kambagalBoylar = [];
boylar = odamlar.filter(item => item.wealth >= 10000000000);
kichikBoylar = odamlar.filter(item => item.wealth < 10000000000 && item.wealth >= 1000000);
kambagalBoylar = odamlar.filter(item => item.wealth < 1000000);
var result = document.querySelector('#result');
var result2 = document.querySelector('#result2');
var result3 = document.querySelector('#result3');



function reytingBoylar(myArr, place) {
    for (i = 0; i < myArr.length; i++) {

        var listItem = document.createElement('li');
        place.appendChild(listItem);

        listItem.textContent = `${i + 1}. ${myArr[i].name} have  $ ${myArr[i].wealth}`;
    }
}

reytingBoylar(boylar, result);
reytingBoylar(kichikBoylar, result2);
reytingBoylar(kambagalBoylar, result3);

// var fullname = "Jakhongir Sagdullaev";

// for(i = 0; i < fullname.length; i++){
//     var litter = fullname[i].charCodeAt();

//     if(litter >= 65 && litter <= 90){
//         console.log(fullname[i]);
//     }
// }
