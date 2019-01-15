// (isIsogram('')).toBeTruthy()
// (isIsogram('Dermatoglyphics')).toBeTruthy()
// (isIsogram('aba')).toBeFalsy()
// (isIsogram('moOse')).toBeFalsy()

function isIsogram(a){
  a =a.toLowerCase();
   if (a.length == 0){
       return true;
   }
    for (var i = 0; i< a.length; i++){
		if (a.indexOf(a[i]) !== a.lastIndexOf(a[i])){
            return false;
 } 
}
return true;
}
console.log(isIsogram(''));
console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));



