let randomChoise = (Math.random() * 3);
console.log(randomChoise);
randomChoise = Math.floor(randomChoise);
console.log(randomChoise);

const choises = ["rock", "paper", "scissors"];

let machineChoise = "cheated";
machineChoise = choises[randomChoise];
console.log(`Machine Choosed:   ${machineChoise}`);


let userChoise = prompt("Please choose rock(r), paper(p) or scissors(s)");
if (userChoise) {
    if (userChoise.length > 1 || (
        userChoise.toLowerCase() != "r"
        && userChoise.toLowerCase() != "p"
        && userChoise.toLowerCase() != "s")) {
        console.log("You Cheated!!!");
    }
    else {
        if (userChoise.toLowerCase() == "r") {
            userChoise = "rock";
        }
        else if (userChoise.toLowerCase() == "p") {
            userChoise = "paper";
        }
        else if (userChoise.toLowerCase() == "s") {
            userChoise = "scissors";
        }

        console.log(`You Choosed:       ${userChoise}`);

        if (machineChoise == "cheated") {
            console.log("Congratualation! You Win.");
        }
        else {
            if (machineChoise == "rock") {
                if (userChoise == "rock") {
                    console.log("Draw the game.");
                }
                if (userChoise == "paper") {
                    console.log("Congratualation! You Win.");
                }
                if (userChoise == "scissors") {
                    console.log("Unfortunately! You Lose.");
                }
            }
            if (machineChoise == "paper") {
                if (userChoise == "rock") {
                    console.log("Unfortunately! You Lose.");
                }
                if (userChoise == "paper") {
                    console.log("Draw the game.");
                }
                if (userChoise == "scissors") {
                    console.log("Congratualation! You Win.");
                }
            }
            if (machineChoise == "scissors") {
                if (userChoise == "rock") {
                    console.log("Congratualation! You Win.");
                }
                if (userChoise == "paper") {
                    console.log("Unfortunately! You Lose.");
                }
                if (userChoise == "scissors") {
                    console.log("Draw the game.");
                }
            }
        }



    }
} else {
    console.log("You Cheated!!!");
}