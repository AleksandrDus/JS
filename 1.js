// // ####Задача 1

// // Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

// // Функция должна содержать проверки:

// // - Первый параметр обязателен и может принимать только массив
// // - Второй параметр обязателен и может принимать только функцию

// // ``
// //const arr = [1,2,3];
// //forEach(arr, function(item, i, arr) {});

const arr = [1,2,3];
item = 0;

function forEach2(arr,callback) {
    if (typeof (callback) === 'function') {    
    if (Array.isArray(arr) === true) {
    
    for (i = 0; i < arr.length; i ++) {
        callback(item, i, arr) 
    }    
        } else {
            throw new Error ('not an Array')
        } 
    } else {
            throw new Error ('not a function')
    } }
  
forEach2(arr, function(item, i, arr) { 
    console.log(item, i, arr);
})

