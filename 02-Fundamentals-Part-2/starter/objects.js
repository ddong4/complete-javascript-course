// Lecture 42: Intro to Objects
// defines key value pairs
// for structured data

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schemdtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  birthYear: 2000,
  driverLicense: false,
};

// lecture 43 Dot vs. Bracket notation
console.log(jonas.lastName);
console.log(jonas['lastName']);

// can put any expression in the square brackets (can make computed property name)
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt(
  'What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends'
);
console.log(interestedIn);

// below won't work, because it looks for interestedIn, not what you put in prompt
console.log(jonas.interestedIn);

// this works, it will replace the variable
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(`Wrong request! ${interestedIn} not found!`);
}

// adding to the object
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschemdtman';
console.log(jonas);

// Jonas has 3 friends, and his best friend is called Micahel"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

// Lecture 44 Object Methods
// can add functions since they're coded as a value
jonas['calcAge'] = function (birthYear) {
  return 2037 - birthYear;
};
console.log(jonas.calcAge(2000));
console.log(jonas['calcAge'](1991));

jonas.calcOlderAge = function (birthYear) {
  return 2050 - birthYear;
};
console.log(jonas.calcOlderAge(2000));

// adding his birthyear and referencing itself
jonas.calcHisAge = function () {
  return 2037 - this.birthYear;
};
console.log(`Using this keyword returned age ${jonas.calcHisAge()}`);

// to save a new property into this keyword
jonas.calcSaveAge = function () {
  this.age = 2037 - this.birthYear;
  return;
};
jonas.calcSaveAge();
console.log(`Using saved returned age ${jonas.age}`);

// new function getSummary()
jonas.getSummary = function () {
  var summary = this.firstName + ' is a ' + this.age + ' and';
  if (this.driverLicense) {
    summary += ' has a ';
  } else {
    summary += ' does not have a ';
  }
  summary += "driver's license";
  return summary;
};
console.log(jonas.getSummary());
// or can do this.driverLicense ? 'a' : 'no'
