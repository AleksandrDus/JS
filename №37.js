var arr = [];
function getDivisors(x) {

   if (typeof x === 'number') {
   for (i = 1; i <= x; i ++) {
      if (x % i == 0) {
          arr.push(i)

      }   
   }

 } else {
   throw new Error('parameter type is not a Number')
 } 
 return arr
} 

console.log(getDivisors(12))