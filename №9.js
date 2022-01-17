
var arr = [1, 2, 3, 4, 5, 6]

for (n = 0; n < arr.length; n ++ ) {
for (i = 0; i < arr.length; i ++) {
    if (arr[i] < arr[i + 1]) {
        const b = arr[i]
        arr[i] = arr[i + 1]
        arr[i+1] = b
    }
    }
}
console.log(arr)