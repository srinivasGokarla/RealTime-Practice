let  arr = [1,2,3,4,5,6]
let  sec = [3,3,5]
i= 0; j= 0;
let ans = []
while( i < arr.length && j < sec.length) {
    if(arr[i] == sec[j]) {
        ans.push(arr[i]);
        i++;
        j++
    }else if(arr[i] < sec[j]) {
        i++;
    }else {
        j++
    }
}
if(ans.length < 1) {
    console.log(-1)
} else {
    console.log(ans.join(" "))
}

//using filter and includes

const numbers = arr.filter(items => sec.includes(items))

console.log((numbers.toString()))

//using nested loops
let common = []
for(let i = 0; i < arr.length; i++) {
    for(j=0; j < sec.length; j++) {
        if(arr[i] == sec[j]) {
            common.push(arr[i])
            break;
        }
    }
}
console.log(common.join(" "))

//using set intersection

const set1 = new Set(arr)
const set2 = new Set(sec)
const setArray = []

for(const item of set1) {
        if (set2.has(item)) {
            setArray.push(item);
        }
    }

   console.log(setArray)
