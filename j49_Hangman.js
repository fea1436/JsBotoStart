let randomPhrases = ["esteghlal", "manchester", "galatasaray", "liverpool", "bayern"];
let randomSelected = "";
let phraseInClue = "";
let clicked = [];
let mistakes = 0;

function setUnderscorres() {
    let splittedWord = randomSelected.split("");
    let mappedWord = splittedWord.map(char => (clicked.indexOf(char) >= 0) ? char : "_");
    phraseInClue = mappedWord.join("");
    document.querySelector("#clueParagraph p").innerText = phraseInClue;
}

function keyHandler(event) {
    let pressedLetter = event.key.toLowerCase();
    getPressedLetter(pressedLetter);
}

function buttonHandler(event) {
    let pressedLetter = event.target.id.toLowerCase();
    getPressedLetter(pressedLetter);
}

function getPressedLetter(letter) {
    letter = letter.toLowerCase();
    clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
    document.getElementById(`${letter.toUpperCase()}`).className = "used";
    
    if (randomSelected.indexOf(letter) >= 0) {
        setUnderscorres();
        checkIfWin();
    } else {
        mistakes++;
        showHangByMistake();
        checkIfLost();
    }
}

function checkIfWin() {
    if (phraseInClue === randomSelected) {
        const image = document.querySelector("#hangImage img");
        image.src = `./assets/hangman/winner.png`;
        let gameOverObject = document.querySelector("#gameOver p");
        gameOverObject.style.display = "block";
        gameOverObject.innerHTML = `<p><b>You Won!</b></p>`;
    }
}

function checkIfLost() {
    if (mistakes === 6) {
        //document.querySelector("#gameOver p").style.display = "block";
        document.getElementById("gameOver").querySelector("p").style.display = "block";
        let clue = document.getElementById("clueParagraph").querySelector("p");        
        clue.innerHTML = `<p>Random word was <b>${randomSelected}</b></p>`;
        clue.style.letterSpacing = "0";
    }
}

function showHangByMistake() {
    const image = document.querySelector("#hangImage img");
    image.src = `./assets/hangman/hangman${mistakes}.png`;
}

function setClickHandlers() {
    let letterKeys = document.getElementById("letters").querySelectorAll("div");
    letterKeys.forEach(element => {
        element.addEventListener('click', buttonHandler);
    });
}

function getRandomPhrase() {
    randomSelected = randomPhrases[Math.floor(Math.random() * 5)];
    console.log(randomSelected);
    phraseInClue = "";
    for(let i=0; i < randomSelected.length; i++) {
        phraseInClue += "_";
    }
    document.querySelector("#clueParagraph p").innerText = phraseInClue;
    window.addEventListener('keydown', keyHandler);
}
getRandomPhrase();
setClickHandlers();
showHangByMistake();