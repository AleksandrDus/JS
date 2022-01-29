// ####Задача 3

// Создать имплементацию функции `every`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// const arr = [1,2,3];
// every(arr, function(item, i, arr) {});

// const arr = [1,2,3];

// let result = arr.every(function(arr) {
//     return arr === 1
// })
// console.log(result)     // вернет false, т.к. не все элементы масссива = 1

const arr = [1,2,3];
let every = function(arr,callback) {
  if(typeof (callback) === 'function') {
    if(Array.isArray(arr) === true) {
    for (i=0; i < arr.length; i ++) {
                if(callback(arr[i], i, arr) === false) {
            return false
          }
          
    } 
      return true
}  else {
    throw new Error('not a function')
}
    } else {
      throw new Error('not an array')
    } 
  }

if (every(arr, function(item, i, arr) {return (item > 0)})){
console.log('условия выполнены');
}
else {
  console.log('условия не выполнены');
}
