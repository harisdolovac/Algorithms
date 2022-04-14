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

// function elevatorDistance(array) {
//   let reducedArr = [];

//   for (let i = 0; i < array.length - 1; i++) {
//     reducedArr.push(array[i] - array[i + 1]);
//   }

//   return reducedArr.reduce((sum, item) => sum + Math.abs(item), 0);
// }

// console.log(elevatorDistance([5, 2, 8]), 9);

// function singleDigit(n) {
//   while(n>9){
//    n = n.toString(2).split(0).join("").length
//   }
// return n
// }

// console.log(singleDigit(9999), 8);

//

// function countRedBeads(n) {
// if (n<1)return 0
// return n*2-2
// }

// console.log(countRedBeads(5), 8);  // 2-2 3-4 4-6 5-8 6-10

// function cubeSum(n, m) {
//   let a = 0;
//   if (m < n) {
//     a = m;
//     m = n;
//     n = a;
//   }

//   let sum = 0;
//   for (let i = n + 1; i <= m; i++) {
//     console.log(i);
//     sum += Math.pow(i, 3);
//   }
//   return sum;
// }

// console.log(cubeSum(3, 2), 225, "cubeSum(5,0)");

// function squaresNeeded(grains){
//   //your code here
//   let grain =0
//   for (let i = 1; i <= grains; i*=2) {
//     grain ++
//   }
//   return grain
// }

// console.log(squaresNeeded(4), 3);

// function sumTriangularNumbers(n) {
//   let sum = 0,
//     total = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += i * 1;
//     total += sum;
//   }
//   return total;
// }

// function square(number) {
//   let count = 1;
//   if (number == 1) return 1;
//   for (let i = 2; i <= number; i++) {
//     count += count;
//   }
//   return count;
// }
// console.log(square(3), 8);

// function validateWord(s) {
//   let finalObj = {};
//   s = s.toLowerCase();
//   for (let i = 0; i < s.length; i++) {
//     const element = s[i];
//     finalObj[element] = (finalObj[element] || 0) + 1;
//   }
//   return [...new Set(Object.values(finalObj))].length == 1 ? true : false;
// }
// console.log(validateWord("Abcabaccb"));

// function wordsToMarks(string) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let alphabetObj = {};
//   let sum = 0;

//   for (let i = 0; i < alphabet.length; i++) {
//     const element = alphabet[i];
//     alphabetObj[alphabet[i]] = i + 1;
//   }

//   for (let i = 0; i < string.length; i++) {
//     sum += alphabetObj[string[i]];
//   }
//   return sum;
// }

// console.log(wordsToMarks("attitude"), 100);

// function wordsToMarks(string) {
//   let sum = 0;

//   for (let i = 0; i < string.length; i++) {
//     console.log(i);
//     sum += string.charCodeAt(i) - 96;
//   }
//   return sum;
// }

// console.log(wordsToMarks("attitude"), 100);

// function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
//   let a = [...arguments].map((i) => i * i);
//   a = a.reduce((sum, item) => {
//     return sum + item;
//   }, 0);

//   return parseInt(Math.sqrt(a) / 2);
// }
// console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45), 86);

// function isPronic(n) {
//   for (let i = 0; i <= n; i++) {
//     if (i * (i + 1) == n) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(isPronic(5));

// function digits(n) {
//   // code goes here
//   return n.toString().length
// }

// console.log(digits(5));

// function isNarcissistic(n) {
//   let finalNum = n.toString();

//   let sum = [];

//   for (let i = 0; i < finalNum.length; i++) {
//     sum.push(Math.pow(finalNum[i], finalNum.length));
//   }
//   return sum.reduce((sum, item) => sum + item) == n;
// }

// console.log(isNarcissistic(153));

// function reverseBits(n) {
//   let a = n.toString(2).split("").reverse().join("");
//   return parseInt(a, 2);
// }

// console.log(reverseBits(417), 267);

// var greet = function (name) {
//   let firstLetter = name[0].toUpperCase();

//   let final = "";

//   for (let i = 1; i < name.length; i++) {
//     final += name[i].toLowerCase();
//   }
//   return "Hello" + " " + firstLetter + final + "!";
// };
// console.log(greet("riley"), "Hello Riley!");

// function minimumSteps(numbers, value) {
//   let a = numbers.sort((a, b) => a - b);
//   console.log(a);

//   let sum = 0;
//   let i = 0;

//   while ( sum +a[i]< value) {
//     sum += a[i];
//     i++;
//     console.log(sum);

//   }

//   return i;
// }

// console.log(minimumSteps([8, 9, 10, 4, 2], 23), 3);

// function specialNumber(n) {
//   let consist = [0, 1, 2, 3, 4, 5, 6];

//   n = n.toString().split("").map(Number);

//   return n.every((item) => consist.includes(item)) ? "Special!!" : "NOT!!";
// }

// console.log(specialNumber(6), "Special!!");

// function wordToBin(str) {
//   let finalArr = [];

//   for (let i = 0; i < str.length; i++) {
//     finalArr.push("0" + str[i].charCodeAt().toString(2));
//   }
//   return finalArr;
// }

// console.log(wordToBin("man"), ["01101101", "01100001", "01101110"]);

// function baseFinder(seq) {
//   //Good luck!

//   return new Set(seq.join("").split("")).size;
// }

// console.log(baseFinder([12, 3, 23]));

// function isCoprime(x, y) {
//   let first = [];
//   let secund = [];

//   for (let i = 0; i <= x; i++) {
//     if (x % i === 0) {
//       first.push(i);
//     }
//   }
//   for (let j = 0; j <= y; j++) {
//     if (y % j === 0) {
//       secund.push(j);
//     }
//   }

//   for (let k = first.length - 1; k >= 0; k--) {
//     const element = first[k];
//     if (secund.includes(element)) {
//       return element === 1
//     }
//   }
// =
// }

// console.log(isCoprime(12, 39), true, "isCoprime(20, 27)");

// var howManyYears = function (date1, date2) {
//   let firstDate = date1.slice(0, 4);
//   let secoundDate = date2.slice(0, 4);
//   return Math.abs(secoundDate - firstDate);
// };

// console.log(howManyYears("1997/10/10", "2015/10/10"), 18);

// const add = (a) => (b) => {
//   return a + b;
// };

// console.log(add(14)(25), 39);

// function highestValue(a, b) {
//   const final = (str) => {
//     return [...str].reduce((sum, item) => sum + item.charCodeAt(), 0);
//   };

//   return final(b) > final(a) ? b : a;
// }

// console.log(
//   highestValue("AaBbCcXxYyZz0189", "KkLlMmNnOoPp4567"),
//   "KkLlMmNnOoPp4567"
// );

// function cubeTimes(times) {
//   let sorted = times.sort((a, b) => a - b);

//   let average = 0;

//   for (let i = 1; i < sorted.length - 1; i++) {
//     average += sorted[i];
//   }

//   return [+(average / 3).toFixed(2), sorted[0]];
// }
// console.log(cubeTimes([9.5, 7.6, 11.4, 10.5, 8.1]), [9.37, 7.6]);

// function majority(arr) {
//   let finalObj = {};

//   for (let i = 0; i < arr.length; i++) {
//     finalObj[arr[i]] = (finalObj[arr[i]] || 0) + 1;
//   }

//   for (const key in finalObj) {
//     let element = finalObj[key];
//   }

//   let a = Object.values(finalObj);

//   a.sort((a, b) => b - a);

//   let final = a[0] == a[1] ? null : Math.max(...a);

//   if (final == null) return final;

//   let d = Object.keys(finalObj).find((key) => finalObj[key] === final);

//   return d;
// }

// console.log(majority(["A", "B", "C", "C", "A", "bbbbbb", "z", "z", "C"]), null);

// let SCORES = {
//   A: 100,
//   B: 14,
//   C: 9,
//   D: 28,
//   E: 145,
//   F: 12,
//   G: 3,
//   H: 10,
//   I: 200,
//   J: 100,
//   K: 114,
//   L: 100,
//   M: 25,
//   N: 450,
//   O: 80,
//   P: 2,
//   Q: 12,
//   R: 400,
//   S: 113,
//   T: 405,
//   U: 11,
//   V: 10,
//   W: 10,
//   X: 3,
//   Y: 210,
//   Z: 23,
// };

// function sexyName(name) {
//   let score = 0;
//   name = name.toUpperCase();

//   for (let i = 0; i < name.length; i++) {
//     if (SCORES[name[i]] == undefined) score += 0;
//     else score += SCORES[name[i]];
//   }
//   console.log(score);

//   if (score <= 60) {
//     return "NOT TOO SEXY";
//   } else if (score <= 300) {
//     return "PRETTY SEXY";
//   } else if (score <= 599) {
//     return "VERY SEXY";
//   } else {
//     return "THE ULTIMATE SEXIEST";
//   }
// }

// console.log(sexyName("GUg"), "NOT TOO SEXY");

// const add = (n) => (z) => {
//   return n + z;
// };
// console.log(add(1)(3), 4, "add one to three equals four");

// function getSectionIdFromScroll(scrollY, sizes) {
//   let sum = 0;

//   for (let i = 0; i < sizes.length; i++) {
//     const element = sizes[i];
//     sum += element;
//     if (sum > scrollY) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(getSectionIdFromScroll(300, [300, 200, 400, 600, 100]), 0);

// function xMasTree(n) {
//   let count = 1;
//   let finalArr=[]
//   let sum =0

//   let hashTag = [];

//   for (let i = 1; i <= n; i++) {
//     hashTag.push(count)
//     count = count +2
//   }
//   let underScoreSides =  hashTag[hashTag.length-1]
//   for (let i = 0; i < hashTag.length; i++) {
//     const element = hashTag[i];
//     console.log(element);
//     let underScore = "_"
//     let hash ="#"
//     sum = (underScoreSides - element )/2
//     finalArr.push( underScore.repeat(sum) + hash.repeat(element) + underScore.repeat(sum))
//   }
//   return finalArr.concat(finalArr[0]).concat(finalArr[0])
// }

// console.log(xMasTree(3), ["__#__", "_###_", "#####"]);

// function calcType(a, b, res) {
//   if (a + b == res) return "addition";
//   else if (a * b == res) return "multiplication";
//   else if (a - b == res) return "subtraction";
//   else return "division";
// }

// console.log(calcType(9, 5, 1.8), "division");

// const intDiff = (arr, n) => {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       const element = arr[j];
//       if (Math.abs(arr[i] - arr[j]) - n == 0) {
//         sum++;
//       }
//     }
//   }
//   return sum;
// };

// console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4), 3);

// function getNames(data){
//   return data.map((item)=>item.name)
// }

