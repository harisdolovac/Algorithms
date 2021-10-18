// function multiTable(number) {
//   // good luck
//   let sum = "";
//   for (let i = 1; i <= 10; i++) {
//     sum += `${i} * ${number} = ${i * number}${i < 10 ? "\n" : ""}`;
//   }
//   return sum;
// }
// console.log(multiTable(5));

// function validateHello(greetings) {
//   const greet = ["hello", "ciao", "salut", "hallo", "hole", "ahoj", "czesc"];
//   console.log(greet);
//   for (let i = 0; i < greet.length; i++) {
//     const element = greet[i];
//     console.log(element);
//     const elements = element.toLowerCase();
//     if (elements.includes(element)) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(validateHello("heLLO"));

// function even_or_odd(number) {
//   return number % 2 === 0 ? "Even" : "Odd";
// }

// console.log(even_or_odd(2));

// function greet() {
//   return "hello world!";
// }

// function defineSuit(card) {
//   if (card.includes("♣")) {
//     return "clubs";
//   } else if (card.includes("♦")) {
//     return "diamonds";
//   } else if (card.includes("♥")) {
//     return "hearts";
//   } else return "spades";
// }

// console.log(defineSuit("♦♦"));

// function calculateAge(birth, thisYear) {
//   if (birth > thisYear) {
//     return birth - thisYear > 1
//       ? `You will be born in ${birth - thisYear} years.`
//       : `You will be born in ${birth - thisYear} year.`;
//   } else if (birth === thisYear) {
//     return "You were born this very year!";
//   } else {
//     return thisYear - birth > 1
//       ? `You are ${thisYear - birth} years old.`
//       : `You are ${thisYear - birth} year old.`;
//   }
// }
// console.log(calculateAge(2015, 2016));

// function distinct(a) {
//   final = [];
//   for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     if (!final.includes(element)) {
//       final.push(element);
//     }
//   }
//   return final;
// }

// console.log(distinct([1, 1, 2]), [1, 2]);

// function hello(name) {
//   return name
//     ? `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
//     : "Hello, World!";
// }

// console.log(hello(), "Hello, John!");

function twoHighest(arr) {
  let final = [];
  let sortedArr = arr.sort((a, b) => b - a);
  for (let i = 0; i < sortedArr.length; i++) {
    const element = sortedArr[i];
    if (!final.includes(element)) {
      final.push(element);
    }
  }

  return final.slice(0, 2);
}

console.log(twoHighest([15, 20, 20, 17]));
