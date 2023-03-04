// QUESTION 1A
// What are the differences between mutating array methods and
//  non-mutation array methods in JavaScript. List 5 array
// methods that fall under each of them.

// ANSWERS
// Mutating methods are ones that change the object after the method has been used.
// EXAMPLES

// .push() — Adds a new item as the last item of the array.
let names = ["Clara", "Godwin", "Faith"];
names.push("Peace");
console.log(names); /* ANSWER [ 'Clara', 'Godwin', 'Faith', 'Peace' ]*/

// .pop() — Removes the last item of the array.
let churches = ["Catholic", "Redeem", "Faith", "Assemblies"];
churches.pop();
console.log(churches); /* ANSWER [ 'Catholic', 'Redeem', 'Faith' ]*/

// .unshift() — Adds a new item as the first item of the array.
let addChurches = ["Catholic", "Redeem", "Faith", "Assemblies"];
addChurches.unshift("Presbyterian");
console.log(
  addChurches
); /* ANSWER [ 'Presbyterian', 'Catholic', 'Redeem', 'Faith', 'Assemblies' ]*/

// .shift() — Removes the first item of the array.
let removeChurches = ["Catholic", "Redeem", "Faith", "Assemblies"];
removeChurches.shift();
console.log(removeChurches); /*ANSWER [ 'Redeem', 'Faith', 'Assemblies' ]*/

// .reverse() — Reverses the order of the array.
let reverseChurches = ["Catholic", "Redeem", "Faith", "Assemblies"];
reverseChurches.reverse();
console.log(
  reverseChurches
); /*ANSWER [ 'Assemblies', 'Faith', 'Redeem', 'Catholic' ]*/

// QUESTION 1B)
// Non-mutating methods do not change the object after the method has been used
// EXAMPLES

// Array.prototype.slice()
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2)); /*ANSWER [ 'camel', 'duck', 'elephant' ] */

// Array.prototype.concat()
const num1 = ["a", "b", "c"];
const num2 = ["d", "e", "f"];
const concatNum = num1.concat(num2);
console.log(concatNum); /* ANSWER [ 'a', 'b', 'c', 'd', 'e', 'f' ] */

// Array.prototype.map()
const array1 = [1, 4, 9, 16];
const map1 = array1.map(function (x) {
  return x * x;
  // const map1 = array1.map(x => x * x);
});
console.log(map1); /* ANSWER [ 1, 16, 81, 256 ] */

// Array.prototype.find()
const array = [5, 12, 8, 130, 44];
const found = array.find((element) => element > 10);
console.log(found); /* ANSWER 12 */

// Array.prototype.filter()
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);
console.log(result); /* ANSWER [ 'exuberant', 'destruction', 'present' ] */

// QUESTION 2
let languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];

// Adding ‘Kotlin’ to the end of the array
languages.push("Kotlin");
console.log(
  languages
); /* ANSWER [ 'C#', 'JavaScript', 'Ruby', 'PHP', 'Python', 'Kotlin' ] */

// Adding ‘Java’ after ‘Ruby’
let languages2 = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
languages2.splice(3, 0, "Java");
console.log(
  languages2
); /* ANSWER [ 'C#', 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python' ] */

// Removing the first item in the array
let languages3 = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
languages3.shift();
console.log(languages3); /* ANSWER [ 'JavaScript', 'Ruby', 'PHP', 'Python' ] */

// Add ’Scala’ and ‘Swift’ to the beginning of the array
let languages4 = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
languages4.unshift("Scala", "Swift");
console.log(
  languages4
); /* ANSWER [ 'Scala', 'Swift', 'C#', 'JavaScript', 'Ruby', 'PHP', 'Python' ] */

// Replace ‘PHP’ with ‘Go’ and ‘Rust’
let languages5 = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
languages5.splice(3, 1, "Go", "Rust");
console.log(
  languages5
); /* ANSWER [ 'C#', 'JavaScript', 'Ruby', 'Go', 'Rust', 'Python' ] */

// QUESTION 3
// What will be the value of fruit after calling the function changeFruit?
let fruit = ["apple", "mango", "banana"];
function changeFruit(fruit) {
  fruit[2] = "orange";
  return fruit;
}
console.log(changeFruit(fruit)); // ANSWER - The value of fruit will be [ 'apple', 'mango', 'orange' ]

// QUESTION 4
// Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
function maxNum([a, b, c, d]) {
  const array1 = [a, b, c, d];
  return Math.max(...array1);
}
console.log(maxNum([10, 12, 43, 31])); /* ANSWER 43 */

// QUESTION 5
// Write a function called valTimesIndex which accepts an array of numbers and
// returns a new array with each value multiplied by the index it is at in the array:

function valTimesIndex([a, b, c, d]) {
  const numbers = [a, b, c, d];
  const filteredNumbers = numbers.map((num, index) => {
    return num * index;
  });
  return filteredNumbers;
}
console.log(valTimesIndex([1, 2, 3, 4])); /* ANSWER [ 0, 2, 6, 12 ] */
