let arr = [1,2,3,4,2,5]

let evenSum = 0, oddSum = 0;

for(let i= 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
        evenSum = evenSum + arr[i]
    } else {
        oddSum = oddSum + arr[i]
    }
}
console.log(evenSum, oddSum)
if(evenSum > oddSum) {
    console.log("Even Sum")
} elseif(evenSum < oddSum) {
    console.log("Odd Sum")
} else {
    console.log("Equal")
}
