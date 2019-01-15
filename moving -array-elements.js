// test('it should return text "empty array" if input array is empty',() => { 
//     expect(move([],0,2)).toBe('empty array'

// (move([10, 20, 30, 40, 50], 6, 2)).toBe('element not present at the given index')

// (move([10, 20, 30, 40, 50],0,2)).toEqual([20, 30, 10, 40, 50])



function array_move(arr, old_index, new_index) {
    if (arr.length == 0){
        return 'empty array'
    } else if 
    (arr.length < old_index){
        return 'element not present at the given index'
     } else {
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
     }
    return arr;
};

console.log(array_move([10, 20, 30, 40, 50], 0, 2)); 
console.log(array_move([], 0, 2)); 
console.log(array_move([10, 20, 30, 40, 50], 6, 2)); 




