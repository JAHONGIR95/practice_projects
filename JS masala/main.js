// var newArr = [1, 2, 3, 4, 5, 6, 7];

// var sum=0
// for(let i = 0; i < newArr.length; i++){

//     if(newArr[i] % 2 == 1){
//         sum += newArr[i];
//     }

// }
// console.log(sum)

{/* <script>
	function Palindrome()
	{
		var rem, temp, final = 0;
		var number = Number(document.getElementById("N").value);

		temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
			window.alert("The inputed number is Palindrome");
		}
		else
		{
			window.alert("The inputted number is not palindrome");
		}
	}
</script> */}

var a, b, c = 0;

var num = 12;
while(num > 0){
    a = num % 10;
    num = parseInt(num / 10);
    c = c * 10 + b;
}

console.log(c);