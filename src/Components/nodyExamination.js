let arr = [4, 3, 7, 6, 7, 2, 2]
let target = 6;
let skip = 0, count = 0;
for(let i= 0; i < arr.length; i++) {
    if(arr[i] > target) {
        skip++;
    } else {
       count++
    }
    if(skip > 1) {
    break;
}

}
  console.log(count)
