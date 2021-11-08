// function likes(names) {
//   // TODO
//   if (names.length == 0) {
//     return "no one likes this";
//   }
//   if (names.length == 1) {
//     return names + " " + "likes this";
//   }
//   if (names.length == 2) {
//     return `${names[0]} and ${names[1]}  like this`;
//   }
//   if (names.length == 3) {
//     return `${names[0]},${names[1]}  and ${names[2]}  like this`;
//   }
//   if (names.length > 3) {
//     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//   }
// }

// console.log(likes(["Alex", "ja", "Dfs", "sadsad"]));

// console.log(spinWords("Hey fellow warriors"));

// function spinWords(string) {
//   let words = string.split(" ");
//   let finals = [];
//   for (let i = 0; i < words.length; i++) {
//     const element = words[i];
//     if (element.length < 5) {
//       finals.push(element);
//     }
//     if (element.length >= 5) {
//       finals.push(element.split("").reverse().join(""));
//     }
//   }

//   return finals.join(" ");
// }

// console.log(spinWords("Hey fellow warriors"));

// function digital_root(n) {
//   let sum = 0;
//   const sumArr = [];
// for (let i = 0; i < splitNum.length; i++) {
//   const element = parseInt(splitNum[i]);
//   sum +=element
// }

// function digital_root(n) {
//   if (n < 10) return n;
//   return digital_root(
//     n.toString().split('').reduce((acc, d) => {
//       return acc + +d;
//     },0));
// }

// function duplicateCount(text) {
//   let total = 0;
//   const newArr = [...text.toLowerCase()];

//   //  let final = [...new Set(text)]
//   const final1 = newArr.filter((item, i) => {
//     return newArr.indexOf(item) !== i;
//   });
//   console.log(final1);
//   let final = [...new Set(final1)].length;
//   return final;
// }

// console.log(duplicateCount("Indivisibility"));

// function ADiff(a, b) {
//   let uniq = [...new Set(a)];
//   let intersection = a.filter(x => !b.includes(x))
//   return intersection
// }

// console.log(arrayDiff([1, 2, 2, 2, 3,4], [2,3]));

function findOdd(A) {
  //   let obj = {};

  //   for (let i = 0; i < A.length; i++) {
  //     const element = A[i];
  //     obj[i] = element;
  //   }

  console.log("A");

  //   console.log(obj);
}

console.log([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
