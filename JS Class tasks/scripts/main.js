
var i = 0;
var j = 0;
var k = 0;

function colorRising(){
    document.body.style.backgroundColor = `rgba(${i}, ${j}, ${k})`;
    // clearInterval()
}

const intervalId = setInterval(() => {
    colorRising();
    if(i >= 255){
        clearInterval(intervalId);

        // setTimeout(() => {
        //     const all = setInterval(() => {
        //         if(i <= 0){
        //             clearInterval(all);
        //         }
        //         else{
        //             i--;
        //         }

        //         console.log(i);
        //     }, 20);
        // }, 14000);
        console.log(i);
        console.log('yes');
    }
    else{   
        i++;
        console.log(i);
    }
}, 20);

setTimeout(() => {
    const intervalIdJ = 
        setInterval(() => {
            colorRising();
            if(j >= 255){
                clearInterval(intervalIdJ);
                console.log(j);
                console.log('j');
            }
            else{   
                j++;
                console.log(j);
            }
        }, 20);
}, 5420);

setTimeout(() => {
    const intervalIdK = 
        setInterval(() => {
            colorRising();
            if(k >= 255){
                clearInterval(intervalIdK);
                console.log(k);
                console.log('k');
            }
            else{   
                k++;
                console.log(k);
            }
        }, 20);
}, 10820);


