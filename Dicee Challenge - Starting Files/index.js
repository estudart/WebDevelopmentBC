var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var image1 = document.querySelector(".img1");
image1.setAttribute('src', './images/dice' + randomNumber1 + '.png')

var image2 = document.querySelector(".img2");
image2.setAttribute('src', './images/dice' + randomNumber2 + '.png')

if (randomNumber1 > randomNumber2) {
    var winner = document.querySelector("h1");
    winner.innerHTML = 'player 1 wins'
} else if (randomNumber1 === randomNumber2) {
    var winner = document.querySelector("h1");
    winner.innerHTML = 'Draw'
} else {
    var winner = document.querySelector("h1");
    winner.innerHTML = 'player 2 wins'
}
