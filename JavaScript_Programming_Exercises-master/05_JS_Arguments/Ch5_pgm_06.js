// A function with two arguments

var showSum;
var showproduct;
var showdiff;
var showquotient;


showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};
showSum(3, 60);
showSum(2.8, -5);
showSum(5,74)

showproduct = function (number1, number2) {
	var mul = number1*number2;
	console.log(" the multiple is "+mul);
};
showproduct(3, 60);
showproduct(2.8, -5);
showproduct(5,74)

showdiff = function (number1, number2) {
	var diff = number1-number2;
	console.log(" the difference is "+diff);
};
showdiff(23,80);
showdiff(2,80);
showdiff(23,8);

showquotient = function (number1, number2) {
	var quotient = number1/number2;
	console.log(" the division is "+quotient);
};
showquotient(2,1);
showquotient(70,5);
showquotient(235,8);

/* Further Adventures
 *
 * 1) Use the showSum function to add 56 and 74.
 *
 * To multiply two numbers, use the * symbol.
 * e.g. 3 * 5 is 3 multiplied by 5.
 *
 * 2) Create a showProduct function to multiply two numbers.
 *
 * 3) Use your function to multiply three pairs of numbers.
 *
 * To divide one number by another, use /.
 * e.g. 10 / 2 is 10 divided by 2.
 *
 * 4) What about showDifference and showQuotient
 *    for subtraction and division?
 *
 */