// let number = 10;
// for(let i= 1; i <= number; i++) {
//     if(i % 3 == 0) {
//         console.log("fizz")
//     } else if(i % 5 == 0) {
//         console.log("buzz")
//     } else if(i % 3 == 0 && i % 5 == 0) {
//         console.log("fizzbuzz")
//     } else {
//         console.log(i)
//     }
// }
let str = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === char.toUpperCase()) {
      str += char.toLowerCase();
    } else {
      str += char.toUpperCase();
    }
  }

  return str;
