const options = ["rock", "paper", "scissors"]

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

let game = () => {
    playerPoints = 0
    computerPoints = 0
    while (playerPoints < 5 && computerPoints < 5) {
        let playerSelection = prompt("Choose rock, paper, scissors!").toLowerCase()
        let result = playRound(playerSelection, getComputerChoice())
        if (result == "Computer wins!") {
            computerPoints++
        } else if (result == "Player wins!") {
            playerPoints++
        }
        alert(result + " Player Points: " + playerPoints + " Computer Points: " + computerPoints)
        console.log(result + " Player Points: " + playerPoints + " Computer Points: " + computerPoints)
    }
    if (playerPoints == 5) {
        console.log()
        alert("CONGRATULATIONS PLAYER! YOU WON AGAINST THE COMPUTER!")
    } else {
        alert("YOU SUCK! DO BETTER")
    }
}