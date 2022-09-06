//membuat variabel gameplay
const result_h1 = document.querySelector(".result")
const batu_div = document.getElementById("batu");
const kertas_div = document.getElementById("kertas");
const gunting_div = document.getElementById("gunting");

//membuat variabel untuk scoring
let playerScore = 0;
let computerScore =0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("score-board");

//membuat pilihan random untuk komputer
function getComputerChoice(){
  const choices = ['batu','kertas','gunting'];
  const randomNumber = (Math.floor(Math.random()*3));
  return choices[randomNumber];
}

//memanggil fungsi saat kondisi player menang 
function win(playerChoice,computerChoice){
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML= computerScore;
  result_h1.textContent = `Player MENANG!, ${playerChoice} mengalahkan ${computerChoice}. `
}

//memanggil fungsi saat kondisi player kalah
function lose(playerChoice,computerChoice){
  computerScore++;
  result_h1.textContent = `player KALAH!, ${playerChoice} kalah oleh ${computerChoice}`
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore
}

//memanggilfungsi saat kondisi player seri dengan komputer
function draw(playerChoice,computerChoice){
  result_h1.textContent = `game SERI! ${playerChoice} seimbang dengan ${computerChoice}.`
}

//membuat fungsi gameplay dan kondisi permainan dengan switch case
function gameplay (playerChoice){
  const computerChoice = getComputerChoice();
  switch(playerChoice+computerChoice){
    case"batugunting":
    case"kertasbatu":
    case"guntingkertas":
    win(playerChoice,computerChoice);
    break;
    case"batukertas":
    case"kertasgunting":
    case"guntingbatu":
    lose(playerChoice,computerChoice);
    break;
    case"batubatu":
    case"kertaskertas":
    case"guntinggunting":
    draw(playerChoice,computerChoice);
  }
}

//membuat fungsi saat mengklik dan memanggil fungsi gameplay
function main(){
  batu_div.addEventListener('click', function(){
    gameplay("batu");
  })
  kertas_div.addEventListener('click', function(){
    gameplay("kertas");
  })
  gunting_div.addEventListener('click', function(){
    gameplay("gunting");
  })
}

//memanggil fungsi saat player klik
main();