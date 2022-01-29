// ####Задача 2

// Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.
// Функция должна содержать проверки:
// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// const arr = [1,2,3];
// filter(arr, function(item, i, arr) {});



const arr = [1,2,3];

let item = 0;
let filter2 = function(arr,callback) {
    let result = [];
    if(typeof (callback) === 'function') {
        if(Array.isArray(arr) === true) {
            for(i = 0; i < arr.length; i ++) {
                if (callback(arr[i], i, arr)) {
                     result.push(arr[i]) 
                 }
            } 
        }  else {
            throw new Error('not an array')
        }
    }      else {
        throw new Error('not a function')
    }
    return result
} 

a = filter2(arr, function(item, i, arr) { return item % 2 ===  0})
console.log(a);