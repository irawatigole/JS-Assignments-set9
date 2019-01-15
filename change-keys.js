// Write a function, changeKeys, which will take an array of musical keys and transpose those keys a specified number of steps.

// In music the chromatic scale has the following notes [A, A#, B, C, C#, D, D#, E, F, F#, G, G#]. A '#' is "sharp" notation. A#, or A sharp, is in between A and B. Your function changeKeys() should take an array of notes and a number between 1-9 as the number of steps. The function should return an array with all the notes in the array transposed up that many steps.

// (changeKeys(['A','A#','B'], 3)).toEqual(['A#','B','D']);
// (changeKeys(['G'],5)).toEqual(['C'])
// (changeKeys(['E', 'F'], 10)).toBe('index outofbound')
// (changeKeys(['E', 'F'], 1)).toEqual(['F', 'F#'])

function changeKeys(a,b){
var c = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
if (b>9){
    return 'index outofbound'
}
var d = c.indexOf(a[a.length-1])
if ((b+d)>c.length){
    a.push(c[b-(c.length-d)]);
} else {
a.push(c[d+b])
}
a.shift()
return a;
}
console.log(changeKeys(['A','A#','B'], 3))
console.log(changeKeys(['G'], 5))
console.log(changeKeys(['E', 'F'], 1))
console.log(changeKeys(['E', 'F'], 10))


