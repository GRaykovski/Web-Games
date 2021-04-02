var randomNumber1 = Math.random();
var randomNumber2 = Math.random();

randomNumber1 *= 6;
randomNumber2 *= 6;

randomNumber1 = Math.floor(randomNumber1);
randomNumber2 = Math.floor(randomNumber2);

var dice = ["images/dice1.png", "images/dice2.png", "images/dice3.png",
            "images/dice4.png", "images/dice5.png", "images/dice6.png"];
document.querySelector(".img1").src = dice[randomNumber1];
document.querySelector(".img2").src = dice[randomNumber2];

if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player 2 Wins!🚩";
} else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerText = "Draw!";
}
