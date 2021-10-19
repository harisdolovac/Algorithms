// function highAndLow(numbers) {
//   let nums = numbers.split(" ").sort((a, b) => a - b);
//   return [nums[0], nums[nums.length - 1]].join(" ");
// }

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

function disariumNumber(n) {
  let nums = String(n);
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    let newA = Number(element);
    sum += Math.pow(newA, i + 1);
  }

  return sum === n ? "Disarium !!" : "Not !!";
}

console.log(disariumNumber(89));