// var data = [
//   {name: 'Joe', age: 20},
//   {name: 'Bill', age: 30},
//   {name: 'Kate', age: 23}
// ]

// console.log(getNames(data));

// function connotation(str) {
//   let a = str
//     .toLowerCase()
//     .split(" ")
//     .filter((item) => item !== "");
//   let positive = 0;
//   let negative = 0;

//   for (let i = 0; i < a.length; i++) {
//     if (a[i][0].charCodeAt() <= 109) {
//       positive += 1;
//     } else {
//       negative += 1;
//     }
//   }

//   return positive >= negative;
// }

// console.log(connotation("pvfhzrb zhvr mqq mbpzl grxt ahccpdn geumsx"), true);

// function adjacentElementsProduct(array) {
//   let max = -Infinity;

//   for (let i = 0; i < array.length; i++) {
//     neighbor = array[i] * array[i + 1];
//     if (neighbor > max) {
//       max = neighbor;
//     }
//   }
//   return max;
//   console.log(max);
// }

// console.log(adjacentElementsProduct([1, -15, 10, -5, 9, -3]), 90);

// function maxNumber(n) {
//   return +n
//     .toString()
//     .split("")
//     .sort((a, b) => b - a)
//     .join("");
// }

// console.log(maxNumber(7389), 9873);

// function noOdds(values) {
//   return values.filter((item) => item % 2 === 0);
// }

// console.log(noOdds([0, 1, 2, 3]), [0, 2]);

// function minSum(arr) {
//   let sum = 0;

//   arr = arr.sort((a, b) => a - b);

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i] * arr[arr.length - (i + 1)];
//   }
//   return sum / 2;
// }

// console.log(minSum([12, 6, 10, 26, 3, 24]), 342);

// function remove(s) {
//   s = s.split("!");
//   console.log(s);

//   return s.join("") + "!".repeat(s.length - 1);
// }

// console.log(remove("Hi! Hi!"), "Hi Hi!!");

// function caseUnification(s) {
//   let lowerCase=0
//   let upperCase=0

//   for (let i = 0; i < s.length; i++) {
//     const element = s[i];
//     if (element== element.toLowerCase()) {
//       lowerCase++
//     }else upperCase++
//   }

//   return lowerCase>upperCase?s.toLowerCase():s.toUpperCase()

// }

// console.log(caseUnification("SSAba"),"aba");

// function battle(x, y) {
//   let a = "A".charCodeAt();
//   let z = "Z".charCodeAt();

//   let sumX = 0;
//   let sumZ = 0;

//   for (let i = 0; i < x.length; i++) {
//     const element = x[i];
//     sumX += element.charCodeAt() - 64;
//   }

//   for (let i = 0; i < y.length; i++) {
//     sumZ += y[i].charCodeAt() - 64;
//   }

//   if (sumX > sumZ) {
//     return x;
//   } else if (sumZ > sumX) {
//     return y;
//   } else return " it's a tie.";
// }

// console.log(battle("AAA", "Z"), "Z", "Unfair fight!");

// function passTheDoorMan(word) {
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === word[i + 1]) {
//       return (word[i].charCodeAt() - 96) * 3;
//     }
//   }
// }

// console.log(passTheDoorMan("lettuce"), 60);

// function well(x) {
//   let good = 0;
//   for (let i = 0; i < x.length; i++) {
//     let element = x[i];
//     for (let j = 0; j < element.length; j++) {
//       if (typeof element[j] == "number") {
//         element[j] = element[j].toString();
//       }
//       if (element[j].toLowerCase() === "good") {
//         good++;
//       }
//     }
//   }

//   return good === 0 ? "Fail!" : good < 3 ? "Publish!" : "I smell a series!";
// }

// console.log(
//   well([
//     ["bad", 3, "bad"],
//     ["bad", "goOd", "bad"],
//     ["bad", "bAd", "bad"],
//     ["bad", "bAd", "bad", "goOd"],
//   ]),
//   "Fail!"
// );

// function peak(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     const sumToLeft = arr.slice(0, i).reduce((total, value) => total + value, 0)
//     const sumToRight = arr.slice(i + 1).reduce((total, value) => total + value, 0)
//     if (sumToLeft === sumToRight) return i
//   }
//   return -1
// }

// console.log(peak([1,2,3,5,3,2,1]), 3);

// function decode(message) {
//   let finalArr = [];
//   let finalStr = "";

//   for (let i = 0; i < message.length; i++) {
//     finalArr.push(123 - message[i].charCodeAt() + 96);
//   }
//   console.log(message);
//   for (let i = 0; i < finalArr.length; i++) {
//     let element = finalArr[i];
//     if (element == 187) {
//       element = 32;
//     }
//     finalStr += String.fromCharCode(element);
//   }
//   return finalStr;
// }

// console.log(decode("asvool"), "zhello");

// function validatePIN(pin) {
//   if (pin.length !== 4 && pin.length !== 6) {
//     return false;
//   }
//   return   pin.replace(/[^0-9]/g, "").length == pin.length
// }

// console.log(validatePIN("-41.486"), false);

// function reverseNumber(n) {
//   console.log(n[0]);
//   n = n.toString().split("").reverse();

//   if (n[n.length - 1] == "-") {
//     n.pop();
//     return parseInt("-" + n.join(""));
//   }
//   return n.join("")
// }

// console.log(reverseNumber(-123), -321);

// var SequenceSum = (function () {
//   function SequenceSum() {}

//   SequenceSum.showSequence = function (count) {
//     let a = 0;

//     let finalStr = "";

//     for (let i = 0; i <= count; i++) {
//       a += i;
//       finalStr += i + "+";
//     }

//     return `${finalStr.slice(0, -1)} = ${a}`;
//   };

//   if (count == 0) {
//     return "0=0";
//   }

//   if (count < 0) {
//     return `${count}<0`;
//   }
//   return SequenceSum;
// })();

// console.log(SequenceSum.showSequence(6));

// function solve(arr) {
//   let finalArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     const element = arr[i].toLowerCase();
//     for (let j = 0; j < element.length; j++) {
//       if (element[j].charCodeAt() - 96 == j + 1) {
//         count++;
//       }
//     }
//     finalArr.push(count);
//   }

//   return finalArr;
// }

// console.log(solve(["abcoe", "abed", "abffff"]), [4, 3, 3]);

// function cubeOdd(arr) {
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];

//   if (isNaN(element)) {
//     return undefined
//   }
//   if (element % 2 !== 0) {
//     sum += Math.pow(element, 3);
//   }
// }

//   return sum;
// }

// console.log(cubeOdd([1, 2, 3, 4,"s"]), 28);

// function largestPairSum(numbers) {
//   let a = numbers.sort((a, b) => b - a);
//   return a[0] + a[1];
// }
// console.log(largestPairSum([10, 14, 2, 23, 19]), 42, "Sum should be 42");

// function automorphic(n) {
//   let len = n.toString().length;
//   let squared = Math.pow(n, 2).toString().slice(-len);
//   return n == squared ? "Automorphic" : "Not!!";
// }

// console.log(automorphic(25), "Automorphic");

// function generateShape(integer) {
//   let a = "+".repeat(integer) + "\n";
//   return a.repeat(integer).trim();
// }

// console.log(generateShape(4));

// function count(array) {
//   //your code here
//   let finalObj = {};

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     finalObj[element] = (finalObj[element] || 0) + 1;
//   }
//   return finalObj;
// }

// console.log(count(["a", "a", "b", "b", "b"]), { a: 2, b: 3 });

// function menFromBoys(arr){
//   //your code here
//   arr = [...new Set(arr)]
//   let mens = []
//   let boys = []

//   arr.forEach(element => {
//     element %2 ==0? mens.push(element) : boys.push(element)
//   });

//   return mens.sort((a,b)=>a-b).concat(boys.sort((a,b)=>b-a))

// }

// console.log(menFromBoys([7,3,14,2,17]), [14,17,7,3]);

// function vowelIndices(word) {
//   let vowels = "aeiouy";
//   word = word.toLowerCase();
//   let final = [];

//   for (let i = 0; i < word.length; i++) {
//     const element = word[i];
//     if (vowels.includes(element)) {
//       console.log(i);
//       final.push(i + 1);
//     }
//   }
//   return final;
// }

// console.log(vowelIndices("BtMuYE"), [1, 5]);

// function repeats(arr) {
//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     obj[element] = (obj[element] || 0) + 1;
//   }

//   let sum = 0;
//   for (const key in obj) {
//     if (obj[key] == 1) {
//       sum += +key;
//     }
//   }
//   return sum;
// }

// console.log(repeats([4, 5, 7, 5, 4, 8]), 15);

// function balancedNum(number) {
//   number = number.toString();
//   let a = number.toString().length;

//   if (number.length % 2 !== 0) {
//     left = number.slice(0, Math.floor(a / 2));
//     right = number.slice(Math.ceil(a / 2));
//   } else {
//     left = number.slice(0, Math.floor(a / 2 - 1));
//     right = number.slice(Math.ceil(a / 2 + 1));
//   }

//   let sum = (a) => {
//     return a
//       .split("")
//       .map(Number)
//       .reduce((sum, item) => sum + item, 0);
//   };

//   return sum(left) == sum(right) ? "Balanced" : "Not Balanced";
// }

// console.log(balancedNum(7), "Balanced");

// function findDeletedNumber(arr, mixArr) {
//   let a = mixArr.sort((a, b) => a - b);

