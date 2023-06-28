// const ab=["a0","b1","c2","d3"] // [a3,b2,c1,d0]

// const ans = a.map((item[i]) => item.split("")
// )
// console.log(ans)

// const a=["a","b","c","d"] // [a3,b2,c1,d0]

// //console.log(a)
// let arr = []
// let j = a.length
// for(let i = 0; i< a.length; i++) {
//     j--;
//  arr.push(`${a[i]}${j}`)

// }
// console.log(arr)
// const b=a.reverse().map((name,index)=>name+index)
// console.log(b.reverse())

// const c = ab.map((name, index) => name + index)
// console.log(c.reverse())

// const arr = [1,2,23,3,5,5,2,5,2,2,1,5]

// console.log(new Set(arr))

const string = "aabbbaxcdebcefg"

let str = string.split("")
let obj = {}
let arr  = []
for(let i= 0; i < str.length; i++) {
    if(obj[str[i]] === undefined) {
        obj[str[i]] = 1
    } else {
        obj[str[i]] = obj[str[i]] +1 
    }
}
for( let k in obj) {
   arr.push(k)
}
console.log(arr.join(""))
let unique = str.filter((item, i, ar) => ar.indexOf(item) === i);
let ans = new Set(str)
console.log(ans)
console.log(unique.join(""))
