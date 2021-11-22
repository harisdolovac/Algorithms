// function removeDuplicateWords(s) {
//   // your perfect code...
//   let newAr = s.split(" ");
//   console.log(newAr);

//   let final = newAr.filter((item, i) => newAr.indexOf(item) === i);
//   console.log(final.join(" "));
// }

// removeDuplicateWords("alpha beta beta gamma gamma gamma delta");

// function evenNumbers(array, number) {
//   let final = [];
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element % 2 == 0) {
//       final.push(element);
//     }
//   }
//   return final.slice(-number);
// }
// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

// function getCount(str) {
//   var vowelsCount = 0;
//   let vowels = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j <= vowels.length; j++) {
//       if (str[i] == vowels[j]) {
//         vowelsCount += 1;
//       }
//     }
//   }
//   return vowelsCount;
// }

// console.log(getCount("abracadabra"));

// function getCount(str) {
//   let strArr = str.split("");
//   let vowels = ["a", "e", "i", "o", "u"];
//   let final = vowels.filter((item) => {
//     return strArr.includes(item) ? true : false;
//   });
//   return final;
// }

// console.log(getCount("abracadabrae"));

// function accum(s) {
//   let res = [];
//   for (let i = 0; i < s.length; i++) {
//     let row = "";
//     //console.log(i); 0-10
//     for (let j = 0; j < i + 1; j++) {
//       console.log(j);
//       row += j === 0 ? s[i].toUpperCase() : s[i].toLowerCase();
//     }
//     res.push(row);
//   }
//   return res.join("-");
// }

// console.log(accum("ZpglnRxqenU"));

// function name() {
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < i; j++) {
//       console.log(i);
//     }
//   }
// }

// name();

// function disemvowel(str) {
//   let vowels = "aeiou";
//   return str
//     .split("")
//     .filter((letter) => letter == !vowels.includes(letter))
//     .join("");
// }

// console.log(disemvowel("This website LOL!"));

// function highAndLow(numbers) {
//   let numArr = numbers.split(" ");
//   let lowest = numArr.sort((a, b) => a - b).slice(0, 1);
//   let highest = numArr.sort((a, b) => b - a).slice(0, 1);
//   // let final = highest + " " + lowest;
//   let final = `${highest} ${lowest}`;
//   console.log(final);
// }

// function highAndLow(numbers) {
//   let final = numbers.split(" ");
//   let lowest = Number(final[0]);
//   let highest = Number(final[0]);

//   for (let i = 0; i < final.length; i++) {
//     const element = Number(final[i]);
//     if (element < lowest) lowest = element;

//     if (element > highest) highest = element;
//   }
//   console.log("Lowest is:", lowest);
//   console.log("highest is:", highest);
// }

// function highAndLow(numbers) {
//   let numArr = numbers.split(" ");
//   let HighLowNumber = numArr.sort((a, b) => a - b);
//   return `${HighLowNumber[HighLowNumber.length - 1]} ${HighLowNumber[0]}`;
// }

// console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

// function squareDigits(num) {
//   let nums = num.toString();
//   let numArr = nums.split("");
//   let final = [];
//   for (let i = 0; i < numArr.length; i++) {
//     const element = numArr[i];
//     final.push(element * element);
//   }
//   return final.join("");

// }

// console.log(squareDigits(3212));

// function descendingOrder(n) {

//   let strNum = n.toString().split("");

//   return strNum.sort((a, b) => b - a).join("");
// }

// console.log(descendingOrder(1021));

// function getMiddle(s) {
//   if (s.length == 1) return s;
//   let middle = parseInt(s.length / 2 - 1);
//   if (s.length % 2 == 0) {
//     return s[middle] + s[middle + 1];
//   } else {
//     return s[middle + 1];
//   }
// }

// console.log(getMiddle("Aea"));

// function isIsogram(str) {
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         return true;
//       }
//     }
//     return false;
//   }
// }
// console.log(isIsogram("abA"));

// var isSquare = function (n) {
//   console.log(Math.pow(n, 0.5));
//   if (Number.isInteger(Math.pow(n, 0.5))) return true;
//   else return false;
// };

// function findShort(s) {
//   let words = s.split(" ");
//   let smallest = words[0];

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length < smallest.length) {
//       smallest = words[i];
//     }
//   }
//   return smallest.length;
// }
// console.log(findShort("Let's travel abroad shall we"));

// function sumTwoSmallestNumbers(numbers) {
//   let sum = 0;
//   let final = numbers.sort((a, b) => a - b);
//   return (sum = final[0] + final[1]);
// }
// console.log(sumTwoSmallestNumbers([5, 18, 12, 19, 22]));

// var number = function (busStops) {
//   let inPass = 0;
//   let outPass = 0;
//   let total = 0;
//   for (let i = 0; i < busStops.length; i++) {
//     inPass += busStops[i][0];
//     outPass += busStops[i][1];
//   }
//   return (total = inPass - outPass);
// };

// console.log(
//   number([
//     [10, 0],
//     [3, 5],
//     [5, 8],
//   ])
// );

// function divisors(integer) {
//   let final = [];

//   for (let i = 2; i < integer; i++) {
//     if (integer % i === 0) {
//       final.push(i);
//     }
//   }
//   if (final.length === 0) {
//     return `${integer} is prime`;
//   }
//   return final;
// }

// console.log(divisors(3));

// function oddOrEven(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     sum += element;
//   }
//   if (sum % 2 === 0) {
//     return "even";
//   }
//   return "odd";
// }

// console.log(oddOrEven([0, 4]));

// function vaporcode(string) {
//   let newStr = string.toUpperCase().split(" ").join("");
//   console.log(newStr.split(" ").join(""));
//   let final = [];
//   for (let i = 0; i < newStr.length; i++) {
//     const element = newStr[i] + "  ";

//     final.push(element);
//   }
//   return final.join("").slice(0, -3);
// }

//

// function vaporcode(string) {
//   let final = string.split(" ").join("").split("").join("  ");
//   return final.toUpperCase();
// }

// console.log(vaporcode("Let's go to the movies"));

// function solution(nums) {
//   if (nums !== null) {
//     return nums.sort((a, b) => a - b);
//   } else {
//     return [];
//   }
// }

// console.log(solution(null));

// function findOutlier(integers) {
//   const finalEven = [];
//   const finalOdd = [];
//   for (let i = 0; i < integers.length; i++) {
//     const element = integers[i];
//     if (element % 2 == 0) {
//       finalEven.push(element);
//     } else {
//       finalOdd.push(element);
//     }
//   }
//   if (finalEven.length == 1) {
//     return parseInt(finalEven.join());
//   } else {
//     return parseInt(finalOdd.join());
//   }
// }

// console.log(findOutlier([2, 6, 8, 10, 3]));

// function solution(number) {
//   let sum = 0;
//   for (let i = number - 1; i >= 0; i--) {
//     if (i % 3 == 0 || i % 5 == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(solution(10));

// function reverseWords(str) {
//   let strArr = str.split("").reverse();
//   let finalArr = strArr.join("").split(" ");
//   // console.log(finalArr);
//   let final = [];
//   for (let i = finalArr.length - 1; i >= 0; i--) {
//     const element = finalArr[i];
//     final.push(element);
//   }
//   let finaly = final
//     .filter(function (str) {
//       return /\S/.test(str);
//     })
//     .join(" ");
//   return finaly;
// }

// console.log(reverseWords("The quick brown fox jumps over the lazy dog."));

// function isSameLanguage(list1) {
//   console.log(list1[0].language);
//   for (let i = 0; i < list1.length; i++) {
//     const element = list1[i];

//   }
// }

// var list = [
//   {
//     firstName: "Daniel",
//     lastName: "J.",
//     country: "Aruba",
//     continent: "Americas",
//     age: 42,
//     language: "JavaScript",
//   },
//   {
//     firstName: "Kseniya",
//     lastName: "T.",
//     country: "Belarus",
//     continent: "Europe",
//     age: 22,
//     language: "JavaScript",
//   },
// ];
// isSameLanguage(list);

// const prevMultOfThree = (n) => {
//   //your

//   if (n % 3 === 0) {
//     return n;
//   }
//   let newArr = n.toString().split("");
//   console.log(newArr);
//   while (n % 3 !== 0) {
//     newArr.splice(-1, 1);
//     n = Number(newArr.join(""));
//   }
//   return n ? n : null;
// };

// console.log(prevMultOfThree(1244));

// function reverseWords(str) {
//   console.log(str);
//   return str.split("").reverse().join("").split(" ").reverse()
//   console.log(a);
// }

// console.log(reverseWords("This is an example!"));

// function isPrime(n) {
//   // prime number is number who only divides self and 1 and he is grater then one
//   if (n < 2) {
//     return false;
//   }
//   for (let i = 2; i < n - 1; i++) {
//     if (n % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPrime(2));

// function findNextSquare(sq) {
//   // Return the next square if sq is a perfect square, -1 otherwise
//   console.log(Math.sqrt(121));
//   let res = Math.sqrt(sq);
//   console.log(res);
//   if (res % 1 == 0) {
//     res++;
//     return Math.pow(res, 2);
//   }

//   return -1;
// }
// console.log(findNextSquare(121));

// function vowelChange(str, vow) {
//   let newArr = str.split("");
//   let finalArr = [];

//   let vowel = ["a", "e", "i", "o", "u"];

//   for (let i = 0; i < newArr.length; i++) {
//     let el = newArr[i];
//     for (let j = 0; j < vowel.length; j++) {
//       const element = vowel[j];

//       if (el === element) {
//         el = vow;
//       }
//     }
//     finalArr.push(el);
//   }
//   return finalArr.join("");
// }

// console.log(
//   vowelChange(
//     "hannah hannah bo-bannah banana fanna fo-fannah fee, fy, mo-mannah. hannah!",
//     "i"
//   )
// );

// function sum(digits) {
//   let sum = 0;
//   if (digits == undefined) return ""
//   if (digits==undefined)
//     return ''
//   for (let i = 0; i < digits.length; i++) {
//     const element = digits[i];
//     sum += parseInt(element);
//   }
//   return digits.split("").join(" + ") + " = " + sum;
// }
// console.log(sum(undefined));

// function smallestProduct(arr) {
//   // Code goes here
//   const sums =[]
// for (let i = 0; i < arr.length; i++) {
//   let sum =1
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//     sum*=arr[i][j]
//     console.log(sum);
//   }
//  sums.push(sum)
// }
// let min = sums[0]

// for (let k = 0; k < sums.length; k++) {
//   const element = sums[k];
//   if (min > element) {
//     min = element
//   }
// }
// return min

// }
// console.log((smallestProduct([[3, 2,6], [0, 2, 1], [7, 8]])));

// function halvingSum(n) {
//   finalArr = [];
//   let finalSum=0
//   while (n > 0) {
//     console.log(n);
//      finalArr.push(n);
//     n=parseInt(n/2)
//   }
//   let finalRes = finalArr.reduce((sum,item)=>sum+=item,0)
//   return finalRes
// }

// console.log(halvingSum(25));

// function sumCubes(n) {
//   const finalArr = [];
//   let suma = 0
//   for (let i = 1; i <= n; i++) {
//     console.log(i);
//     finalArr.push(Math.pow(i,3));
//     suma += Math.pow(i,3)
//   }
//   // console.log(finalArr);
//   // return finalArr.reduce((sum,item)=>sum +=item,0)
//   return suma
// }

// console.log(sumCubes(2));

// function factorial(n) {
//   let sum = 1;
//   while (n > 0) {
//     console.log(n);
//     sum *= n;
//     n--;
//   }
//   return sum;
// }
// console.log(factorial(4)); //4*3*2*1

// function comp(array1, array2) {
//   let squaredArr = [];
//   for (let i = 0; i < array1.length; i++) {
//     const element = array1[i];

//     squaredArr.push(Math.pow(element, 2));
//   }
//   console.log(squaredArr);

//   const found = squaredArr.some((r) => {
//     console.log(array2.includes(r));
//     return array2.includes(r);
//   });

//   return found;
// }

// console.log(
//   comp(
//       []
//     ,[],
//   )
// );

// function disemvowel(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     let final= str.split("").filter((el)=>{
//         return !vowels.includes(el)
//     })
//     return final.join("")
// }

// console.log(disemvowel("This website is for losers LOL!"));

// function feast(beast, dish) {
//  return   beast[0] == dish[0] && beast[beast.length-1] === dish[dish.length-1]
// }

//     console.log(feast("great blue heron", "garlic naan"));

// function twoSort(s) {
//   let el = "";
//   for (let i = 0; i < 3; i++) {
//     const element = s[i];
//     el +=   element + "***";
//   }
//   return el;
// }

// console.log(twoSort("sad"));

// function switcheroo(x) {
//   //  let final = x.split("")
//   //  console.log(final);
//   //  let change =[]
//   //  for (let i = 0; i < final.length; i++) {
//   //      const element = final[i];
//   //     if (element == "a") {
//   //         change.push("b")
//   //     }
//   //     else if (element == "b") {
//   //         change.push("a")
//   //     }else{
//   //         change.push(element)
//   //     }

//   //  }
//   //  return change.join("")
//------------------------OR-------------------

//   console.log([...x]);
//   return [...x].map((el) => (el == "a" ? "b" : el == "b" ? "a" : el)).join("");
// }

// console.log(switcheroo("aaabcgg"));

// function flyBy(lamps, drone){
//     return [...lamps].map((el,i)=>i<drone.length?"0":"x")
// }

// console.log(flyBy('xxxxxx', '==T'));

// function sabb(s, val, happiness) {
//   let words = "sabbatical";

//   sumLetters = 0;
//   for (let i = 0; i < s.length; i++) {
//     const lettersS = s[i];
//     if (words.includes(lettersS)) {
//       sumLetters++;
//     }
//   }

//   return sumLetters + val + happiness > 22
//     ? "Sabbatical! Boom!"
//     : "Back to your desk, boy.";
// }

// console.log(sabb("Can I have a sabbatical?", 5, 5));

// function alphabetWar(fight) {
//   let left = { w: 4, p: 3, b: 2, s: 1 };
//   let right = { m: 4, q: 3, d: 2, z: 1 };
//   let rightSum = 0;
//   let leftSum = 0;
//   for (let i = 0; i < fight.length; i++) {
//     const element = fight[i];

//     if (element == "m" || element == "q" || element == "d" || element == "z") {
//       rightSum += right[element];
//     }
//     if (element == "w" || element == "p" || element == "b" || element == "s") {
//       leftSum += left[element];
//     }
//   }

//  return rightSum > leftSum?"Right side wins!":leftSum>rightSum?"Left side wins!":"Let's fight again!"
// }

// console.log(alphabetWar(""));

// function middleMe(N, X, Y) {
//   let finalScore = N / 2;
//   if (N % 2 !== 0) {
//     return X;
//   }

//   let finalString = "";
//   for (let i = 0; i < finalScore; i++) {
//     finalString += Y;
//   }
//   return finalString + X + finalString;
// }

// console.log(middleMe(17, "z", "#")); //, '#########z#########'

// function filter_list(l) {
//   return l.filter((item) => item === Number(item));
// }

// console.log(filter_list([1, 2, "1", "123", 123]));

// function strong(n) {
//   let sum = 1;
//   //i-3 s-3 i-2 s6 i1 s6
//   for (let i = n; i > 0; i--) {
//     sum = sum * i;
//     console.log(sum);
//   }
//   return sum;
// }
// strong(3);

// function generateRange(min, max, step) {
//   let final = [];
//   for (let i = min; i <= max; i+=step) {
//     final.push(i)
//   }
//   return final;
// }

//console.log(generateRange(2, 10, 2));

// function simpleMultiplication(number) {
//  return number %2===0? number*8:number*9
// }
// console.log(simpleMultiplication(3));
// function removeChar(str) {
//   let final =""
//   for (let i = 1; i < str.length-1; i++) {
//     const element = str[i];
//      final += element
//   }
//   return final
// }

// console.log(removeChar("eloquent"));

// function descendingOrder(n) {
//   const reverse = n
//     .toString()
//     .split("")
//     .sort((a, b) => b - a)
//     .join("");
//   return Number(reverse);
// }

// console.log(descendingOrder(1021));

// function nbYear(p0, percent, aug, p) {
//   //1000 + 1000 * 0.02 + 50 => 1070

//   let totalYears = 0;

//   const getNextPopulation = (current) =>
//     current + (current * percent) / 100 + aug;

//   while (p0 <= p) {
//     p0 = getNextPopulation(p0);
//     totalYears++;
//   }
//   return totalYears++;
// }

// console.log(nbYear(1500, 5, 100, 5000));

// function divisors(integer) {
//   let final = [];
//   for (let i = 2; i < integer; i++) {
//     if (integer % i === 0) {
//       final.push(i);
//     }
//   }
//   return final.length > 0 ? final : `${integer} is prime`;
//   return final;
// }

// console.log(divisors(12));

// function squareDigits(num) {
//   let a = num.toString();
//   let sum = [];
//   for (let i = 0; i < a.length; i++) {
//     const element = +a[i];
//     sum.push(element * element);
//   }

//   return +sum.join("");
// }

// console.log(squareDigits(345), 9414);

// function printerError(s) {
//   let count = 0;

//   for (let i = 0; i < s.length; i++) {
//     const element = s[i];

//     if (element > "m") {
//       count++;
//     }
//   }
//   return `${count}/${s.length}`;
// }
// var s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
// console.log(printerError(s), "3/56");

// function SeriesSum(n) {
//   let a = 1;
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += 1 / a;
//     a += 3;
//     console.log(a);
//   }
//   return sum.toFixed(2);
// }

// console.log(SeriesSum(5), "1.57");

// var capitals = function (word) {
//   let final = [];
//   for (let i = 0; i < word.length; i++) {
//     const element = word[i];
//     if (element.toUpperCase() === element) {
//       final.push(i);
//     }
//   }
//   return final;
// };
// console.log(capitals("CodEWaRs"), [0, 3, 4, 6]);

// const binaryArrayToNumber = (arr) => {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//      let element = arr[i];
//     count += (2**(arr.length-1-i)*element)
//   }
//   return count;
// };

// console.log(binaryArrayToNumber([1,0,1]), 15);

// function friend(friends) {
//   return friends.filter((item) => item.length === 4);
// }

// console.log(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);

// const sequenceSum = (begin, end, step) => {
//   let sum = 0;
//   for (let i = begin; i <= end; i += step) {
//     sum += i;
//   }
//   return sum;
// };

// console.log(sequenceSum(2, 6, 2), 12);

// function amaroPlan(pirateNum) {
//   let finalArr = [];
//   const totalGold = pirateNum * 20;

//   for (let i = 0; i < pirateNum; i++) {
//     if (i === 0) {
//       const gold = totalGold - Math.floor((pirateNum - 1) / 2);
//       finalArr.push(gold);
//     } else if (i % 2 === 0) {
//       finalArr.push(1);
//     } else {
//       finalArr.push(0);
//     }
//   }

//   return finalArr;
// }
// console.log(amaroPlan(3), [40, 0]);

// function sortByLength(array) {
//   // Return an array containing the same strings, ordered from shortest to longest
//   return array.sort((a, b) => a.length - b.length);
// }

// function twoOldestAges(ages) {
//   let a = ages.sort((a, b) => b - a);
//   return [a[1], a[0]];
// }

// console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));

// function solution(nums) {
//   if (nums === null) {
//     return [];
//   }
//   return nums.sort((a, b) => a - b);
// }

// console.log(solution(null));

// function openOrSenior(data) {
//   let final = [];
//   for (let i = 0; i < data.length; i++) {
//     const element = data[i];
//     console.log(element);

//     console.log(element);
//     if (element[0] >= 55 && element[1] > 7) {
//       final.push("Senior");
//     } else {
//       final.push("Open");
//     }
//   }
//   return final;
// }

// console.log(
//   openOrSenior([
//     [45, 12],
//     [55, 21],
//     [19, -2],
//     [104, 20],
//   ])
// );

// function addBinary(a, b) {
//   let c = a + b;
//   return c.toString(2);
// }
// console.log(addBinary(1, 5));

// function calculateYears(principal, interest, tax, desired) {
//   let i = 0;
//   while (principal < desired) {
//     total_interest = principal * interest;
//     interest_tax = total_interest * tax;
//     principal = principal + (total_interest - interest_tax);
//     i++;
//   }

//   return i;
// }

// console.log(calculateYears(1000, 0.05, 0.18, 1100));

// function findShort(s) {
//   let finalWord = s.split(" ").sort((a, b) => a.length - b.length);
//   return finalWord[0].length;
// }

// console.log((findShort("bitcoin take over the world"), 3));

// function findShort(s) {
//   let sArr = s.split(" ");
//   let smalest = sArr[0];
//   for (let i = 0; i < sArr.length; i++) {
//     const element = sArr[i];
//     console.log(element);
//     if (element.length < smalest.length) {
//       smalest = element;
//     }
//   }
//   console.log(smalest);
// }

// console.log((findShort("bitcoin take over the world"), 3));

// function toJadenCase(s) {
//   const words = s.split(" ");
//   let finalWords = "";
//   for (let i = 0; i < words.length; i++) {
//     let element = words[i];
//     finalWords +=" "+ element[0].toUpperCase() +  element.slice(1)
//   }
//   return finalWords.slice(1)
// }
// console.log(toJadenCase("How can mirrors"));

// function toJadenCase(s) {
//   const words = s.split(" ");

//   let final = words.map((item) => item[0].toUpperCase() + item.slice(1));
//   return final.join(" ");
// }
// console.log(toJadenCase("How can mirrors"));

// function solve(s) {
//   let upperCaseNumber = 0;
//   let lowerCaseNumber = 0;

//   console.log(s.toUpperCase());
//   for (let i = 0; i < s.length; i++) {
//     const element = s[i];
//     if (element === element.toUpperCase()) {
//       upperCaseNumber++;
//     } else {
//       lowerCaseNumber++;
//     }
//   }

//   if (upperCaseNumber > lowerCaseNumber) {
//     return s.toUpperCase();
//   } else {
//     return s.toLowerCase();
//   }
// }

// console.log(solve("CODe"), "CODE");

// var isSquare = function (n) {
//   return Math.sqrt(n) % 1 !=0 ? false : true;
// };

// console.log(isSquare(3));

// function median(array) {
//   let a = array.sort((a, b) => a - b);
//   let middleNum = a.length / 2;
//   if (array.length % 2 === 0) {
//     return (a[middleNum] + a[middleNum - 1]) / 2;
//   }
//   return a[Math.floor(middleNum)]
// }

// console.log(median([83, 275, 590]), 2);

// function diffBig2(arr) {

//   for (let i = 0; i < arr.length; i++) {

//    for (let j = 0; j < i; j++) {
//      if (arr[i]>arr[j]) {
//        let element = arr[i];
//        arr[i] =arr[j]
//        arr[j]=element
//      }

//    }
//   }
//   console.log(arr);
//   return arr[0]-arr[1]
// }

// console.log(diffBig2([2,8, 3, 1]), 5);

// function nthChar(words){
//   let finalWord=""
//   for (let i = 0; i < words.length; i++) {
//     const element = words[i];
//     finalWord +=element[i]
//   }
//   return finalWord
//  }

//  console.log(nthChar(['yoda', 'best', 'has']), 'yes');

//These are your super secret characters you will use to make the password super secure

// var number = function (busStops) {
//   let final = 0;
//   for (let i = 0; i < busStops.length; i++) {
//     const element = busStops[i];
//     final += element[0] - element[1];
//   }
//   return final;
// };

// console.log(
//   number([
//     [10, 0],
//     [3, 5],
//     [5, 8],
//   ])
// );

// function alan(x) {
//   let contains = [
//     "Rejection",
//     "Disappointment",
//     "Backstabbing Central",
//     "Shattered Dreams Parkway",
//   ];

//   let final = contains.every((item) => x.includes(item));

//   return final
//     ? "Smell my cheese you mother!"
//     : "No, seriously, run. You will miss it. ";
// }
// console.log(
//   alan([
//     "Rejection",
//     "Disappointment",
//     "Backstabbing Central",
//     "Exeter",
//     "Shattered Dreams Parkway",
//     "Belgium",
//     "London",
//   ])
// );

// function oddOrEven(array) {
// if (array.length ===0) {
//   return "even"
// }
//    let final= array.reduce((sum, item) => sum + item);

//    return final %2 === 0?"even":"odd"
// }

// console.log(oddOrEven([]));

// function filter_list(l) {
//   return l.filter(item=>Number(item)>-1&& item!==item.toString());
// }

// console.log(filter_list([1, "a", "123", 0, 15]));

// function bump(x) {
//   let sumN = 0;
//   let sumUnderscore = 0;
//   for (let i = 0; i < x.length; i++) {
//     const element = x[i];
//     if (element === "n") {
//       sumN++;
//     } else {
//       sumUnderscore++;
//     }
//   }
//   return sumN > 15 ? "Car Dead" : "Woohoo!";
// }

// console.log(bump("______nn__nn_nnn"));

// var FilterString = function (value) {
//   return +[...value].filter((item) => !isNaN(item)).join("");
// };

// console.log(FilterString("aa1bb2cc03dd"), 123);

// function makeString(s) {
//   let finalString = "";
//   let stringArr =s.split(" ");
//   for (let i = 0; i < stringArr.length; i++) {
//     const element = stringArr[i];
//     finalString +=element[0]
//   }
//   return finalString
// }

//console.log(makeString("sees eyes xray yoat"), "sexy");

// function makeString(s) {
//   let finalString = "";
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === " ") {
//       finalString += s[i + 1];
//     }
//   }
//   return s[0] + finalString;
// }
// console.log(makeString("sees eyes xray yoat"), "sexy");

// function sc(screws) {
//   let totalTime = 1;

//   for (let i = 0; i < screws.length - 1; i++) {
//     const element = screws[i];
//     if (screws[i] === screws[i + 1]) {
//       totalTime += 2;
//     } else {
//       totalTime += 7;
//     }
//   }
//   return totalTime;
// }

// console.log(sc("-+-+-----------"), 49);

// function solve(nums, div) {
//   return nums.map((item) => item + (item % div));
// }

// console.log(
//   (solve([2, 7, 5, 9, 100, 34, 32, 0], 3), [4, 8, 7, 9, 101, 35, 34, 0])
// );
// function getEvenNumbers(numbersArray){
//   return numbersArray.filter((item)=>item %2===0)
// }

// function removeDuplicateWords(s) {
//   //   let sArr = s.split(" ")
//   // return [...new Set(sArr)].join(" ")

//   // let sArr = s.split(" ");
//   // let final = [];
//   // for (let i = 0; i < sArr.length; i++) {
//   //   const element = sArr[i];
//   //   if (!final.includes(element)) {
//   //     final.push(element)
//   //   }
//   // }
//   // return final.join(" ")

// }

// console.log(
//   removeDuplicateWords(
//     "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
//   ),
//   "alpha beta gamma delta"
// );

// function XO(str) {
//   let x = 0;
//   let o = 0;

//   for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     if (element == "x" || element == "X") {
//       x += 1;
//     } else if (element == "o" || element == "O") {
//       o += 1;
//     }
//   }
//   return x == o;
// }

// console.log(XO("zzzoo"), true);
// console.log(XO("xxOo"), true);
// console.log(XO("xxxm"), false);
// console.log(XO("Oo"), false);
// console.log(XO("ooom"), false);

// function longest(s1, s2) {
//   return [...new Set(s1 + s2)].sort().join("");
// }

// console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty");

// function stray(numbers) {

//   if (numbers[0] !== numbers[1] &&numbers[0] !== numbers[2] ) {
//     return numbers[0]
//   }

//     for (let i = 0; i < numbers.length; i++) {

//   let first = numbers[0]
//       if (first !== numbers[i] ) {
//         return numbers[i]
//       }
//     }

// }

// console.log(stray([17,-1654, 17, 17, 17, 17, 17,]), 2);

// const dontGiveMeFive = (start, end) => {
//   let fullArr = [];
//   for (let i = start; i <= end; i++) {
//     fullArr.push(i);
//   }
//   const stringArr = fullArr.map((item) => item.toString());

//   let arrWithOutFive = stringArr.filter((item) => !item == item.includes("5"));

//   return arrWithOutFive.length;
// };

// console.log(dontGiveMeFive(10, 19));

// function minMax(arr){
//   let finalArr = arr.sort((a,b)=>a-b)
//   return ([finalArr[0],finalArr[finalArr.length-1]])
// }

// console.log(minMax([-516338,5115514554,-240234,445559]));

// function isIsogram(str) {
//   let a = str.toUpperCase();
//   let b = [...new Set(a)];
//   return a === b;
// }

// function isIsogram(str) {
//     let a = str.toUpperCase();
//     for (let i = 0; i < str.length; i++) {

//         for (let j = 1; j < str.length; j++) {
//             if (str[i]===str[j]) {
//                 return false
//             }

//         }
//     }
//     return true
//   }

// console.log(isIsogram("aaaa"), true);

// function validateWord(s)
// {
//   let finalObj={}
//   let arr =[]

//   for (let i = 0; i < s.length-1; i++) {
//      if (s[i]==s[i+1]) {
//          arr.push(s[i])
//      }
//   }
//     console.log(arr);
//   return finalObj
// }

// console.log(validateWord("abcabc"));

// function mergeArrays(a, b) {
//   let finalArr = [];
//   let lengthA = a.length;
//   let lengthB = b.length;
//   let c = lengthB;
//   if (lengthA > lengthB) {
//     c = lengthA;
//   }

//   console.log(c);
//   for (let i = 0; i < c; i++) {
//     const element = a[i];
//     finalArr.push(element, b[i]);
//   }
//   return finalArr.filter((item) => item !== undefined);
// }

// console.log(mergeArrays([1, 2, 3], ["a", "b", "c", "d", "e"]));

// var isMonotone = function (arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isMonotone([1, 2, 3, 3, 4, 5]));

// const sake =(...numbers)=>{
//   console.log(numbers);
// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   if (element !==Number(element)) {
//     return false
//   }
// }
// return true
// }

// console.log(sake(1,3));

// var removeVowels = function (str) {
//   //code here
//   let vowels = ["a", "e", "i", "o", "u"];

//   return str
//     .split("")
//     .filter((item) => !vowels.includes(item))
//     .join("");
// };

// console.log(removeVowels("aeiousss"), "");

// var maxRedigit = function (num) {
//   let b = num
//     .toString()
//     .split("")
//     .sort((a, b) => b - a)
//     .map(Number)
//     .join("");
//   return b.length == 3 ? Number(b) : null;
// };

// console.log(maxRedigit(123), 321);

// const divisions = (n, divisor) => {
//   let i = 0;
//   while (n >= divisor) {
//     i += 1;
//     n = n / divisor;
//   }
//   return i;
// };

// console.log(divisions(6, 2), 2);
// console.log(divisions(100, 2), 6);

// function save(sizes, hd) {

//   let count =0
//   let final =0

//   for (let i = 0; i < sizes.length; i++) {
//     const element = sizes[i];
//     count +=element
//     if (count <=hd) {
//       final++
//     }
//   }
//   return final
// }

// console.log(save([4, 4, 4, 3, 3], 12));

// function generateIntegers(m, n) {
//   finalArr = [];

//   for (let i = m; i <= n; i++) {
//     finalArr.push(i);
//   }
//   return finalArr;
// }

// console.log(generateIntegers(2, 5), [2, 3, 4, 5]);

// function flattenAndSort(array) {
//   return [].concat(...array).sort((a,b)=>a-b
// }

// console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);

// function onesComplement(n) {
//   let complementNumber = ""
//   for (let i = 0; i < n.length; i++) {
//     if (n[i] ==="1") {
//       complementNumber +="0"
//     }else{
//       complementNumber +="1"
//     }
//   }
//   return complementNumber
// };

// console.log(onesComplement("1101"), "0010");

// function BinaryPyramid(m, n) {
//   let sum = 0;
//   for (let i = m; i <= n; i++) {
//     sum += parseFloat(i.toString(2));
//   }
//   return sum.toString(2);
// }

// console.log(BinaryPyramid(1, 4), "1111010");

// function incrementer(nums) {
//   let finalArr = [];
//   for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     finalArr.push(element + (i + 1));
//     if (finalArr[i] > 9) {
//       finalArr[i] %= 10;
//     }
//   }
//   return finalArr;
// }

// console.log(
//   incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]),
//   [2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2]
// );

// function missingNo(nums) {
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length; i++) {
//     if (i !== nums[i]) return i;
//   }
// }

// let arr1 = [
//   9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18,
//   71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84,
//   94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46,
//   19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58,
//   55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99,
//   16,
// ]; // 26
// console.log(missingNo(arr1), 26);

// var isSquare = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (Math.sqrt(element) % 1 != 0) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isSquare([1, 16]), true);

// function rowWeights(array) {
//   let finalArr = [];
//   let sumEven = 0;
//   let sumOdd = 0;
//   for (let i = 0; i < array.length; i++) {
//     let element = array[i];
//     if (i % 2 == 0) {
//       sumEven += element;
//     } else {
//       sumOdd += element;
//     }
//   }
//   finalArr.push(sumEven, sumOdd);
//   return finalArr;
// }

// console.log(rowWeights([50, 60, 70, 80]), [120, 140]);

// function inviteMoreWomen(L) {
//   return L.reduce((sum, people) => sum + people > 0);
// }

// console.log(inviteMoreWomen([-1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1]), true);

// function evaporator(content, evap_per_day, threshold) {
//   //content - koliko ima ml
//   //evapPerDay koliko gubi dnevno-u procentima//
//   //threshold ostatak parfema koji ne moze da se koristi

//   let days = 0;

//   const thresholdPercentage = threshold / 100;
//   const evaporatorPercentage = evap_per_day / 100;
//   const reminder = thresholdPercentage * content;

//   while (content >= reminder) {
//     content -= evaporatorPercentage * content;
//     days++;
//   }
//   return days;
// }

// console.log(evaporator(10, 10, 10), 22);

function maskify(cc) {
  // let finalString = "";
  // let first = cc.slice(0, cc.length - 4).length;
  // if (cc.length > 3) {
  //   finalString = "#".repeat(first) + cc.slice(-4);
  //   return finalString;
  // }
  // return cc;
}

// console.log(maskify("4556364607935616"), "############5616");

// function getSum(a, b) {
//   if (a > b) {
//     temp = a;
//     a = b;
//     b = temp;
//   }

//   let sum = 0;
//   for (let i = a; i <= b; i++) {
//     console.log(i);
//     sum += i;
//   }
//   return sum;
// }

// console.log(getSum(0, -1), 2);

// function solution(str, ending){
//   return str.endsWith(ending)
// }

// console.log(solution('abcde', 'cde'), true);

// function arithmetic(a, b, operator) {
//   let operations = {
//     add: a + b,
//     subtract: a - b,
//     multiply: a * b,
//     divide: a / b,
//   };

//   return operations[operator];
// }
// console.log(arithmetic(8, 2, "subtract"), 6);

// var gimme = function (inputArray) {
//   const middle = [...inputArray].sort((a, b) => a - b)[1];

//   for (let i = 0; i < inputArray.length; i++) {
//     const element = inputArray[i];
//     if (element == middle) {
//       return i;
//     }
//   }
// };

// console.log(gimme([2, 3, 1]), 0, "Finds the index of middle element");

// function roundToNext5(n) {
//   return Math.ceil(n / 5) * 5;
// }

// console.log(roundToNext5(7), 125);

// function findSum(n) {
//   let final = 0;
//   for (let i = 0; i <= n; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       final += i;
//     }
//   }
//   return final;
// }

// console.log(findSum(10), 33);

// function maxMultiple(divisor, bound) {
//   for (let i = bound; i > 0; i--) {
//     if (i % divisor == 0) {
//       return i;
//     }
//   }
// }

// console.log(maxMultiple(2, 7), 6);

// function factorial(n) {
//   let sum = 1;
//   if ( n > 12 || n<0) throw new Error('RangeError!')
//   for (let i = n; i > 0; i--) {
//     sum *= i;
//   }
//   return sum;
// }
// console.log(factorial(41), 6, "factorial for 3 is 6");

// function reverseLetter(str) {
//   return str
//     .replace(/[^a-z]/gi, "")
//     .split("")
//     .reverse()
//     .join("");
// }

// console.log(reverseLetter("ultr53o?n"), "nortlu");

// function sumDigits(number) {
//   let sum = 0;
// return Math.abs(number).toString().split("").map(Number).reduce((sum,item)=>sum+item)
//   for (let i = 0; i < num.length; i++) {
//     sum += +Math.abs(num[i]);
//   }
//   return sum;
// }

// console.log(sumDigits(-32), 5);

// function checkExam(array1, array2) {
// good luck
// let finalScore = array1.reduce((score, item, i) => {
//   if (item === array2[i]) {
//     score += 4;
//   } else if (array2[i] == "") {
//     score += 0;
//   } else if (item !== array2[i]) {
//     score -= 1;
//   }
//   return score
// }, 0);
// return finalScore<0?0:finalScore
//---------------------------------------2solution-------------------------
// let score = 0;
// for (let i = 0; i < array1.length; i++) {
//   const element = array1[i];
//   if (array1[i] === array2[i]) {
//     score += 4;
//   } else if (array2[i] == "") {
//     score += 0;
//   } else if (array1[i] !== array2[i]) {
//     score -= 1;
//   }
// }
// if (score < 1) {
//   return 0;
// }
// return score;
// }

// console.log(checkExam(["c","a","b","c","b"], ["a", "c", "b", "",""]), 2);
// console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
// console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]), 0);

// function capitalize(s) {
//   let word1 = "";
//   let word2 = "";

//   for (let i = 0; i < s.length; i++) {
//     let element = s[i];
//     if (i % 2 == 0) {
//      element = element.toUpperCase();
//     }

//     word1 += element;
//   }
//   for (let i = 0; i < s.length; i++) {
//     let element = s[i];
//     if (i % 2 != 0) {
//       element = element.toUpperCase();
//     }

//     word2 += element;
//   }

//   return [word1,word2]
// }

// console.log(capitalize("abcdef"), ["AbCdEf", "aBcDeF"]);

// function minValue(values){
//  return a = +[...new Set(values)].sort((a,b)=>a-b).join("")
// }

// console.log(minValue([4, 7, 5, 7]), 457);

// function inAscOrder(arr) {
//   let a = [...arr].sort((a, b) => a - b);

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (arr[i] !== a[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(inAscOrder([1, 2, 4, 7, 19]));

// function removeUrlAnchor(url) {
//   console.log(url[0]);
//   let finalUrl = "";
//   let i = 0;
//   if (!url.includes("#")) {
//     return url
//   }
//   while (url[i] != "#") {
//     finalUrl += url[i];
//     i++;
//   }
//   return finalUrl;
// }
// console.log(removeUrlAnchor("www.codewars.comabout"), "www.codewars.com");

// function sumOfMinimums(arr) {
//   let sum = [];

//   for (let i = 0; i < arr.length; i++) {
//     let a = arr[i].sort((a, b) => a - b);
//     sum.push(a[0]);
//   }
//   return sum.reduce((sum, item) => sum + item, 0);
// }

// console.log(
//   sumOfMinimums([
//     [7, 9, 8, 6, 2],
//     [6, 3, 5, 4, 3],
//     [5, 8, 7, 4, 5],
//   ]),
//   9
// );

// function averages(numbers) {
// if (!numbers) {
//   return []
// }
// let final =[]
//   for (let i = 0; i < numbers.length-1; i++) {
//     const element = numbers[i];
//     final.push(((numbers[i] + numbers[i+1])/2))
//   }
// return final
// }

// console.log(averages([2,2,2,2]), [2, 4, 3, -4.5]);

// function countDevelopers(list) {
//   let count = 0;
//   for (let i = 0; i < list.length; i++) {
//     const element = list[i];
//     if (element.continent === "Europe" && element.language == "JavaScript") {
//       count += 1;
//     }
//   }

//   return count;
// }
// var list1 = [
//   {
//     firstName: "Noah",
//     lastName: "M.",
//     country: "Switzerland",
//     continent: "Europe",
//     age: 19,
//     language: "JavaScript",
//   },
//   {
//     firstName: "Maia",
//     lastName: "S.",
//     country: "Tahiti",
//     continent: "Oceania",
//     age: 28,
//     language: "JavaScript",
//   },
// ];

// console.log(countDevelopers(list1));

// function nbDig(n, d) {
//   // your code
//   let finalArr = [];

//   let count = 0;
//   for (let i = 0; i <= n; i++) {
//     finalArr.push(Math.pow(i, 2));
//   }
//   let a = finalArr.map(String).filter((item) => item.includes(d));
//   let b = a.join("");
//   for (let i = 0; i < b.length; i++) {
//     const element = b[i];
//     if (element == d) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(nbDig(10, 1), 4);

// function f(n) {
//   return n % 1 == 0 && n > 0 ? n * (n / 2) + n / 2 : false;
// }

// console.log(f(1000));

// function mygcd(x, y) {
//   let z;
//   if (y > x) {
//     z = x;
//     x = y;
//     y = z;
//   }

//   if (x % y === 0) {
//     return y;
//   }

//   let half = Math.floor(y / 2);

//   for (let i = half; i > 0; i--) {
//     if (x % i == 0 && y % i === 0) {
//       return i;
//     }
//   }
// }
// console.log(mygcd(20, 160), 1);

// function lastDigit(n, d) {
//   console.log(n);
//   if (d<=0) return []
//   return n.toString().split("").slice(-d).map(Number)
// }

// console.log(lastDigit(123767,-4),[3,7,6,7]);

// function cookingTime(eggs) {
//   let i = 0;
//   let minutes =0
//   while (i < eggs) {
//     i += 8;
//     minutes ++
// console.log(i);
//   }
//   return minutes *5
// }

// console.log(cookingTime(17), 10, "10 eggs");

function elevatorDistance(array) {
  let reducedArr = [];

  for (let i = 0; i < array.length - 1; i++) {
    reducedArr.push(array[i] - array[i + 1]);
  }

  return reducedArr.reduce((sum, item) => sum + Math.abs(item), 0);
}

console.log(elevatorDistance([5, 2, 8]), 9);
