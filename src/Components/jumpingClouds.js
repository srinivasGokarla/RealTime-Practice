let arr = [0, 0, 1, 0, 0, 1, 0]
let N = arr.length;

    let count = 0, ans = 1
    for(let i = 0; i < N; i++) {
        if(arr[i+2] == "1") {
            count++
        } else {
            ans++
        }
    }
    console.log(count+2)
