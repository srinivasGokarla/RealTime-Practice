
 let arr =  [1, 2, 1, 2, 3, 1];
 let inti = 0;
 let n = 6
 let all = (n*(n+1))/2;
 console.log(all)
 let sum = arr.reduce((acc,cur) => acc + cur, inti)
 console.log(sum)
 
 let total = 0;
 for(let i= 0; i < arr.length; i++) {
     total += arr[i]
 }
