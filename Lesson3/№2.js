function f() {
    var result = 0;
 
    for (var i = 0; i < arguments.length; i++) {
         if (typeof arguments[i] === 'number') {
            result += arguments[i];
         
        } else {
            throw new Error('parameter type is not a Number')
        }

        
    } 
       
    return result;
  
    }
 
    console.log(f(1,2,3))
    console.log(f(1,1,1,1,1,1,1,1))
    console.log(f(1,2,'s',4))