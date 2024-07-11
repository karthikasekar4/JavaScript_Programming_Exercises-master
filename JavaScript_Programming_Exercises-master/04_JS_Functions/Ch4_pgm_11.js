// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

var question1 ;
var question2;
var question3;

question1 = {
    Question1 : " what is the expansion of HTML?",
    Option1: "Hyper text markup language",
    Option2: "Hyper text mark language",
    Option3: "Hyper type markup language",
}

question2 = {
    Question1 : " what is the expansion of JS ?",
    Option1:"Java script " ,
    Option2: " jquery script",
    Option3: " java sechedule ",
}

question3 = {
    Question1 : " what is the expansion of CSS ?",
    Option1:"cascading style sheet " ,
    Option2: " cascading styling sheet ",
    Option3: "cascading style sheat ",
}

console.log(question1);
console.log(question2);
console.log(question3);


/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */