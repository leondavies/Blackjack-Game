let cards = []
let dCards = []
let sum = 0
let dSum = 0
let balance = 0
let playerbet = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let chipsEl = document.getElementById("Chips")
let dcardsEl = document.getElementById("dcards-el")
let dsumEl = document.getElementById("dsum-el")




function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard


    renderGame()
    dealerCards()
}

function dealerCards() {
    let firstCard = getRandomCard()

    dCards = [firstCard]
    dSum = firstCard

    dcardsEl.textContent = "Dealer Cards: " + dCards





}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}



function stand() {
    var x = document.getElementById("options");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    showdealercard()

}

function showdealercard() {
    var x = document.getElementById("Dealercard");
    x.style.display = "block";

    if (sum === 21 && cards.length === 2) {
        messageEl.textContent = "Player wins!"

        //UP TO HERE
    } else {
        dealerhit()
    }


}

function dealerhit() {
    while (dSum <= sum && dSum <= 17) {

        if (dSum > 21) {
            messageEl.textContent = "Player wins!"
            balance += playerbet
            console.log("here")
        } else if (dSum < 21) {
            let card = getRandomCard()
            dSum += card
            dCards.push(card)
            dsumEl.textContent = dSum
            dcardsEl.textContent = dCards
            balance += playerbet
            console.log("here1")



        } else {
            "Player loses!"
            console.log("here2")

        }

    }

}




function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function playerName() {
    let name = window.prompt("Enter your name: ");
    alert("Welcome " + name);



}


function betamount() {
    let betamount = window.prompt("How much would you like to bet: ");
    intbet = parseInt(betamount)
    balance -= intbet
    playerbet += intbet
    chipsEl.textContent = "Balance: " + balance


}



function depositAmount() {
    let deposit = window.prompt("How much would you like to deposit today?: ");
    alert(deposit + " Deposited, Good luck");
    intdeposit = parseInt(deposit)
    balance += intdeposit
    chipsEl.textContent = "Balance: " + balance
    betamount()


}

function hide() {

    var x = document.getElementById("start");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    showdealer()

}

function showdealer() {

    var x = document.getElementById("Hidden");
    x.style.display = "block";

    startGame()


}