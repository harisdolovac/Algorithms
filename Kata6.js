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

// function createPhoneNumber(numbers){
//   let first = numbers.slice(0,3).join("")
//   let secound = numbers.slice(3,6).join("")
//   let third = numbers.slice(6).join("")
//   return `(${first}) ${secound}-${third}`
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// function findUniq(arr) {
//   if (arr[0] !== arr[1] && arr[0] !== arr[2]) {
//     return arr[0];
//   }

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       const element = arr[j];
//       if (arr[i] !== arr[j]) {
//         return arr[[j]];
//       }
//     }
//   }
// }
// console.log(findUniq([1, 0, 0, 0, 0, 0, 0]), 1);

// function narcissistic(value) {
//   // Code me to return true or false
//   let compare = 0;
//   let strValue = "" + value;
//   let val = strValue.split("").map(Number);
//   for (let i = 0; i < val.length; i++) {
//     console.log(val.length);
//     const element = val[i];
//     compare += Math.pow(element, val.length);
//   }
//   return compare == value;
// }

// console.log(narcissistic(1652));

var countBits = function (n) {
  return n
    .toString(2)
    .split("")
    .reduce((sum, num) => sum + +num, 0);
};

console.log(countBits(10), 2);
