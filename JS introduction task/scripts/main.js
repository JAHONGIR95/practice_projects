// alert('working!');
var choise = prompt('Mashina nomini kichik harflarda kiriting');
var feature = prompt('Mashina haqida nima bilishni xohlaysiz? (color, price, comfortance, seat-number, popularity)');

var cars = [
    {
        name: 'malebu',
        color: 'wihite',
        price: '$12000',
        comfortance: 'super',
        weight: '800kg',
        seatNumber: 4,
        isPopularChoise: true
    },

    {
        name: 'lasetti',
        color: 'black',
        price: '$14000',
        comfortance: 'super',
        weight: '900kg',
        seatNumber: 4,
        isPopularChoise: true
    },

    {
        name: 'spark',
        color: 'grey',
        price: '$8000',
        comfortance: 'middle',
        weight: '700kg',
        seatNumber: 4,
        isPopularChoise: true
    },

    {
        name: 'damas',
        color: 'wihite',
        price: '$6000',
        comfortance: 'simple',
        weight: '600kg',
        seatNumber: 6,
        isPopularChoise: true
    }
]

cars.forEach(item => {
    if(item.name == choise){
        console.log(choise + ' ning ' + feature + ' : ' + item[feature])
    } else {
       console.log(item);
    }
})