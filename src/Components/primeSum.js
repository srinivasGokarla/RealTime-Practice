let N = 13;
let sum = 0;
let arr = []
    for(let i = 1; i <= N; i++) {
        let count = 0;
        for(let j = 2; j <= Math.floor(i/2); j++){
            if(i % j === 0) {
                count++;
                
            }
        }
        
        if(count == 0 && i != 1) {
            arr.push(i)
            sum = sum + i
            
        }
    }
    console.log(arr)
    console.log(sum)
