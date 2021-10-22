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

function descendingOrder(n) {
  const reverse = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return Number(reverse);
}

console.log(descendingOrder(1021));
