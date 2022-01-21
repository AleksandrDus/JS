const arr = [1, 2, -4, 3, -9, -1, 7];
var arr1 = [];
function isPositive(i) {
    
    if (typeof i === 'number') {
        if (i > 0) {
            return  true
        } else {
            return  false
        } 

    
        
    } else throw new Error('parameter type is not a Number')

}
   
    for (i = 0; i < arr.length; i ++) {
       if (isPositive(arr[i])) {
             arr1.push(arr[i])
       
    } 
}


console.log(isPositive(arr[0]))
console.log(arr1)