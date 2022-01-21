function f(a,b,c) {
    if ((typeof a === 'number') && (typeof b === 'number') && (typeof c === 'number' )) {
    return ((a-b)/c)
}  else {
    throw new Error('parameter type is not a Number')
}
}

console.log(f(9,3,2))

console.log(f('s',9,3))