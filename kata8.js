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

function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(even_or_odd(2));
