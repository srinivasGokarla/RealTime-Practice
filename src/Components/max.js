let arr = [1,2,13,5,7,7,9,10,12,3]
let max = 0;
for(let i= 0; i < arr.length; i++) {
    if(max < arr[i]) {
        max = arr[i]
    }
}
console.log(max)
