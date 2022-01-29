
// // Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями. 
// Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько 
// элементов должно быть в массиве.

// // Функция должна содержать проверки:

// // - Первый параметр обязателен и может принимать только число, строку, объект, массив
// // - Второй параметр обязателен и может принимать только число

// // arrayFill('x',5); // [x,x,x,x,x]


function arrayFill(a,b) {
    let arr = [];
  
    if (typeof (a === 'number') || (a === 'string') || (a === 'Object') || (a === 'Array')) {
      if (typeof (b != 'number')) {
        
        for (i = 0; i < b; i ++) {
        
        arr.push(a)

    }
       return arr
       
} else {

  throw new Error ('not a number')
    
  
}
          
} else {
  throw new Error ('not a suitable item')
}

   }




console.log(arrayFill(1,6));