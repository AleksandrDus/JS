// const arr = [1,2,3];
// const acc = 0;
// reduce(arr, function(acc, item, i, arr) {}, acc);


const arr = [1,2,3];
const acc = 0;
let reduce = function(callback, acc) {
  sum = 0;
  if(typeof (callback) === 'function') {
  if(Array.isArray(arr) === true) {
  for (i = 0; i < arr.length;i ++) {
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
  let a = reduce((arr,function(acc, item, i, arr) {return (sum + item) ,acc}))

  console.log(a)
