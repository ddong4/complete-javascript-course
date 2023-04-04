/* Two gymnastics teams, Dolphins and Koalas.
A team only wins if it has at least DOUBLE the average score of teh other team */

//1. Create arrow function calcAverage to calculate the average of 3 scores

const calcAverage = (a, b, c) => (a + b + c) / 3;

//2. Use the function to calculate the average for both teams

dolphinsAvgScore = calcAverage(44, 23, 71);
koalasAvgScore = calcAverage(65, 54, 49);

// console.log(`Dolphins average: ${dolphinsAvgScore}`);
// console.log(`Koalas average: ${koalasAvgScore}`);

//3. Create 'checkWinner' that takes average score of each team as parameters and logs winner
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No one wins! Koalas ${avgKoalas}. Dolphins ${avgDolphins}`);
  }
}

//4. Checkwinner of Data1 and Data2

checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));

checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));
