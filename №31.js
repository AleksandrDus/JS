function f(a) {
    if (typeof a === 'number') {
        s = a*a*a
       
    } else {
        throw new Error('parameter type is not a Number')
    }
    
    return s

}



console.log(f(2))

console.log(f('2'))