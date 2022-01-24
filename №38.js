function f(arr) {
   if (Array.isArray(arr) != true) {
        throw new Error ('parameter type should be an array')
    }
    if (arr.length === 0) {
        throw new Error ('parameter can`t be an empty')

    }
      
   
   console.log(arr.splice(0,1))
   
    if (arr.length == 0) {

        return
  
    
}      

    
    f(arr)
          
}  

f([1,2,3]);

    

