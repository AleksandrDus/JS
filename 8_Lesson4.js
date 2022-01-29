
// Напишите функцию `f` . Данная функция принимает один параметр: одноуровневый или многоуровневый массив.
//  Возвращает данная функция сумму всех элементов на всех уровнях.

// // Обратите внимание что функция должна возвращать число 0, если при 
// проходе всех уровней не было найдено ни одного числа.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Генерировать ошибку если на каком то уровне было найдено не число и не массив

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
// f(arr); // 12
 const arr2 = [[[[[1,2]]]]];
// f(arr2); // 3
const arr3 = [[[[[1,2]]],2],1];
// f(arr3); // 6
const arr4 = [[[[[]]]]];
// f(arr4); // 0
const arr5 = [[[[[],3]]]];
 //f(arr5); // 3
 arr6 = 5    // not an array
 arr7 = [1,1,'a',1,1,]



function f(arr) {
    if (Array.isArray(arr) === true) {
      
        arr = arr.flat(Infinity)
              if (arr.every(function(n) {return typeof(n) === 'number'})) {
    return result = arr.reduce(function(sum, current) {
        return sum + current;
      }, 0); 
    } else {
        throw new Error('not a number')
    }
} else {
    throw new Error('not an array')
}
} 

console.log(f(arr7))