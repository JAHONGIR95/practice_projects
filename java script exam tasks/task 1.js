function vowelDeleter(str) {
  var a = 0;
  a = str.split('');
  a.forEach((item, key) => {
    if(item  == 'a' || item == 'i' || item == 'e' || item == 'o' || item == 'u'){
      a.splice(key, 1)
    }
  })
  return a.join('');
}

let strWithVowels1 = "Salom mening ismim Falonchi";
vowelDeleter(strWithVowels1);