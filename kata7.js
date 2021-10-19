function highAndLow(numbers) {
  let nums = numbers.split(" ").sort((a, b) => a - b);
  return [nums[0], nums[nums.length - 1]].join(" ");
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
