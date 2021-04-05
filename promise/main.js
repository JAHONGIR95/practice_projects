// let somePromise = new Promise(function(resovle, reject) {

//     let requestStatus =  false;

//     let data = {
//         title: 'Kung Fu panda',
//         original_title: 'ha ha ha',
//         year: 2010
//     }

//     if(requestStatus){
//         resovle(data);
//     } else{
        
//         reject('404 Not Found');
//     }

// })

// somePromise.then(function(response) {
//     console.log(response);
// }).catch(function(err){
//     console.log(err);
// })

// let axios = {
//     get: function(requiredLink, params){
//         return new Promise(function(resovle, reject){
//             let status = true;

//             let someData = {
//                 requiredLink: requiredLink,
//                 params: params
//             }

//             if(status){
//                 resovle(someData);
//             } else {
//                 reject('Error');
//             }
//         })
//     }
// }


// axios.get('https://api.google.com', {
//     params: {
//         someKey: 'Salom'
//     }
// }).then(function(response){
//     console.log(response);
// }).catch(function(err){
//     console.log(err);
// })