//   console.log(a);

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element !== a[i]) {
//       return element;
//     }
//   }
//   return 0;
// }

// console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]), 2, "Deletion");

// function hasUniqueChars(str) {
//   return [...new Set(str)].length == str.length;
// }

// console.log(hasUniqueChars("  nAa"), false);

// function sumEvenNumbers(input) {
//   return input.toString().split(",").reduce((sum,item)=> {
//     if (item % 2 ==0) {
//        sum += +item
//     }
//     return sum
//   },0)
// }

// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// function solve(arr){
//   let a =  arr.reverse()
//   return [...new Set(a)].reverse()
// }

// function differenceOfSquares(n) {
//   // ...

//   let sum = 0;
//   let sumSquared = 0;

//   for (let i = 0; i <= n; i++) {
//     sumSquared += Math.pow(i, 2);
//     sum += i;
//   }
//   sum = Math.pow(sum, 2);
//   return sum - sumSquared;
// }

// console.log(differenceOfSquares(10), 170);

// function myLanguages(results) {
//   let obj = Object.entries(results);

//   let a = obj.sort((a, b) => b[1] - a[1]);

//   return (b = a.filter((item) => item[1] > 60).map((item) => item[0]));
// }

// console.log(myLanguages({ Java: 10, Ruby: 61, Python: 65 }), [
//   "Ruby",
//   "Python",
// ]);

// function squares(x, n) {
//   let final = [];
//   for (let i = 0; i < n; i++) {
//     final.push(x);
//     x =Math.pow(x, 2)
//   }

//   return final;
// }
// console.log(squares(2,3));

// function removeRotten(bagOfFruits) {
//   let finalArr = [];
//   console.log(bagOfFruits);
//   if (!bagOfFruits) return []

//   for (let i = 0; i < bagOfFruits.length; i++) {
//     let element = bagOfFruits[i];
//     if (element.includes("rotten")) {
//       element = element.slice(6);
//     }
//     finalArr.push(element.toLowerCase());
//   }
//   return finalArr;
// }

// console.log(removeRotten(null));

// function strong(n) {
//   a = n.toString().split("").map(Number);

//   let arr = [];

//   for (let i = 0; i < a.length; i++) {
//     let sum = 1;
//     for (let j = 1; j <= a[i]; j++) {
//       sum *= j;
//     }
//     arr.push(sum);
//   }
//   return arr.reduce((sum, item) => sum + item, 0) == n
//     ? "STRONG!!!!"
//     : "Not Strong !!";
// }

// console.log(strong(145), "STRONG!!!!");

// function maxDiff(list) {
//   return list
//     .sort((a, b) => b - a)
//     .reduce((sum, i, _, arr) => (sum = arr[0] - arr[arr.length - 1]), 0);
// }

// console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]), 6);

// function tidyNumber(n) {
//   let a = n.toString();
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > a[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(tidyNumber(12), true);
// function multiples(m, n) {
//   let final = [];
//   for (let i = 1; i <= m; i++) {
//     final.push(i * n);
//   }

//   return final;
// }

// console.log(multiples(3, 5), [5, 10, 15]);

// function alternateCase(s) {
//   let finalStr = "";

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === s[i].toUpperCase()) {
//       finalStr += s[i].toLowerCase();
//     } else finalStr += s[i].toUpperCase();
//   }
//   return finalStr;
// }
// console.log(alternateCase("Hello World"), "hELLO wORLD");

// const findSquares = (num) => {
//   for (let i = num; i > 0; i--) {
//     if (Math.pow(i, 2) - Math.pow(i - 1, 2) == num) {
//       return `${Math.pow(i, 2)} -${Math.pow(i - 1, 2)}`;
//     }
//   }
//   return 0;
// };

// console.log(findSquares(25), "169-144");

// function separateTypes(input) {
//   let obj = {};
//   let arr = [];
//   let arrStr=[]
//   let arrBul = []

//   input.forEach((element) => {
//     if (typeof element == "number") {
//       arr.push(element)
//       obj[typeof element] = arr;
//     }
//     if (typeof element == "string") {
//       arrStr.push(element)
//       obj[typeof element] = arrStr
//     }
//     if (typeof element == "boolean") {
//       arrBul.push(element)
//       obj[typeof element] = arrBul
//     }
//   });

//   console.log(obj);
// }

// console.log(separateTypes(["a", 1, 2, false, "b"]), {
//   number: [1, 2],
//   string: ["a", "b"],
//   boolean: [false],
// });

// const solution = (mtrx) => {
//   for (let i = 0; i < mtrx.length; i++) {
//     if (
//       mtrx[i].includes(">") &&
//       mtrx[i].includes("x") &&
//       mtrx[i].indexOf("x") > mtrx[i].indexOf(">")
//     ) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(
//   solution([
//     [">", "x"],
//     [" ", "x"],
//   ]),
//   false
// );

// function doubleEveryOther(a) {
//   return a.map((item, i) => (i % 2 !== 0 ? item * 2 : item));
// }

// console.log(
//   doubleEveryOther([12, 4, 11, -8, -14, -9, -9, -6, -15]),
//   [12, 8, 11, -16, -14, -18, -9, -12, -15]
// );

// function evenLast(numbers) {
//   let filtered = numbers.filter((item, i) => i % 2 == 0);

//   return (
//     filtered.reduce((sum, item) => sum + item, 0) *
//       numbers[numbers.length - 1] || 0
//   );
// }

// console.log(evenLast([]), 30);

// function sortGiftCode(code) {
//   return [...code].sort().join("");
// }

// console.log(sortGiftCode("pqksuvy"), "kpqsuvy");

// function wordValue(a) {
//   let finalArr = [];
//   a.forEach((element) => {
//     let sum = 0;
//     for (let i = 0; i < element.length; i++) {
//       const item = element[i].charCodeAt() - 96;
//       if (element[i] !== " ") {
//         sum += item;
//       }
//     }
//     finalArr.push(sum);
//   });
//   return finalArr.map((item, i) => item * (i + 1));
// }

// console.log(wordValue(["codewars", "abc", "xyz"]), [88, 12, 225]);

// function divCon(x) {
//   let nums = x
//     .filter((item) => typeof item == "number")
//     .reduce((sum, item) => sum + item, 0);
//   let nums2 = x
//     .filter((item) => typeof item == "string")
//     .map(Number)
//     .reduce((sum, item) => sum + item, 0);

//   return nums - nums2;
// }

// console.log(divCon([9, 3, "7", "3"]), 2);

// function catMouse(x) {
//   let sum = 0;

//   for (let i = 0; i < x.length; i++) {
//     const element = x[i];
//     if (element === ".") {
//       sum++;
//     }
//   }

//   return sum > 3 ? "Escaped!" : "Caught!";
// }

// console.log(catMouse("C....m"), "Escaped!");

// function solve(s) {
//   a = s.replace(/[a-z]/g, " ");
//   let b = a.split(" ").map(Number);
//   return Math.max(...b);
// }

// console.log(solve("gh12cdy695m1"), 695);

// function toLeetSpeak(str) {
//   let obj = {
//     A: "@",
//     B: "8",
//     C: "(",
//     D: "D",
//     E: "3",
//   };
//   let final = "";

//   for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     if (element == " ") {
//       final += " ";
//     } else {
//       final += obj[element];
//     }
//   }

//   return final;
// }

// console.log(toLeetSpeak("A AC"), "1337");

// function maxProduct(numbers, size){
//   return numbers.sort((a,b)=>b-a).splice(0,size).reduce((sum,item)=>sum*item)
// }

// console.log(maxProduct([10,8,7,9], 3), 720);;

// function houseNumbersSum(a) {
//   let sum = 0;
//   let i = 0;

//   while (a[i] !== 0) {
//     sum += a[i];
//     i++;
//   }
//   return sum;
// }
// console.log(houseNumbersSum([4, 1, 2, 3, 0, 10, 2]), 10);

// function longestWord(stringOfWords) {
//   return stringOfWords
//     .split(" ")
//     .reverse()
//     .sort((a, b) => b.length - a.length)[0];
// }

// console.log(longestWord("red blue grey"), "grey");

// function isRubyComing(list) {
//   for (let i = 0; i < list.length; i++) {
//     const element = list[i];
//     if (element.language == "Ruby") {
//       return true;
//     }
//   }

//   return false;
// }

// var list1 = [
//   {
//     firstName: "Emma",
//     lastName: "Z.",
//     country: "Netherlands",
//     continent: "Europe",
//     age: 29,
//     language: "Ruby",
//   },
// ];

// console.log(isRubyComing(list1));

// function spacify(str) {
//   let final = "";

//   for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     console.log(element);
//     final += element + " ";
//   }
//   return final.trim();
// }

// console.log(spacify("hello world"), "h e l l o   w o r l d");

// function min(arr, toReturn) {
//   let num = Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element < num) {
//       num = element;
//     }
//   }

//   if (toReturn == "value") {
//     return num;
//   } else return arr.indexOf(num);
// }

// console.log(min([15, 2, 3, 4, 1, 15], "value"), 1);
// console.log(min([15, 2, 3, 4, 1, 5], "index"), 0);

// function checkThreeAndTwo(array) {
//   let A = 0,
//     B = 0,
//     C = 0;

//   let arr = [];

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element == "a") {
//       A++;
//     } else if (element == "b") {
//       B++;
//     } else C++;
//   }

//   arr.push(A, B, C);
//   arr = arr.filter((item) => item > 0);

//   return arr.every((item) => item >= 2 && item < 4);
// }

// console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]), true);

// function divisibleByThree(str){
//   return str.split("").map(Number).reduce((sum,item)=>sum+item)%3==0
// }

// console.log(divisibleByThree('123'),true);

// function dbSort(a) {
//   let strings = a.filter((item) => typeof item == "string").sort();
//   let nums = a.filter((item) => typeof item === "number").sort((a, b) => a - b);

//   return nums.concat(strings);
// }

// console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 11, 2, 2]));

// function arithmeticSequenceElements(a,r,n) {
//   let arr=[]

//   let i =0
//   let count =a

//   while (i < n) {
//     i++
//     arr.push(count)
//     count +=r
//   }
//   return arr.join(", ")
// }

// console.log(arithmeticSequenceElements(1, 2, 5), "1, 3, 5, 7, 9");;

// function crap(x, bags, cap) {
//   let bag = bags * cap;
//   let sumCrap = 0;
//   for (let j = 0; j < x.length; j++) {
//     const element = x[j];
//     for (let i = 0; i < element.length; i++) {
//       if (element[i] == "@") {
//         sumCrap++;
//       }
//       if (element[i] == "D") {
//         return "Dog!!";
//       }
//     }
//   }
//   return bag >= sumCrap ? "Clean" : "Cr@p";

//   console.log(sumCrap);
// }

// console.log(
//   crap(
//     [
//       ["_", "_", "_", "_"],
//       ["_", "_", "_", "@"],
//       ["_", "_", "@", "_"],
//     ],
//     2,
//     2
//   ),
//   "Clean"
// );
// console.log(
//   crap(
//     [
//       ["_", "_", "_", "_"],
//       ["_", "_", "_", "@"],
//       ["_", "_", "@", "_"],
//     ],
//     1,
//     1
//   ),
//   "Cr@p"
// );
// console.log(
//   crap(
//     [
//       ["_", "_"],
//       ["_", "@"],
//       ["D", "_"],
//     ],
//     2,
//     2
//   ),
//   "Dog!!"
// );

// function liftoff(instructions) {
//   return instructions.sort((a, b) => b - a).join(" ") + " liftoff!";
// }

// console.log(
//   liftoff([2, 8, 10, 9, 1, 3, 4, 7, 6, 5]),
//   "10 9 8 7 6 5 4 3 2 1 liftoff!"
// );

// Array.prototype.numberOfOccurrences = function (n) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === n) {
//       count++;
//     }
//   }
//   return count;
// };

// var arr = [4, 0, 4];

// console.log(arr.numberOfOccurrences(4), 2);

// function solve(arr) {
//   let a = [];
//   arr = arr.sort((a, b) => b - a);
//   while (arr.length >= 1) {
//     a.push(arr.shift(), arr.pop());
//   }
//   if (typeof a[a.length - 1] == "undefined") {
//     a.pop();
//   }
//   console.log(a[a.length - 1]);
//   return a;
// }

// console.log(solve([15, 11, 10, 7, 12]), [15, 7, 12, 10, 11]);

// function getAges(sum, difference) {
//   let a, b;
//   a = (sum - difference) / 2 + difference;
//   b = (sum - difference) / 2;
//   return [a, b];
// }

// console.log(getAges(24, 4), [14, 10]);

// function greetDevelopers(list) {
//   let final = [];

//   for (let i = 0; i < list.length; i++) {
//     const element = list[i];
//     element.greeting = `Hi ${element.firstName}, what do you like the most about ${element.language}?`;

//     final.push(element);
//   }

//   return final;
// }

// var list1 = [
//   {
//     firstName: "Sofia",
//     lastName: "I.",
//     country: "Argentina",
//     continent: "Americas",
//     age: 35,
//     language: "Java",
//   },
//   {
//     firstName: "Lukas",
//     lastName: "X.",
//     country: "Croatia",
//     continent: "Europe",
//     age: 35,
//     language: "Python",
//   },
//   {
//     firstName: "Madison",
//     lastName: "U.",
//     country: "United States",
//     continent: "Americas",
//     age: 32,
//     language: "Ruby",
//   },
// ];

// console.log(greetDevelopers(list1));

// var isAnagram = function (test, original) {
// if (test.length !== original.length) {
//   return false;
// }
// let a = test.toLowerCase().split("").sort()
// let b = original.toLowerCase().split("").sort()

// let obj = {};
// let obj2 = {};

// for (let i = 0; i < a.length; i++) {
//   obj[a[i]] = (obj[a[i]] || 0) + 1;
//   obj2[b[i]] = (obj2[b[i]] || 0) + 1;
// }
// return JSON.stringify(obj) === JSON.stringify(obj2)

// };

// console.log(isAnagram("abb", "bab"), true);

// function solution(digits) {

//   let min =1000

//   for (let i = 0; i < digits.length-5; i++) {
//     const element = digits[i];

//     let slicedNumber = digits.slice(i,i+5)
//     if (slicedNumber > min) {
//       min = slicedNumber
//     }
//   }
//  return min

// // }

// console.log(solution("123458678987651"), 98765);

// function getIssuer(number) {
//   let a = number.toString().slice(0, 1);
//   return a == 4
//     ? "VISA"
//     : a == 3
//     ? "AMEX"
//     : a == 5
//     ? "Mastercard"
//     : a == 6
//     ? "Discover"
//     : "Unknown";
// }

// console.log(getIssuer(4111111111111111));

// function tennisGamePoints(score) {
//   let obj = {
//     15: 1,
//     30: 2,
//     40: 3,
//     love: 0,
//   };

//   let b = score.split("-");
//   let sum = 0;

//   for (let i = 0; i < b.length; i++) {
//     const element = b[i];
//     if (b[1] === "all") {
//       sum += obj[b[0]];
//     } else {
//       sum += obj[element];
//     }
//   }
//   return sum;
// }

// console.log(tennisGamePoints("30-all"), 4);

// function sc(n) {
//   let arr = [];
//   let finalArr = [];

//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       arr.push(i);
//     }
//   }

//   let a = n.toString(2);

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i].toString(2);
//     if (a.includes(element)) {
//       console.log(element);
//       finalArr.push(parseInt(element, 2));
//     }
//   }

//   return finalArr;
// }

// console.log(sc(15), [1, 3, 15]);

// function addArrays(array1, array2) {
//   if (array1.length !== array2.length) return "Error";

//   let finalArr = [];

//   for (let i = 0; i < array1.length; i++) {
//     finalArr.push(array1[i] + array2[i]);
//   }

//   return finalArr;
// }

// console.log(addArrays([1, "a"], [4, 5]), [5, 7]);

// function giveChange(amount) {
//   let one = +amount.toString().split("").splice(-1).join();
//   let ten = +amount.toString().split("").splice(-2, 1).join();
//   let hundred = +amount.toString().split("").splice(0, 1).join();

//   if (amount.toString().length > 3) {
//     hundred = +amount.toString().split("").splice(0, 2).join("");
//   }

//   let bils = {
//     1: 0,
//     5: 0,
//     10: 0,
//     20: 0,
//     50: 0,
//     100: 0,
//   };

//   if (one > 5) {
//     bils[1] = one - 5;
//     bils[5] = 1;
//   } else if (one == 5) {
//     bils[5] = 1;
//   } else {
//     bils[1] = one;
//   }

//   if (ten == 9) {
//     bils[50] = 1;
//     bils[20] = 2;
//   } else if (ten == 8) {
//     bils[50] = 1;
//     bils[20] = 1;
//     bils[10] = 1;
//   } else if (ten == 7) {
//     bils[50] = 1;
//     bils[20] = 1;
//   } else if (ten == 6) {
//     bils[50] = 1;
//     bils[10] = 1;
//   } else if (ten == 5) {
//     bils[50] = 1;
//   } else if (ten == 4) {
//     bils[20] = 2;
//   } else if (ten == 3) {
//     bils[20] = 1;
//     bils[10] = 2;
//   } else if (ten == 2) {
//     bils[20] = 1;
//   } else if (ten == 1) {
//     bils[10] = 1;
//   }

//   bils[100] = hundred;

//   return Object.values(bils);
// }

// console.log(giveChange(1032), [2, 1, 1, 0, 0, 2]);

// function duplicateElements(m, n) {
//   return m.some((el) => n.includes(el));
// }

// console.log(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]), true);

// function noonerize(numbers) {
//   console.log(typeof(numbers[0]));

//   if (typeof(numbers[0])  != "number" || typeof(numbers[1])  != "number" ) {
//     return 'invalid array'
//   }

//   let firstNum =
//     +numbers[1].toString().slice(0, 1) + numbers[0].toString().slice(1);
//   let secoundNum =
//     +numbers[0].toString().slice(0, 1) + numbers[1].toString().slice(1);
//   return Math.abs(firstNum - secoundNum)
// }

// console.log(noonerize([12,"a"]), 18);

// function countName(anArr, name) {
//   return anArr.filter((item) => item == name).length;
// }

// const MAINLIST = [
//   "Bob",
//   "Ted",
//   "Amy",
//   "Alice",
//   "Bob",
//   "Ted",
//   "Amy",
//   "Ted",
//   "Amy",
//   "Fred",
// ];
// console.log(countName(MAINLIST, "Ted"), 3);

// function solution(value) {
//   value = value.toString();
//   let a = Array(5 - value.length).fill(0);
//   a = a.concat(+value).join("");
//   return `Value is ${a}`;
// }
// console.log(solution(5), "Value is 00005");

// function paul(x) {
//   let obj = {
//     kata: 5,
//     "Petes kata": 10,
//     life: 0,
//     eating: 1,
//   };

//   let a = x.reduce((sum, item) => sum + obj[item], 0);
//   if (a < 40) {
//     return "Super happy!";
//   } else if (a < 70) {
//     return "Happy!";
//   } else if (a < 100) {
//     return "Sad!";
//   } else return "Miserable!";
// }

// console.log(paul(["life", "eating", "life"]), "Super happy!");

// function broken(x) {

// let final =""
// for (let i = 0; i < x.length; i++) {
//   let element = x[i];
//   if (element == 1) {
//     element = 0
//   } else element =1
//  final +=element
// }

// return final;

// }

// console.log(broken("100"), "011");

// function bald(x) {
//   let obj = {
//     0: "Clean!",
//     1: "Unicorn!",
//     2: "Homer!",
//   };

//   let count=0
//   let final=""

//   for (let i = 0; i < x.length; i++) {
//     const element = x[i];
//     if (element =="/") {
//       count ++
//       final +="-"
//     }else final +="-"
//   }

//   let txt = "";

//   if (count < 3) {
//     txt = obj[count];
//   } else if (count <= 5) {
//     txt = "Careless!";
//   } else txt = "Hobo!";

//   return [final, txt];
// }

// console.log(bald("/-"), ["----------", "Unicorn!"]);

// function gordon(a) {
//   let vowel = { a: "@", e: "*", i: "*", o: "*", u: "*" };
//   let final = "";
//   a = a.split("");
//   console.log(a);
//   console.log(vowel["a"]);

//   for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     if (element == " ") {
//       final += "!!!!";
//     }
//     if (vowel[element]) {
//       final += vowel[element];
//     } else final += element.toUpperCase();
//   }

//   return final;
// }

// console.log(
//   gordon("What feck damn cake"),
//   "WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!"
// );

// function shorter_reverse_longer(a, b) {
//   if (b.length > a.length) {
//     [a, b] = [b, a];
//   }
//   a = [...a].reverse().join("");
//   return b + a + b;
// }

// console.log(shorter_reverse_longer("hello", "bau"), "bauollehbau");

// function arrange(arr) {
//   let a = [...arr];

//   let z = ['21a','111a']

//   console.log(z.sort((a,b)=>b>a));

//   let b = [];
//   let c = [];
//   let d = [];
//   for (let i = 0; i < a.length; i++) {
//     const element = a[i];

//     if (element.slice(-2) !== "KG" && element.slice(-1) !== "T") {
//       b.push(element);
//     }
//     if (element.slice(-2) == "KG") {
//       c.push(element);
//     }
//     if (element.slice(-1) == "T") {
//       d.push(element);
//     }
//   }
//   b = b.sort((x,y)=>x>y);
//   c=c.sort((x,y)=>y>x);
//   d=d.sort((x,y)=>y>x);
//   return b.concat(c).concat(d);
// }

// console.log(arrange( [ '300G', '200G', '150G', '100KG' ]), [
//   "300G",
//   "450G",
//   "900KG",
//   "4T",
// // ]);

// const removeConsecutiveDuplicates = (s) => {

// let final =[]
// s=s.split(" ")
// for (let i = 0; i < s.length; i++) {
//   const element = s[i];
//   console.log(s[i]);
//   if (s[i] !== s[i+1]) {
//     final.push(s[i])
//   }
// }
// return final.join(" ")

// };
// console.log(
//   removeConsecutiveDuplicates(
//     "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
//   ),
//   "alpha beta gamma delta alpha beta gamma delta"
// );

// function validSpacing(s) {
//   for (let i = 0; i < s.length; i++) {
//     const element = s[i];
//     if (s[i] == " " && s[i + 1] == " ") {
//       return false;
//     }
//     console.log(s[0]);
//     if (s[0] == " " || s[s.length - 1] == " ") {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(validSpacing("Hello world "), true);

// function correctness(bobsDecisions, expertDecisions) {
//   let sum =0
//   for (let i = 0; i < bobsDecisions.length; i++) {
//     if (bobsDecisions[i] == expertDecisions[i]) {
//       sum += 1
//     }else if (bobsDecisions[i] == "?" ||  expertDecisions[i] =="?") {
//       sum += 0.5
//     }else sum +=0
//   }
//   return sum
// }

// console.log(correctness(['M', '?', 'M'], ['M', 'F', '?']), 2, 'guessed');

// function coolString(s) {
//   if (s.length < 2) {
//     return false;
//   }
//   for (let i = 1; i < s.length; i++) {
//     const element = s[i];
//     if (s[i - 1] == s[i - 1].toLowerCase() && s[i] == s[i].toLowerCase()) {
//       return false;
//     }
//     if (s[i - 1] == s[i - 1].toUpperCase() && s[i] == s[i].toUpperCase()) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(coolString("aQwFdA"), true);

// function average(scores) {
//   return Math.round(scores.reduce((x, y) => x + y, 0) / scores.length);
// }
// const scores = [5, 78, 52, 900, 1];
// console.log(average(scores), 207);

// function countLanguages(list) {
//   // thank you for checking out the Coding Meetup kata :)
//   let ans = {};
//   for (let i = 0; i < list.length; i++) {
//     const element = list[i];
//     ans[list[i].language] = (ans[list[i].language] || 0) + 1;
//   }
//   return ans;
// }

// var list1 = [
//   {
//     firstName: "Noah",
//     lastName: "M.",
//     country: "Switzerland",
//     continent: "Europe",
//     age: 19,
//     language: "C",
//   },
//   {
//     firstName: "Anna",
//     lastName: "R.",
//     country: "Liechtenstein",
//     continent: "Europe",
//     age: 52,
//     language: "JavaScript",
//   },
//   {
//     firstName: "Ramon",
//     lastName: "R.",
//     country: "Paraguay",
//     continent: "Americas",
//     age: 29,
//     language: "Ruby",
//   },
//   {
//     firstName: "George",
//     lastName: "B.",
//     country: "England",
//     continent: "Europe",
//     age: 81,
//     language: "C",
//   },
// ];

// console.log(countLanguages(list1));

// function fireFight(s) {
//   s = s.split(" ");
//   let final = "";
//   for (let i = 0; i < s.length; i++) {
//     let element = s[i];
//     if (element == "Fire") {
//       element = "~~";
//     }
//     final += element +" "
//   }
//   return final;
// }
// console.log(
//   fireFight(
//     "Boat Rudder Water Fire"
//   ),

// );

// function planeSeat(a) {
//   let obj = {
//     A: "Left",
//     B: "Left",
//     C: "Left",
//     D: "Middle",
//     E: "Middle",
//     F: "Middle",
//     G: "Right",
//     H: "Right",
//     K: "Right",
//   };

//   let char = a.slice(-1);
//   let num = +a.slice(0, -1);
//   if (obj[char] === undefined) {
//     return "No Seat!!";
//   }

//   if (num <= 20) {
//     return "Front-" + obj[char];
//   }
//   if (num <= 40) {
//     return "Middle-" + obj[char];
//   }
//   if (num <= 60) {
//     return "Back-" + obj[char];
//   } else return "No Seat!!";
// }

// console.log(planeSeat("22p"), "Front-Left");

// const sumSquareEvenRootOdd = (ns) => {
//   // your code goes here

//   let arr = [];

//   for (let i = 0; i < ns.length; i++) {
//     const element = ns[i];
//     if (element % 2 == 0) {
//       arr.push(Math.pow(element, 2));
//     } else arr.push(Math.sqrt(element));
//   }

//   return arr.reduce((sum, item) => sum + item, 0).toFixed(2);
// };

// console.log(sumSquareEvenRootOdd([4, 5, 7, 8, 1, 2, 3, 0]));

// function trim(x) {
//   for (let i = 0; i < x.length; i++) {
//     let element = x[i];
//     for (let j = 0; j < element.length; j++) {
//       x[i][j] = element[j].replace("J", "|");
//       x[x.length - 1][j] = "...";
//     }
//   }
//   return x;
// }

// console.log(
//   trim([
//     ["J", "|"],
//     ["J", "|"],
//     ["...", "|", "asd"],
//     ["...", "|", "asd"],
//     ["...", "|", "asd"],
//   ])
// );

// function equalize(array) {
//   let final = [];

//   let divisor = array[0];
//   console.log(divisor);

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     let res = element - divisor;

//     if (res >= 0) {
//       final.push(`+${res}`);
//     } else final.push(`${res}`);
//   }

//   return final;

//   console.log(final);
// }

// console.log(equalize([20, 30, 35, 10]), ["+0", "+10", "+15", "-10"]);

// function mathEngine(arr) {

//   if (!arr) {
//     return 0
//   }
//   let sumP =1
//   let sumN=0
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (arr[i]>=0) {
//       sumP *=arr[i]
//     }else if (arr[i]<0) {
//       sumN +=arr[i]
//     }
//   }
// return sumP+sumN
// }
// console.log(mathEngine([null]));

// function jeringonza(a) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let vowelsUp = ["A", "E", "I", "O", "U"];

//   let final = "";

//   for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
//     if (vowels.includes(a[i])) {
//       final += a[i] + "p" + a[i];
//     } else if (vowelsUp.includes(a[i])) {
//       final += a[i] + "P" + a[i];
//     } else final += a[i];
//   }
//   return final;
// }

// console.log(jeringonza("jWEere"), "jeperipingoponzapa");

// function isInMiddle(seq) {
//   let sides = seq.split("abc");
//   let a = sides.map(Number)
//   console.log(sides);
//   console.log(a);
//   if (sides.length ==1 || sides[0]=="" ) return false

//   if (sides[0].length - 1 > sides[1].length) {
//     return false;
//   }
//   if (sides[1].length - 1 > sides[0].length) {
//     return false;
//   }

//   return true;
// }

// console.log(isInMiddle("abc"), true);

// function compare(s1, s2) {
//   let sum1 = 0;
//   let sum2 = 0;

//   if (s1 !== null) {
//     for (let i = 0; i < s1.length; i++) {
//       const element = s1[i].toUpperCase().charCodeAt();
//       console.log(element);
//       if (element > 64 && element < 91) {
//         sum1 += element;
//       } else sum1 = 0;
//     }
//   }

//   if (s2 !== null) {
//     for (let i = 0; i < s2.length; i++) {
//       const element = s2[i].toUpperCase().charCodeAt();

//       if (element > 64 && element < 91) {
//         sum2 += element;
//       } else sum2 = 0;
//     }
//   }

//   return sum1 == sum2;
// }

// console.log(compare("AD", "ffPFF"), true);

// function solve(a, b) {
//   let fin = "";
//   for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     if (!b.includes(element)) {
//       fin += element;
//     }
//   }
//   for (let i = 0; i < b.length; i++) {
//     const element = b[i];
//     if (!a.includes(element)) {
//       fin += element;
//     }
//   }
//   return fin;
// }

// console.log(solve("xyabb", "xzca"), "ybbzc");

// function hydrate(s) {
//   s = s
//     .replace(/[^0-9\.]+/g, "")
//     .split("")
//     .reduce((sum, item) => sum + +item, 0);
//     if (s == 1) {
//   return `${s} glass of water`;

//     }
//   return `${s} glasses of water`;
// }
// console.log(
//   hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"),
//   "10 glasses of water"
// );

// reverse = function (array) {
//   let fin = [];

//   for (let i = array.length - 1; i >= 0; i--) {
//     const element = array[i];
//     fin.push(element);
//   }

//   return fin;
// };

// console.log(reverse([1, 2, 3]), [3, 2, 1]);

// function getStrings(city){

//   city = city.toLowerCase()

//   let obj={}

//   for (let i = 0; i < city.length; i++) {
//     const element = city[i];
//     obj[element] = (obj[element] || "") +"*"
//   }

//   let str=""
//   for (let key in obj) {
//     if (key !== ' ') {
//         str += key + ':' + obj[key] + ',';
//     }
// }

// return str.substring(0, str.length - 1);
// }
// console.log(getStrings("Chicago"), "c:**,h:*,i:*,a:*,g:*,o:*");;

// function sortMyString(S) {
//   let str = "";

//   for (let i = 0; i < S.length; i++) {
//     const element = S[i];
//     if (i % 2 == 0) {
//       str += element;
//     }
//   }
//   str += " ";
//   for (let i = 0; i < S.length; i++) {
//     const element = S[i];
//     if (i % 2 !== 0) {
//       str += element;
//     }
//   }
//   return str;
// }

// console.log(sortMyString("CodeWars"), "CdWr oeas");

// function initializeNames(name) {
//   a = name.split(" ");
//   if (a.length < 3) {
//     return name;
//   }
//   let fin = a[0] + " ";

//   for (let i = 1; i < a.length - 1; i++) {
//     const element = a[i];
//     console.log(element);
//     let b = element.slice(0, 1);
//     console.log(b);
//     fin += b + "." + " ";
//   }
//   return fin + a[a.length - 1];
// }

// console.log(
//   initializeNames("Alice Betty Catherine Davis"),
//   "Alice B. C. Davis",
//   ""
// );

// const findAll = (array, n) => {
//   let sum = 0;

//   array.forEach((element) => {
//     if (element == n) {
//       sum++;
//     }
//   });
//   return [sum, array.lastIndexOf(n)];
// };

// console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3), [2, 4]);
// function filterEvenLengthWords(words) {
//   return words.filter((item, i) => i % 2 == 0);
// }
// console.log(filterEvenLengthWords(["One", "Two", "Three", "Four"]));

//returns the test score
// function scoreTest(str, right, omit, wrong) {
//   console.log(str, right, omit, wrong);

// let pos = 0;
// let neutral = 0;
// let neg = 0;

// for (let i = 0; i < str.length; i++) {
//   if (str[i] == 0) {
//     pos++;
//   } else if (str[i] == 1) {
//     neutral++;
//   } else {
//     neg++;
//   }
// }

// console.log(pos, neutral, neg);

// return pos * right + neutral * omit - neg * wrong;
// }

// console.log(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1), 9);

// function swap(string) {
//   console.log(string);

//   let vowel = ["a", "e", "i", "o", "u"];

//   return [...string]
//     .map((item) => {
//       if (vowel.includes(item)) {
//         return item.toUpperCase();
//       }
//       return item;
//     })
//     .join("");
// }
// console.log(swap("HelloWorld!"));

// function makePassword(phrase) {
//   let obj ={
//     "i":1,
//     "I":1,
//     "o":"0",
//     "O":0,
//     "s":5,
//     "S":5
//   }
//   let final =""
//   let a = phrase.split(" ")
//   for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     let b =element[0]
//    if (obj[b]) {
//      final += obj[b]
//    }else final += b
//   }
//   return final
// }

// console.log(
//   makePassword("Give me liberty or give me death")
// );

// function createArrayOfTiers(num) {
//   num = num.toString();

//   let final = [];
//   for (let i = 1; i <= num.length; i++) {
//     final.push(num.slice(0, i));
//   }

//   return final;
// }

// console.log(createArrayOfTiers(420), ["4", "42", "420"]);

// function solution(string,limit){
//   if(string.length <= limit){
//     return string
//   }
//     return [...string].slice(0,limit).join("")+"..."
// }

// console.log(solution("Testing string",3));

// function scoreboard(string) {
//   string = string.split(" ");
//   let score = {
//     nil: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,

//   };
//   return string
//     .filter((s) => score.hasOwnProperty(s))
//     .map((item) => score[item]);
// }

// console.log(scoreboard("Arsenal a two two "), [2, 2]);

//

//const remainder = (D, d) => {
//   return D-Math.floor(D/d)*d
// }

// console.log( remainder(27,5), 1)

// function remove(string) {
//   let a = string.split(" ");

//   let final = "";

//   for (let i = 0; i < a.length; i++) {
//     let count = 0;
//     const element = a[i];

//     for (let j = 0; j < element.length; j++) {
//       if (element[j] == "!") {
//         count++;
//       }
//     }
//     console.log(count);
//     if (count > 1 || count === 0) {
//       final += element + " ";
//     }
//   }
//   return final.trim();
// }

// console.log(remove("Hi !Hi! Hi!"), "!Hi!");

// function stringMerge(string1, string2, letter) {
//   let firstStop = string1.indexOf(letter);
//   let secoundStop = string2.indexOf(letter);
//   return string1.slice(0, firstStop) + string2.slice(secoundStop);
// }

// console.log(stringMerge("person", "here", "e"), "pere");

// function scrollingText(text){
//   text = text.toUpperCase()
//   let finalArr =[]
//   for (let i = 0; i < text.length; i++) {
//     const element = text[i];
//     finalArr.push(text.slice(i)+ text.slice(0,i))
//   }

// return finalArr
// }

// console.log(scrollingText("abc"), ["ABC","BCA","CAB"]);

//function product(string) {
//let exclamationMark = 0;
// let questionMark = 0;

// for (let i = 0; i < string.length; i++) {
//   const element = string[i];
//   if (element === "?") {
//     questionMark++;
//   } else if (element === "!") {
//     exclamationMark++;
//   }
//
// return exclamationMark * questionMark;
// }

// console.log(product("!????!!!?"));

// function consecutive(arr) {
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);
//   let finalArr=[]

//   for (let i = min; i < max; i++) {
//     if (!arr.includes(i)) {
//       finalArr.push(i)
//     }
//   } return finalArr.length
// }

// console.log(consecutive([1,2,3,4,5,8]), 2);

// function replaceAll(seq, find, replace) {

//   if (seq.length === 0) {
//     return seq;
//   }
//   let finalArr = [];

//   for (let i = 0; i <= seq.length; i++) {
//     if (seq[i] === find) {
//       finalArr.push(replace);
//     } else if (seq[i]) finalArr.push(seq[i]);
//   }
//   if (typeof seq[0] == "string") {
//     return finalArr.join("");
//   }
//   return finalArr;
// }
// console.log(replaceAll([
//   'H', 'e', 'l', 'l',
//   '0', ' ', 'W', '0',
//   'r', 'l', 'd'
// ],"o",0));

// function mostFrequentItemCount(col) {

// let obj ={}
// let fin=[]
//     for (let i = 0; i < col.length; i++) {
//       const element = col[i];
//       obj[element] = (obj[element] || 0)+1
//     }
// for (const key in obj) {
//  fin.push(obj[key])
// }
// return Math.max(...fin)

// }

// console.log(mostFrequentItemCount([3, -1, -1,-1,,2,2,4,4]), 2);;

// function createDict(keys, values) {
//   let finObj = {};
//   for (let i = 0; i < keys.length; i++) {
//     const element = keys[i];
//     if (values[i] == undefined) {
//       values[i] = null;
//     }
//     finObj[keys[i]] = values[i];
//   }
//   return finObj;
// }

// console.log(createDict(["a", "b", "c", "d"], [1, 2, 3]), { a: 1, b: 2, c: 3 });

// function swap(str){
//   return [...str].map((item)=>{
//     if(item == item.toUpperCase()){
//       return  item.toLowerCase()
//     }else if(item==item.toLowerCase()){
//       return item.toUpperCase()
//     }
//   }).join("")
//   }

// console.log(swap('HelloWorld'), 'hELLOwORLD');

// function mirror(data) {
//   let first = [...data].sort((a, b) => a - b).slice(0, -1);
//   let secound = [...data].sort((a, b) => b - a);
//   return first.concat(secound);
// }

// console.log(mirror([1, 2, 3]));

// function minMinMax(array) {
//   let sorted = array.sort((a,b)=>a-b)
//   let middle = sorted[0]

//   while (sorted.includes(middle)) {
//     middle++
//   }
//   return [sorted[0],middle,sorted[sorted.length-1]]
// }

// console.log(minMinMax([1, 3, -3, -2, 8, -1]), [-3, 0, 8], 'Test Failed');;

// function duplicates(array) {
//   let obj = {};
//   let count = 0;

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     obj[element] = (obj[element] || 0) + 1;
//   }

//   for (const key in obj) {
//     if (obj[key] % 2 !== 0 && obj[key] > 1) {
//       obj[key]--;
//     }

//     if (obj[key] % 2 === 0) {
//       if (obj[key] > 2) {
//         count += obj[key] / 2;
//       } else count++;
//     }
//   }
//   return count;
// }

// console.log(duplicates([1, 2, 5, 6, 5, 2]), 2);

// function explode(x) {
//   if (typeof x[0] == "number" && typeof x[1] == "number") {
//     return Array(x[0] + x[1]).fill(x);
//   } else if (typeof x[0] == "number") {
//     return Array(x[0]).fill(x);
//   } else if (typeof x[1] == "number") {
//     return Array(x[1]).fill(x);
//   } else return "Void!";
// }

// console.log(explode(["a", 3]));

// function diagonalSum(matrix) {
//   let sum = 0;
//   for (let i = 0; i < matrix.length; i++) {
//     sum += matrix[i][i];
//   }

//   return sum;
// }

// console.log(
//   diagonalSum([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ]),
//   15
// );

// function isFlush(cards) {
//   let signArr = [];

//   for (let i = 0; i < cards.length; i++) {
//     const element = cards[i];
//     signArr.push(element.slice(-1));
//   }
//   console.log(signArr);
//   return signArr.every((item, i, arr) => arr[0] === item);
// }

// console.log(isFlush(["AS", "3S", "9S", "KS", "4S"]), true);

// function duckShoot(ammo, aim, ducks){

// let sShots=Math.floor(ammo*aim)
// let finalStr =""

// for (let i = 0; i < ducks.length; i++) {
//   let element = ducks[i];
//   if (element == 2 && sShots >0) {
//     element ="X"
//     sShots--
//   }
//   finalStr +=element
// }

// return finalStr

// }

// console.log(duckShoot(9, 0.42, '|~~~~~~~2~2~~~|'), '|~~~~~~~X~2~~~|'); ;

// function isDivisible(...nums){
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[0] % nums[i] !==0) {
//      return false
//     }
//   }
//   return true
// }

// console.log(isDivisible(3,3,4),false);;

// function twoDecimalPlaces(number) {
//   let a = String(number).split(".")[0];
//   let b = String(number).split(".")[1].slice(0, 2);

//   let c = a + "." + b;
//   return Number(c);
// }

// console.log(twoDecimalPlaces(10.1289767789));

// function findSum() {
//   let a = [...arguments];
//   let c = a.some((item) => item < 0);
//   if (c) return -1;

//   return [...arguments].reduce((sum, item) => sum + item, 0);
// }

// console.log(findSum(1, 3, 5));

// function numbersWithDigitInside(x, d) {
//   let xNums = [];

//   let count = 0;
//   let sum =0
//   let product = 1;
//   for (let i = 1; i <= x; i++) {
//     xNums.push(i);
//   }
//   let c = xNums.map(String);

//   for (let i = 0; i < c.length; i++) {
//     const element = c[i];

//     if (element.includes(String(d))) {
//       console.log(element);
//       sum += +element;
//       product *= element;
//       count++;
//     }
//   }

//   return [count, sum, product];
// }

// console.log(numbersWithDigitInside(11, 1), [2, 30, 200]);

// function nicknameGenerator(name) {
//   let vowel = "aeiou";
//   if (name.length < 4) {
//     return "Error: Name too short";
//   }

//   if (vowel.includes(name[2])) {
//     return name.slice(0, 4);
//   }
//   return name.slice(0, 3);
// }
// console.log(nicknameGenerator("Jimmy"), "Jim");
// console.log(nicknameGenerator("Jiemmy"), "Jim");

// function consecutive(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       (arr[i] === a && arr[i + 1] == b) ||
//       (arr[i] === b && arr[i + 1] == a)
//     ) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(consecutive([1, 3, 5, 7], 3, 1), true);

// function isLucky(n) {
//   return (
//     String(n)
//       .split("")
//       .reduce((sum, item) => sum + item, 0) %
//       9 ==
//     0
//   );
// }

// console.log(isLucky(1892376));

// function leaderB(user, user_score, your_score) {
//   if (user_score < your_score) {
//     return "Winning!";
//   }
//   if (user_score == your_score) {
//     return "Only need one!";
//   }
//   let totalScore = user_score - your_score;
//   let katas3 = Math.floor(totalScore / 3);

//   let kata1 = totalScore - katas3 * 3;

//   return `To beat ${user}'s score, I must complete ${katas3} Beta kata and ${kata1} 8kyu kata.${
//     katas3 + kata1 > 1000 ? " Dammit!" : ""
//   }`;
// }

// console.log(leaderB("g964", 23914, 3867));

// function solve(a){
//   let even=0
//   let odd=0
//   a =a.filter((item)=>typeof (item) == "number" )
//   console.log(a);
//   for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//    if (a[i]%2==0 ) {
//      even++
//    }else if (a[i]%2!==0) {
//     odd++
//   }
//   }return even -odd
// };

// console.log(solve([0,1,2,3,'a','b']),0);;

// function vowelStart(str) {
//   let vowels = "aeiou";
//   console.log(str);

//   let a = str
//     .split("")
//     .filter(
//       (item) =>
//         item !== " " &&
//         item !== "_" &&
//         item !== "-" &&
//         item !== "!" &&
//         item !== ","
//     )
//     .join("");
//   let finalStr = "";

//   for (let i = 0; i < a.length; i++) {
//     const element = a[i];

//     if (vowels.includes(element)) {
//       finalStr += " " + element;
//     } else finalStr += element;
//   }
//   if (finalStr[0] == " ") {
//     return finalStr.toLowerCase().slice(1);
//   }
//   return finalStr.toLowerCase();
// }

// console.log(vowelStart("oranges, apples, melon, pineapple"));

// function splitByValue(k, elements){
//       let firstPart=[]
//       let secoundPart=[]
//       for (let i = 0; i < elements.length; i++) {
//         const element = elements[i];
//         if (element < k) {
//           firstPart.push(element)
//         }else secoundPart.push(element)
//       }
//       return firstPart.concat(secoundPart)
// }

// console.log(splitByValue(5,[1, 3, 5, 7, 6, 4, 2]), [1, 3, 4, 2, 5, 7, 6]);

// function completeSeries(arr) {
//   if ([...new Set([...arr])].length !== arr.length) {
//     return [0];
//   }
//   let maxNum = Math.max(...arr);
//   let finalArr = [];

//   for (let i = 0; i <= maxNum; i++) {
//     finalArr.push(i);
//   }
//   return finalArr;
// }

// console.log(completeSeries([1, 4, 6]));

// function spongeMeme(sentence) {
//   let a = sentence.split("");
//   let fin = "";

//   for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     if (i % 2 == 0) {
//       fin += element.toUpperCase();
//     } else fin += element.toLowerCase();
//   }

//   return fin;
//   console.log(fin);
// }

// console.log(
//   spongeMeme("stop Making spongebob Memes!"),
//   "StOp mAkInG SpOnGeBoB MeMeS!"
// );

// function matrix(array) {
//   let finArr = array;
//   for (let i = 0; i < finArr.length; i++) {
//     if (finArr[i][i] < 0) {
//       finArr[i][i] = 0;
//     } else finArr[i][i] = 1;
//   }
//   return finArr;
// }

// console.log(
//   matrix([
//     [-1, 4, -5, -9, 3],
//     [6, -4, -7, 4, -5],
//     [3, 5, 0, -9, -1],
//     [1, 5, -7, -8, -9],
//     [-3, 2, 1, -5, 6],
//   ])
// );

// function procedure(n) {
//   let multi = [];
//   let a = n;

//   while (n <= 100) {
//     multi.push(n);
//     n += a;
//   }
//   multi = multi.map((item) => {
//     return item
//       .toString()
//       .split("")
//       .reduce((sum, el) => +sum + +el, 0);
//   });
//   return multi.reduce((sum, el) => sum + el, 0);
// }

// console.log(procedure(35), 15);

// function oddBall(arr) {
//   let indexOdd = arr.indexOf("odd");
//   return arr.filter((item) => item == indexOdd).length > 0;
// }

// console.log(oddBall(["even", 10, "odd", 3, "even"]), true);

// function sexy_prime(x, y) {
//   if (x > y) {
//     [x, y] = [y, x];
//   }

//   if (x !== 1 && y - x == 6) {
//     return true;
//   }
// }
// console.log(sexy_prime(5, 11), true);

// function battle(x, y) {

//   let a =("a".charCodeAt()-96)/2
//   let b ="A".charCodeAt()-65

//   console.log(b);

//   let firstScore=0
//   let secoundScore=0

//   for (let i = 0; i < x.length; i++) {
//     const element = x[i];
//     if (element === element.toUpperCase()) {
//       firstScore +=element.charCodeAt()-64
//     }else{
//       firstScore +=(element.charCodeAt()-96)/2
//     }

//   }
//   for (let i = 0; i < y.length; i++) {
//     if (y[i] === y[i].toUpperCase()) {
//       secoundScore +=y[i].charCodeAt()-64
//     }else{
//       secoundScore +=(y[i].charCodeAt()-96)/2
//     }
//   }

//   return firstScore>secoundScore?x:firstScore<secoundScore?y:"Tie!"

// }

// console.log(battle("v", "Blz"));

// function getLargerNumbers() {
//   let a = [13, 64, 15, 17, 88];
//   let b = [23, 14, 53, 17, 80];

//   console.log(a);
//   console.log(b);
//   let finalArr = [];
//   for(let i =0;i<a.length;i++){
//     console.log(a[i]);
//     if(a[i]>=b[i]){
//       finalArr.push(a[i])
//     }else{
//       finalArr.push(b[i])
//     }
//   }
//   return a.map((item,i)=>item>=b[i]?item:b[i])

// }

// console.log(getLargerNumbers());

// function solution(pairs) {
//   let final = "";
//   for (const key in pairs) {
//     console.log(key);
//     final += key + " = " + pairs[key] + ",";
//   }
//   return final.slice(0, -1);
// }

// console.log(solution({ a: 1, b: "2" }));

// function keysAndValues(data){
//   let a = Object.entries(data)

//   console.log(a);

//   let f =[]
//   let s =[]

//   for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     f.push(element[0])
//     s.push(element[1])
//   }

//   return [f,s]

// }
// console.log(keysAndValues({a: 1, b: 2, c: 3}));

// function caffeineBuzz(n) {
//   let finalWord = "";
//   if (n % 3 == 0) {
//     finalWord = "Java";
//   }
//   if (n % 12 == 0) {
//     finalWord = "Coffee";
//   }
//   if (n % 2 == 0 && finalWord !=="") {
//     finalWord += "Script";
//   }
//   if (finalWord ==="") {
//     return "mocha_missing!"
//   }
//   return finalWord;
// }

// console.log(caffeineBuzz(4));

// function findOdd(A) {
//   let obj = {};
//   for (let i = 0; i < A.length; i++) {
//     const element = A[i];
//     obj[element] = (obj[element] || 0) + 1;
//   }
//   console.log(obj);
//   for (const key in obj) {
//     if (obj[key] % 2 !== 0) {
//       return key;
//     }
//   }
// }
// console.log(
//   findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]),
//   5
// );

// function pluck(objs, name) {
// return objs.map((item)=>item[name])
// }

// console.log(pluck([{a:1}, {a:2}], 'a'), [1,2]);

// function bingo(a) {
//   let d = "BINGO";

//   let letters = [];

//   for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     letters.push(String.fromCharCode(element + 64));
//   }

//   return [...d].every((item) => letters.includes(item)) ? "WIN" : "LOSE";
// }

// console.log(bingo([21, 13, 7, 5, 14, 7, 15, 9, 10]), "WIN");

// function arrayMash (array1, array2) {

//   let finArr =[]

//   for (let i = 0; i < array1.length; i++) {
//     const element = array1[i];
//     finArr.push(array1[i],array2[i])
//   }
//   return finArr

// }

// console.log(arrayMash([1, 2, 3], ['a', 'b', 'c']));

// function matchArrays(v,r){

//   let count =0
//   for (let i = 0; i < v.length; i++) {
//     const element = v[i];
//     if (r.includes(element)) {
//       count++
//     }
//   }
// return count

// }
// console.log(matchArrays(['incapsulation','OOP','array'],
// ['time', 'propert','paralelism','OOP']),1);;

// function swapHeadAndTail(arr) {

//   let lenArr = arr.length;
//   if (lenArr % 2 == 0) {

//     return arr.slice(lenArr / 2, lenArr).concat(arr.slice(0, lenArr / 2));
//   }else{
//     return arr.slice(Math.ceil(lenArr / 2), lenArr).concat(arr.slice(arr.length/2,arr.length/2+1)).concat(arr.slice(0, lenArr / 2));
//   }
// }

// console.log((swapHeadAndTail([1, 2, 3, 4,5])));

// function averageLength(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     sum += element.length;
//   }
//   let adv = Math.round(sum / arr.length);
//   let finalArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     let el = arr[i];
//     finalArr.push(el[0].repeat(adv));
//   }
//   return finalArr;
// }

// console.log(averageLength(["aa", "bb", "ddd", "eee"]));

// function whatCentury(year) {
//   let a = `${Math.ceil(year / 100)}`;
//   let end = "";
//   console.log(a[1]);
//   if (a < 21) {
//     end += "th";
//   } else if (a[1] === "1") {
//     end = "th";
//   } else if (a[1] === "2") {
//     end = "nd";
//   } else if (a[1] === "3") {
//     end = "rd";
//   }
//   console.log(end);
//   return a + end;
// }

// console.log(whatCentury(2211));

// var arrayLeaders = (numbers) => {
//   let finalArr = [];

//   for (let i = 0; i < numbers.length; i++) {
//     let sum = 0;
//     const element = numbers[i];
//     for (let j = i + 1; j < numbers.length; j++) {
//       sum += numbers[j];
//     }
//     if (numbers[i] > sum) {
//       finalArr.push(numbers[i]);
//     }
//   }

//   return finalArr;
// };

// console.log(arrayLeaders([-36, -12, -27]));

// function unusedDigits(...dig) {
//   let a = dig.join("");
//   let finNum = "";

//   for (let i = 0; i < 10; i++) {
//     if (!a.includes(i)) {
//       finNum += i;
//     }
//   }

//   return finNum;
// }

// console.log(unusedDigits(12, 34, 56, 78));

// function isNice(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     if (!arr.includes(arr[i]+ 1) && !arr.includes(arr[i] - 1)) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isNice([]));

// function evenAndOdd(num) {
//   let a = num.toString().split("");
//   let even = a.filter((item) => item % 2 == 0).join("");
//   let odd = a.filter((item) => item % 2 !== 0).join("");
//   return [+even, +odd];
// }

// console.log(evenAndOdd(126453));

// var uniqueInOrder=function(it){

//   let fin =[]

//   for (let i = 0; i < it.length; i++) {
//     const element = it[i];
//     if (it[i] !== it[i+1] ) {
//       fin.push(it[i])
//     }
//   }

// return fin

// }

// console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])

// function ArithmeticSequenceSum(a, r, n) {
//   let sum = 0;

//   for (let i = 0; i < n; i++) {
//     sum += i * r + a;
//   }

//   return sum;
// }

// console.log(ArithmeticSequenceSum(3, 2, 20), 440);

// function findDup(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
//       return arr[i];
//     }
//   }
// }

// console.log(findDup([1, 2, 4, 2, 3]), 2);

// function palindrome(num) {
//   if (typeof num !== "number" || num < 0) {
//     return "Not valid";
//   }
//   let a = num.toString().split("");
//   let b = num.toString().split("").reverse();

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== b[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(palindrome("aa"), true);

// function factorial(n) {
//   if (n < 0) return null;
//   let sum = 1;
//   for (let i = 1; i <= n; i++) {
//     sum *= i;
//   }
//   return sum;
// }
// console.log(factorial(5));

// function reOrdering(text){
//   let a = text.split(" ")

//   let finalStr=""

//   for (let i = 0; i < a.length; i++) {
//     if (a[i][0] == a[i][0].toUpperCase()) {
//       finalStr = a[i] +" "
//     }
//   }
//   for (let i = 0; i < a.length; i++) {
//     if (a[i][0] == a[i][0].toLowerCase()) {
//       console.log(a[i]);
//       finalStr += a[i]+" "
//     }

//   }

//   return finalStr.trim()
// }

// console.log(reOrdering('wario LoBan hello'), 'LoBan wario hello');;

// function cutFruits(fruits){

//   let frName =[ 'apple',
//   'pear',
//   'banana',
//   'watermelon',
//   'grape',
//   'plum',
//   'blueberry',
//   'persimmon', ]

//   let finArr=[]

//   fruits.forEach(fruit => {

//     if (frName.includes(fruit)) {

//       if (fruit.length %2 !==0) {
//          console.log(fruit);
//          finArr.push(fruit.slice(0,Math.ceil(fruit.length/2)))
//          finArr.push(fruit.slice(Math.ceil(fruit.length/2)))
//       }
//       else{
//         finArr.push(fruit.slice(0,Math.ceil(fruit.length/2)))
//         finArr.push(fruit.slice(Math.ceil(fruit.length/2)))

//       }
//     }else{
//       finArr.push(fruit)
//     }

//   });
//   console.log(finArr);
//   return finArr
// }

// console.log(cutFruits(["apple","pear","banana","bomb"]),["app","le","pe","ar","ban","ana","bomb"]);

// function findAB(numbers, c) {
//   let pairs = [];

//   for (let i = 0; i < numbers.length; i++) {

//     for (let j = i+1; j < numbers.length; j++) {

//       if (numbers[i] * numbers[j] == c) {
//         console.log(numbers[i],numbers[j]);
//         pairs.push([numbers[i],numbers[j]])
//       }

//     }
//   }
//   if (pairs.length<1) {
//     return null
//   }else{
//     return pairs[0]
//   }
//   console.log(pairs[0]);
// }

// console.log(findAB([1, 2, 3, 6], 6), [1, 6]);

// function countArara(n) {

//   const obj ={
//     1:"anane",
//     2:"adak"
//   }

//   final=""

//   for (let i = 2; i <= n; i+=2) {
//     final +=obj[2]+" "
//     console.log(i);
//   }
//   if (n%2 !==0) {
//     final +=obj[1]+" "
//   }
//   return final.trim()
// }

// console.log(countArara(3));;

// function invertHash(hash) {
//   let c = {};

//   for (let key in hash) {
//     let a = key;
//     let b = hash[key];

//     c[b] = a;
//   }

//   return c
// }

// console.log(invertHash({ hello: "world", foo: "bar" }));

// function reOrdering(text) {
//   let a = text.split(" ");

//   let fil = a.filter((item, i) => item[0] !== item[0].toUpperCase()).join(" ");
//   let fin = "";
//   for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     if (element[0] === element[0].toUpperCase()) {
//       fin += element + " " + fil;
//     }
//   }

//   return fin.trim();
// }

// console.log(reOrdering("wario LoBan hello"), "LoBan wario hello");

// function findAB(numbers,c){

//   let finalArr=[]

//   for (let i = 0; i < numbers.length; i++) {

//     for (let j = i+1; j < numbers.length; j++) {
//       const element = numbers[j];
//       if (numbers[i] * numbers[j] == c) {
//         finalArr.push(numbers[i],numbers[j])
//       }
//     }
//   }

//   if (finalArr.length <2) {
//     return null
//   }
// return finalArr.slice(0,2)
// }

// console.log(findAB([1,2,3,4,5,6,5],15), [3,5]);;

// function similarity(a, b) {
//   let elInBoth = [];
//   let comb = [];

//   for (let i = 0; i < a.length; i++) {
//     if (b.includes(a[i])) {
//       elInBoth.push(a[i]);
//     }
//   }

//   comb = a.concat(b);
//   let c = [...new Set(comb)];
//   return elInBoth.length / c.length;
// }
// console.log(similarity([1, 2, 4, 6, 7], [2, 3, 4, 7]), 0.5);

// function scratch(lottery){
//   let a = lottery.join(" ").split(" ")
//   let sum =0

//   for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     console.log(a[i]);
//     if (a[i] === a[i+1] ) {
//       let c = a[i]
//       if (c == a[i+2]) {
//         console.log(a[i+3]);
//         sum +=+a[i+3]
//       }
//     }
//   }

// console.log(sum);
//   console.log(a);

// }

// console.log(scratch([
//   "tiger tiger tiger 100",
//   "rabbit dragon snake 100",
//   "rat ox pig 1000",
//   "dog cock sheep 10",
//   "horse monkey rat 5",
//   "dog dog dog 1000"
//   ]),1100);

// function playerManager(players) {
//   if (players.length < 1) {
//     return [];
//   }
//   let a = players.split(", ");

//   console.log(a);

//   let arr = [];
//   for (let i = 0; i < a.length; i += 2) {
//     let obj = {};
//     const element = a[i];
//     obj["player"] = a[i];
//     obj["contact"] = +a[i + 1];
//     console.log(obj);
//     arr.push(obj);
//   }
//   return arr;
// }

// console.log(playerManager("John Doe, 8167238327, Haris Doe, 8163723827"));

// function convert(number) {
//   let num = [];
//   while (number.length > 0) {
//     num.push(number.slice(0, 2));
//     number = number.slice(2);
//   }
//   let finStr = "";

//   for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     console.log(element);
//     finStr += String.fromCharCode(element);
//   }

//   return finStr;
// }

// console.log(convert("73327673756932858080698267658369"));

// function stickyCalc(operation, val1, val2) {
//   let a = Math.round(val1).toString();
//   let b = Math.round(val2).toString();
//   let c = a + b;

//   if (operation == "+") {
//     return Math.round(+c + val2);
//   }
//   if (operation == "-") {
//     return +c - val2;
//   }
//   if (operation == "*") {
//     return c * val2;
//   }
//   if (operation == "/") {
//     return Math.round(c / val2);
//   }
// }
// console.log(stickyCalc("+", 4.7, 7.2), 54);

// function digPow(n, p){

//   let a = n.toString().split("")

//   let sum =0

//   for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     sum += Math.pow(a[i],p+i)
//   }
//   if (sum%n==0) {
//     return sum/n
//   }
//   return -1
// console.log(sum);
// }

// console.log(digPow(46288, 3), 51);

// function expandedForm(num) {
//   num = num.toString();
//   let a = [];
//   let b = [];
//   for (let i = num.length - 1; i >= 0; i--) {
//     console.log(i);
//     a.push("0".repeat(i));
//   }

//   for (let j = 0; j < num.length; j++) {
//     const element = num[j];
//     console.log(element);
//     b.push(num[j] + a[j]);
//   }
//   let c = b.filter((item) => item > 0);

//   let fin = "";
//   for (let k = 0; k < c.length; k++) {
//     const element = c[k];
//     fin += " + " + c[k];
//   }
//   return fin.slice(3);
//   console.log(fin.slice(3));
// }
// console.log(expandedForm(70304), "70000 + 300 + 4");

// function solution(string) {
//   let a = "";

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === string[i].toUpperCase()) {
//       a += " ";
//     }

//     a += string[i];
//   }
// return a
// }

// console.log(solution("camAdsFsd"));

// function count (string) {

//   let obj ={}

//   for(let i=0;i<string.length;i++){
//     obj[string[i]] = (obj[string[i]] + 1) || 1
//   }
//   return obj
// }

// console.log(count("abscsa"));

// function twoSum(numbers, target) {
//   for (let i = 0; i < numbers.length - 1; i++) {
//     const element = numbers[i];
//     for (let j = i + 1; j < numbers.length; j++) {
//       console.log(numbers[i]);
//       console.log(numbers[j]);
//       if (numbers[i] + numbers[j] == target) {
//         return [numbers.indexOf(numbers[i]), numbers.indexOf(numbers[j])];
//       }
//     }
//   }
// }

// console.log(twoSum([2, 2, 3], 4));

// function arrAdder(arr) {
//   let str = "";

//   for (let i = 0; i < arr[0].length; i++) {
//     const element = arr[i];
//     console.log(arr[i].length);
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[j][i] !== undefined) {
//         str += arr[j][i];
//       }
//     }
//     str += " ";
//   }

//   return str.trim();
// }

// let Adder = [
//   ["J", "L", "L", "M"],
//   ["u", "i", "i"],
//   ["", "v", "f", "n"],
//   ["", "e", ""],
// ];

// console.log(arrAdder(Adder));

// const xMarksTheSpot = (input) => {
//   let a = [];

//   let b = input.forEach((element, i) => {
//     for (let j = 0; j < element.length; j++) {
//       if (element[j] == "x") {
//         console.log(i, j);
//         a.push(i, j);
//       }
//     }
//   });
//   return a.length < 3 ? a : [];
// };

// const a = [
//   ["o", "o", "o", "0", "o", "o", "o", "o"],
//   ["o", "o", "o", "o", "o", "o", "o", "o"],
//   ["o", "o", "o", "o", "o", "o", "o", "o"],
//   ["o", "o", "o", "o", "o", "o", "o", "o"],
//   ["o", "o", "o", "o", "o", "o", "x", "o"],
//   ["o", "o", "o", "o", "o", "o", "o", "o"],
// ];

// console.log(xMarksTheSpot(a));

// function dropCap(n) {
//   let a = n.split(" ");
//   return a
//     .map((item, i) =>
//       item.length > 2
//         ? item[0].toUpperCase() + item.slice(1).toLowerCase()
//         : item
//     )
//     .join(" ");
// }

// console.log(dropCap("Apple of Banana"), "Apple Banana");

// function sumFromString(str) {
//   return str
//     .replace(/[^0-9]/g, " ")
//     .split(" ")
//     .filter((item) => item !== "")
//     .reduce((sum, item) => sum + +item, 0);
// }

// console.log(sumFromString("as1+1=20"));

// function isAllPossibilities(x) {
//   console.log(x);
//   x = x.sort();
//   for (let i = 0; i < x.length; i++) {
//     const element = x[i];
//     console.log(i);
//     if (element !== i) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isAllPossibilities([0, 2, 1, 3, 4]));

function sentencify(words) {
  let finWord = words[0][0].toUpperCase();

  finWord += words.join(" ").slice(1) + ".";
  return finWord;
}

console.log(sentencify(["let", "there", "be", "light"]));
