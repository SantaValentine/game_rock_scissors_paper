const rockButton = document.getElementById("rock");
const scissorsButton = document.getElementById("scissors");
const paperButton = document.getElementById("paper");
const resultD = document.getElementById("result");
const scoreD = document.getElementById("score");

let playerScore = 0;
let computerScore = 0;

const choice = ["Камень", "Ножницы", "Бумага"];


function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

function pickWinner(player, computer) {
    if (player === computer) return "Ничья";
    if ((player === "Камень" && computer === "Ножницы") ||
        (player === "Ножницы" && computer === "Бумага") ||
        (player === "Бумага" && computer === "Камень")
    ) {
        return "player";
    }
    return  "computer";
}

function pointUpdate(winner) {
    if (winner === "player" ) playerScore++;
    else if (winner === "computer") computerScore++;
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = pickWinner(playerChoice, computerChoice);

    let message = `Вы выбрали: ${playerChoice}. Компьютер выбрал: ${computerChoice}. `;
    if (winner === "player") {
        message += "Поздравляю с вашей победой!!!";
    }else if (winner === "computer") {
        message += "Победа компьютера!!!";
    }else {
        message += "Победила дружба!!!";
    }



pointUpdate(winner);

resultD.textContent = message;
scoreD.textContent = `Ваш счет: ${playerScore} - ${computerScore} :Счет компьютера`;
}


rockButton.addEventListener("click", () => playGame("Камень"));
scissorsButton.addEventListener("click", () => playGame("Ножницы"));
paperButton.addEventListener("click", () => playGame("Бумага"));
