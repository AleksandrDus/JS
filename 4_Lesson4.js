// ####Задача 4

// Создать имплементацию функции `some`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// const arr = [1,2,3];
// some(arr, function(item, i, arr) {});

const arr = [1,2,3];
let some = function(arr,callback) {
  if(typeof (callback) === 'function') {
    if(Array.isArray(arr) === true) {
    for (i=0; i < arr.length; i ++) {
            if(callback(arr[i], i, arr) === true) {
            return true
          }
          
    } 
    } else {
      throw new Error('not an array')
      
}  
} else {
  throw new Error('not a function')
    } 
  };

  if (some(arr, function(item, i, arr) {return (item >0)})){
    console.log('условия выполнены');
    }
    else {
      console.log('условия не выполнены');
    }