// List 5 mutating and non-mutating array methods that fall under each of them
Mutating array methods:
push() - adds one or more elements to the end of the array and returns the new length of the array.
pop() - removes the last element from the array and returns that element.
splice() - removes, replaces, or inserts elements into the array at a specified index.
shift() - removes the first element from the array and returns that element.
unshift() - adds one or more elements to the beginning of the array and returns the new length of the array.

Non-mutating array methods:
concat() - returns a new array that is a combination of two or more arrays.
slice() - returns a new array that contains a portion of the original array.
join() - returns a string that is a concatenation of all the elements in the array.
map() - returns a new array that is the result of applying a function to each element in the array.
filter() - returns a new array that contains all elements that pass a test specified by a function.


//Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// Add 'Kotlin' to the end of the array
languages.push('Kotlin');

// Add 'Java' after 'Ruby'
languages.splice(3, 0, 'Java');

// Remove the first item in the array
languages.shift();

// Add 'Scala' and 'Swift' to the beginning of the array
languages.unshift('Scala', 'Swift');

// Replace 'PHP' with 'Go' and 'Rust'
languages.splice(2, 1, 'Go', 'Rust');

console.log(languages); // Output: ["Scala", "Swift", "C#", "JavaScript", "Go", "Rust", "Ruby", "Java", "Python", "Kotlin"]
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// Add 'Kotlin' to the end of the array
languages.push('Kotlin');

// Add 'Java' after 'Ruby'
languages.splice(3, 0, 'Java');

// Remove the first item in the array
languages.shift();

// Add 'Scala' and 'Swift' to the beginning of the array
languages.unshift('Scala', 'Swift');

// Replace 'PHP' with 'Go' and 'Rust'
languages.splice(2, 1, 'Go', 'Rust');

console.log(languages); // Output: ["Scala", "Swift", "C#", "JavaScript", "Go", "Rust", "Ruby", "Java", "Python", "Kotlin"]


// What will be the value of fruit after calling the function changeFruit?
After calling the function changeFruit, the value of fruit will be ['apple', 'mango', 'orange']


// Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
function findMaxValue(numbers) {
  let max = numbers[0]; // assume the first element is the maximum

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i]; // update the maximum value
    }
  }

  return max;
}

// Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array
function valTimesIndex(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * i);
  }

  return result;
}
