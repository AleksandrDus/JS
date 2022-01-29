// Код ниже получает из массива строк новый массив, содержащий их длины:

// var arr = ['abcd', 'abcde', 'ab', 'abc'];

// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
// arrLength[i] = arr[i].length;
// }

// console.log( arrLength ); // 4,5,2,3


// Перепишите выделенный участок:

// - используйте вместо цикла `for` метод `map`

var arr = ['abcd', 'abcde', 'ab', 'abc'];
var arrLength = [];

var arrLength = arr.map(el => el.length) 
    



console.log(arrLength);