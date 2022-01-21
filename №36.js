
function isEven(i) {
 if (typeof i === 'number') {
     
         if (i % 2 == 0) {

            return true 

         } else {

            return false
         } 

    
      

 } else


    throw new Error('parameter type is not a Number')
} 


console.log(isEven(3))
console.log(isEven(4))
console.log(isEven('s'))