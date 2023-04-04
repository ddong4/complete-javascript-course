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
