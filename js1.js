confirm("I am ready to play!");
var age = prompt("What's your age?");

if(age < 13)
{
    console.log("Less than 13");
}
else
{
    console.log("Older than 13");
}  
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");

console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

var userAnswer = prompt("Do you want to race Bieber on stage?");

if (userAnswer == "yes")
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
else
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
    
var feedback = prompt("Rate this game from 0 to 10.");

if (feedback > 8)
    console.log("Thank you! We should race at the next concert!");
else
    console.log("I'll keep practicing coding and racing.");



var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if(computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

compare = function(choice1, choice2) {
if (choice1 === choice2)
    return "The result is a tie!";
else if (choice1 === "rock")
    if (choice2 === "scissors")
        return "Rock wins";
    else 
        return "Paper wins";
else if (choice1 === "paper")
    if (choice2 === "rock")
        return "Paper wins";
    else
        return "Scissors wins";
else if (choice1 === "scissors")
    if (choice2 === "rock")
        return "Rock wins";
    else
        return "Scissors wins";
};
compare(userChoice, computerChoice);
