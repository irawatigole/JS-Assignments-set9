
// (filterValues([false,true,'',0,'abcd'])).toEqual([true,'abcd'])
// (filterValues([false,'',0])).toEqual([])
// (filterValues(["hello",1])).toEqual(["hello",1])



function filterValues(arr){
    var result = [];
    for (var i=0;i<arr.length;i++){
 if (arr[i]){
     result.push(arr[i])
 }  
 }
 return result;
}
console.log(filterValues([false,true,'',0,'abcd']));
console.log(filterValues([false,'',0]));
console.log(filterValues(["hello",1]));