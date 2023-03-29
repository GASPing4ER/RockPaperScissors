const options = ["rock", "paper", "scissors"]

playerPoints = 0
computerPoints = 0

const playerResult = document.createElement("h1");
const computerResult = document.createElement("h1");
const medium = document.createElement("h1")

medium.textContent = "-"

const btns = document.querySelectorAll(".btn")
const OverallResult = document.querySelector(".result")
const finalResult = document.querySelector(".final-result")

computerResult.textContent = computerPoints
playerResult.textContent = playerPoints


OverallResult.appendChild(playerResult)
OverallResult.appendChild(medium)
OverallResult.appendChild(computerResult)

let getComputerChoice = () => options[Math.floor(Math.random()*options.length)]

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection == computerSelection) {
        return "It's a draw!"
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "Player wins!"
        } else {
            return "Computer wins!"
        }
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return "Player wins!"
        } else {
            return "Computer wins!"
        }
    } else {
        if (computerSelection == "paper") {
            return "Player wins!"
        } else {
            return "Computer wins!"
        }
    }
}

btns.forEach((button) => {
    button.addEventListener("click", () => {
        result = playRound(button.id, getComputerChoice())
        if (result === "Computer wins!") {
            computerPoints ++
            computerResult.textContent = computerPoints
            if (playerPoints === 5) {
                finalResult.textContent = "PLAYER WON!";
                computerPoints = 0;
                playerPoints = 0;
            } else if (computerPoints === 5) {
                finalResult.textContent = "COMPUTER WON!"
                computerPoints = 0;
                playerPoints = 0;
            }
        } else if (result === "Player wins!") {
            playerPoints ++
            playerResult.textContent = playerPoints
            if (playerPoints === 5) {
                finalResult.textContent = "PLAYER WON!";
                computerPoints = 0;
                playerPoints = 0;
            } else if (computerPoints === 5) {
                finalResult.textContent = "COMPUTER WON!"
                computerPoints = 0;
                playerPoints = 0;
            }
        }
    })
})









// while (playerPoints < 5 && computerPoints < 5) {
//     let result = playRound(playerSelection, getComputerChoice())
//     if (result == "Computer wins!") {
//         computerPoints++
//     } else if (result == "Player wins!") {
//         playerPoints++
//     }
//     alert(result + " Player Points: " + playerPoints + " Computer Points: " + computerPoints)
//     console.log(result + " Player Points: " + playerPoints + " Computer Points: " + computerPoints)
// }
// if (playerPoints == 5) {
//     console.log()
//     alert("CONGRATULATIONS PLAYER! YOU WON AGAINST THE COMPUTER!")
// } else {
//     alert("YOU SUCK! DO BETTER")
// }