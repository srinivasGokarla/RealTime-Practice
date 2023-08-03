  let n = 4;
 for(let i= 0; i < n; i++) {
        let arr = []
        for(let j = 0; j <n; j++){
           if(i === 0 || j=== 0) {
            arr.push("*")
           } else if(i === (n-1) || j ===(n-1)) {
            arr.push("*")
           } else {
            arr.push(" ")
           }
          
        }
        console.log(arr.join(" "))
    }
