let arr = [1,2,4,5,2,3,5,5,3,5]

let obj = {};
for(let i = 0; i < arr.length; i++) {
if(obj[arr[i]] === undefined) {
   obj[arr[i]] = 1
} else {
obj[arr[i]] += 1
}
}
for(k in obj) {
console.log(obj[k])
}
