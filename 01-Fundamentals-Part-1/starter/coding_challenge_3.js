// two teams, and compete against each other 3 times
// 1. Calculate the average score for each team

dolphinsGame1 = 96;
dolphinsGame2 = 108;
dolphinsGame3 = 89;

koalasGame1 = 88;
koalasGame2 = 91;
koalasGame3 = 110;

dolphinsAvg = (dolphinsGame1 + dolphinsGame2 + dolphinsGame3) / 3;
koalasAvg = (koalasGame1 + koalasGame2 + koalasGame3) / 3;

// 2. Compare team's average scores to determine winner
console.log(
  `Dolphins scored on average ${dolphinsAvg} and Koalas scored avg ${koalasAvg}`
);

if (dolphinsAvg > koalasAvg) {
  console.log('Dolphins win!');
} else if (koalasAvg > dolphinsAvg) {
  console.log('Koalas win!');
} else {
  console.log('Game draw!');
}

// Bonus 1: include requirement for a minimum score of 100

dolphinsGame1 = 97;
dolphinsGame2 = 112;
dolphinsGame3 = 101;

koalasGame1 = 109;
koalasGame2 = 95;
koalasGame3 = 123;

dolphinsAvg = (dolphinsGame1 + dolphinsGame2 + dolphinsGame3) / 3;
koalasAvg = (koalasGame1 + koalasGame2 + koalasGame3) / 3;

// 2. Compare team's average scores to determine winner
console.log(
  `Dolphins scored on average ${dolphinsAvg} and Koalas scored avg ${koalasAvg}`
);

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
  console.log('Dolphins win! 🏆');
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
  console.log('Koalas win!');
} else {
  console.log('Game draw!');
}
