function multiTable(number) {
  // good luck
  let sum = "";
  for (let i = 1; i <= 10; i++) {
    sum += `${i} * ${number} = ${i * number}${i < 10 ? "\n" : ""}`;
  }
  return sum;
}
console.log(multiTable(5));
