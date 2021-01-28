var brand = document.querySelector('#brand');

var colorArr = [
    'pink',
    'orange',
    'black',
    'grey',
    'purple',
    'green',
    'sea',
    'blue',
    'red',
    'yellow'
];

var count = 0;

function colorChanger(){
    document.querySelector('header').style.backgroundColor = colorArr[count];
    if(count == colorArr.length - 1){
        count = 0;
    } else {
        count++;
    }
}

brand.addEventListener('mouseover', () => {
    colorChanger();
})