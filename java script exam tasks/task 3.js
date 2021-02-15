/*
  Stringni ichidagi harflarni o'zgartiring:
  1. a => A;
  2. u, i, o, e => *
  3. Har bir so'zni oxiriga "!!!" qo'ying
*/

let yomonString1 = "Basharang qursin";
// let yomonString2 = "Kodlaringdan semicolonlaring tushib qolib siqilib qogin";
// let yomonString3 = "Buglaring hech qachon tog'rlanmasdan iloyim boshing bugdan chiqmasin";

function censorStr(str) {
  var a = str.replace(/a/gi, '@');
  var b = a.replace(/u/gi, '*');
  var c = b.replace(/i/gi, '*');
  var d = c.replace(/e/gi, '*');
  var k = d.replace(/o/gi, '*');
  var empty = k.replace(/ /gi, '!!! ');

  var all =  empty + '!!!';
  return all.toUpperCase();
  // Write your code here
}

console.log(censorStr(yomonString1)); //=> B@SH@R@NG!!! Q*RS*N!!! 
// console.log(censorStr(yomonString2)); //=> K*DL@R*NGD@N!!! S*M*C*L*NL@R*NG!!! T*SH*B!!! Q*L*B!!! S*Q*L*B!!! Q*G*N!!! 
// console.log(censorStr(yomonString3)); //=> B*GL@R*NG!!! H*CH!!! Q@CH*N!!! T*G'RL@NM@SD@N!!! *L*Y*M!!! B*SH*NG!!! B*GD@N!!! CH*QM@S*N!!!