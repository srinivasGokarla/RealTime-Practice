function runProgram(input) {
input = input.trim().split("\n")
let [A,B]=input[0].split(" ").map(Number);

const mod = 1000000007;
const result = powerMod(A, BigInt(B), BigInt(mod));
console.log(result.toString());
}

function powerMod(A,B, mod) {
   let result = BigInt(1);
    let base = BigInt(A);

    while (B > 0n) {
        if (B % 2n === 1n) {
            result = (result * base) % mod;
        }
        base = (base * base) % mod;
        B = B >> 1n;
    }

    return result;
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

