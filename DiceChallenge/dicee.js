var selectImg = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png",];

var randomDiceNo1 = Math.floor(Math.random()*6);
var randomDiceNo2 = Math.floor(Math.random()*6);
console.log(randomDiceNo1>randomDiceNo2)
if(randomDiceNo1 > randomDiceNo2){
    document.querySelector("h1").textContent = "Player 1 wins!";
}else if (randomDiceNo1 < randomDiceNo2){
    document.querySelector("h1").textContent = "Player 2 wins!";
}
else{
    document.querySelector("h1").textContent = "Tie!";
}

document.querySelector(".img1").setAttribute("src", selectImg[randomDiceNo1]);
document.querySelector(".img2").setAttribute("src", selectImg[randomDiceNo2]);

