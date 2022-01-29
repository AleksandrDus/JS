// ####Задача 6

// Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
// - Третий параметр обязателен и может принимать только строку или число

// const arr = [1,2,3];
// const acc = 0;
// reduceRight(arr, function(acc, item, i, arr) {}, acc);

const arr = [1,2,3];
const acc = 0;
let reduceRight = function(callback, acc) {
  sum = 0;
  let i = 0;
  if(typeof (callback) === 'function') {
  if(Array.isArray(arr) === true) {
   for ((i = arr.length -1); i >= 0;i --) {
    callback(acc, arr[i], i, arr)
    sum += arr[i]
   } 
      return sum
  } else {
    throw new Error('not an array')
  }
} else {
  throw new Error('not an array')
}
}
  let a = reduceRight((arr,function(acc, item, i, arr) {return (sum + item) ,acc}))

  console.log(a)
