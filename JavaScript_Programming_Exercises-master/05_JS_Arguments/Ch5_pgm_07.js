// Displaying a player's name

var showPlayerName;

showPlayerName = function (playerName) {
    console.log("The player name is "+playerName);
    console.log("the string length of the player is "+ playerName.length);
};

showPlayerName("Kandra");
showPlayerName("Dammy");




/* Further Adventures
 *
 * 1) Update the text logged so that it is
 *    of the form:
 *    The player's name is Kandra
 *
 * Strings have a length property that gives
 * the number of characters in the string.
 * e.g. playerName.length.
 *
 * 2) Make the function show the number
 *    of letters in the player's name.
 *
 */