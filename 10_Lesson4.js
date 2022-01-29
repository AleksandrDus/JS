// Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Генерировать ошибку если был передан пустой массив

const arr = [3,2,1];
// reverse(arr); // [1,2,3]

function reverse(arr) {
   let arr1 = []
   if (arr.length === 0) {
    throw new Error('array is emty') }   
   if (Array.isArray(arr) === true) {
   for (i = 0; i < arr.length; i ++) {
        arr1.unshift(arr[i])
    }
         return arr1
         
} else {
    throw new Error('not an array')
}
}  



console.log(reverse(arr));