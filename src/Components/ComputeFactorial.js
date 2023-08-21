function runProgram(input) {
input = input.trim().split("\n")
let N = Number(input[0])
let line = 1
for(i = 0; i < N; i++) {
   let[a,b] = input[line++].trim().split(" ").map(Number)
console.log(factorial(a,b)) 
}

}
function factorial(a,b) {
    let result = 1;
    if(a >= b) {
        return 0
    } else {
        for(let i= 1; i <= a; i++) {
            result = (result * i) % b
        }
    }
    return result
}


if (process.env.USERNAME === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
