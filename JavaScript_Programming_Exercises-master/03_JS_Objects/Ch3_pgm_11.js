// Using a property in a calculation

var player1;

player1 = {
	  name: "Max",
	  score: 0
};

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score + 50;

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score + ((10/100)*player1.score);
console.log(player1.score);

var player2;

player2 = {
	  name: "Maz",
	  score: 20
};

console.log(" the sum of the score of "+player1.name + " and "+ player2.name +" is " +(player1.score+player2.score));
/* Further Adventures
 *
 * 1) Write code to increase player1's score by 10%.
 *
 * 2) Add a second player.
 *
 * 3) Use the players' properties to find the sum
 *    of their scores and log it to the console,
 *    along with an appropriate message that includes
 *    their names.
 *
 */