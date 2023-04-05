// Lecture 39 Intro to Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// literal syntax with []
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(friends[0]);
// length property of array
console.log(friends.length);
// get last element in array using array indexing and operations
console.log(friends[friends.length - 1]);

// mutate array even tho it's declared with const. With const, cannot replace the entire array
friends[2] = 'Jay';
console.log(`After mutating 3rd element: ${friends}`);

// create object array with new (not used as often)
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

// modifying calc array average
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const bornYears = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(bornYears[0]));

/* Lecture 40 Array Operations */
// Push to add to end of array
const newLength = friends.push('Haillo');
console.log(`Push added new friends for total ${newLength} friends`);

// Unshift to add to front of array
friends.unshift('First');
console.log(`Push added new friends for ${friends} friends`);

// Remove elements
const popped = friends.pop(); // Remove last element and return removed item
console.log(`${friends} and removed ${popped}`);

const shifted = friends.shift(); // Remove first
console.log(`${friends} and removed ${shifted}`);

// Show where element is
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

// Boolean check if element is there (does not do type coercion)
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
