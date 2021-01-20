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