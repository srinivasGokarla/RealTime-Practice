let arr = [ 3, 3, 5, 5, 1]
  let n =arr.length
  
   let sum1 = 0,sum2 = 0;
   for(let i = 0; i < Math.floor(n/2); i++) {
      sum1 = sum1 + arr[i]
   }
   for(let i = Math.floor(n/2)+1; i < n; i++) {
       sum2 = sum2 + arr[i]
   }if(sum1=== sum2) {
       console.log(Math.floor(n/2) + 1)
   } else {
       console.log(-1)
   }
