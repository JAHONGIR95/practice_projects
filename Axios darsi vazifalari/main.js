let inputs = document.querySelectorAll('.inputs');
let form = document.querySelector('.form');

let name = document.querySelector('#name');
let surname = document.querySelector('#surname');
let age = document.querySelector('#age');
let email = document.querySelector('#email');
let city = document.querySelector('#city');

inputs.forEach(input => {
    
    input.addEventListener('keyup', function (e) {

        
        if (e.target.value.length > 0) {
            input.style.borderColor = 'green';
        } else if (input.focus) {
            input.style.borderColor = 'red';
        }
        
    })
    
    input.addEventListener('blur', function(e){
        input.style.borderColor = '#ccc';
    })
    // if(input.length > 0){
    //     console.log(ha);  
    // }
});


let axios = {
    // get: function (link, params) {
    //     return new Promise(function (resolve, reject) {

    //         let url = 'https://jsonplaceholder.typicode.com/users';

    //         let newRequest = new XMLHttpRequest();

    //         newRequest.responseType = 'json';

    //         newRequest.open('GET', url);

    //         newRequest.onload = function () {
    //             if (newRequest.status >= 400) {
    //                 reject(newRequest.status)
    //             } else {
    //                 resolve(newRequest.response)
    //             }
    //         }

    //         newRequest.onerror = function () {
    //             reject(newRequest.status)
    //         }

    //         newRequest.send();
    //     })
    // },

    post: function (link, params, body) {
        return new Promise(function (resolve, reject) {

            console.log(body)

            let url = 'https://jsonplaceholder.typicode.com/users';

            let newRequest = new XMLHttpRequest();

            newRequest.responseType = 'json';

            newRequest.open('POST', url);

            newRequest.onload = function () {
                if (newRequest.status >= 400) {
                    reject(newRequest.status)
                } else {
                    resolve(newRequest.response)
                }
            }

            newRequest.onerror = function () {
                reject(newRequest.status)
            }

            newRequest.send(JSON.stringify(body));
        })
    }
}

// axios.get('https://jsonplaceholder.typicode.com/users', {})
//     .then(function (response) {
//         console.log(response);
//     }).catch(function (err) {
//         console.log(err);
//     })

// axios.post('https://jsonplaceholder.typicode.com/users', {}, {

// })
// .then(function(response){
//     console.log(response);
// }).catch(function(err){
//     console.log(err);
// })

form.addEventListener('submit', () => {
    
    console.log(name.value);
    
    axios.post('https://jsonplaceholder.typicode.com/users', {}, {
        name: name.value,
        surname: surname.value,
        age: age.value,
        email: email.value,
        city: city.value
    })
        .then(function (response) {
            console.log(response);
        }).catch(function (err) {
            console.log(err);
        })

        form.reset();
})