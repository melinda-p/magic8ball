$(document).ready(function(){
	var magic8Ball = {};
	magic8Ball.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes - definitely", "You can rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Concentrate and ask again", "Cannot predict now", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
	$("#answer").hide();

	magic8Ball.askQuestion = function(question) {
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
		$("#8ball").effect("shake");
	var randomNumber = Math.random();
	var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
	var randomIndex = Math.floor(randomNumberForListOfAnswers);
	var answer = this.listOfAnswers[randomIndex];
	$("#answer").fadeIn(4000);
		$("#answer").text(answer);
		console.log(question);
console.log(answer);
	};
	var onClick = function() {
 $("#answer").hide();
    var question = prompt("ASK A YES/NO QUESTION!");
    magic8Ball.askQuestion(question);
};

$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
$("#8ball").fadeIn(4000);

		setTimeout(
		function (){
var question = prompt("Ask a yes or no question");
           magic8Ball.askQuestion(question);
       }, 500);

			 $("#questionButton").click( onClick );
});
