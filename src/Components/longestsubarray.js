let N = 6
 let arr =  [1, 2, 1, 2, 3, 1];
  let ans = 1;
   let max = 1;
   for(i = 0; i < N; i++) {
    if(arr[i-1] < arr[i]) {
        ans++
    } else {
        max = Math.max(ans,max)
        ans = 1
    }
   } 
         max = Math.max(ans,max)
         console.log(max)
