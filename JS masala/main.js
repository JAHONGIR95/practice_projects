var m = 5;
function numbers(n) {
	for(i = 1; i <= n; i++){
		console.log(i);
	}
}
numbers(m);

console.log('***************************');

var s = 0;
function sum(n){
	for(i = 1; i <= n; i++){
		s += i;
	}
	console.log(s);
}
sum(m);

console.log('***************************');

function square(n){
	for(i = 1; i <= n; i++){
		console.log(i**2);
	}
}
square(m);

// if(!window.localStorage.getItem('username')){
// 	var usernamePrompt = window.prompt('Ismingizni yozing...');

// 	window.localStorage.setItem('username', usernamePrompt);
// } else {
// 	alert(`Salom ${window.localStorage.getItem('username')}`);
// }

// window.addEventListener('online', checkStatus);
// window.addEventListener('offline', checkStatus);

// function checkStatus(){
// 	if(window.clientInformation.onLine){

// 	} else {
// 		alert('Internet ochib qoldi brat!');
// 	}
// }

var num = [4, 3, 11, 45, 2, 6, 0, 1];
var a;
var b;

for(i = 0; i < num.length; i++){
	if(num[i] < num[i+1]){
		a = num[i];
		num[i] = num[i+1];
		num[i+1] = a;
	}
	else{
		
	}
	
}
console.log(num);