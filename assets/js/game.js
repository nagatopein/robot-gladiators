var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
// console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto" , "Amy Android" , "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

    // // Alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
    // Ask players to fight or skip fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // Repeat and execute while the enemy-robot is alive
        // if player choses to skip confirm and then stop loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player want to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

                // remove enemy's health by subtracting the amount in the playerAttack variable
                enemyHealth = enemyHealth - playerAttack;
                console.log (
                    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
                );

                // check enemy's health
            if (enemyHealth <=0) {
            window.alert(enemyName + " has died!");

            // award player money for winning
            playerMoney=playerMoney + 20;
            // leave while() loop since enemy is dead
            break;
        }   else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
                );

            // check player's health
            if (playerHealth <=0) {
            window.alert(playerName + " has died!");
            break;
        }   else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } // end while loop
}; // end fight function

var startGame = function() {
    // reset player stats
    playerHealth= 100;
    playerAttack= 10;
    playerMoney= 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    
            var pickedEnemyName = enemyNames[i];

            enemyHealth = 50;

            fight(pickedEnemyName);
        }
    
    else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

     startGame();
}

// function to end game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("The game has now ended. Let's see how you did!");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    // ask player if they want to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart game
        startGame();
    }

    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }

};

// start game when the page loads
startGame ();


// console.log(enemyNames);
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames.length);
// for(var i = 0; i < enemyNames.length; i++){
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index");
// }
    
//         // place fight function () code block here...
    
//         // if no (false), ask question again by running fight() again
//         else {
//             fight();
//         }
//     } else {
//         window.alert("You need to choose a valid option. Try again!");
//     }
//     if (promptFight === "fight" || promptFight === "FIGHT") {








//         // if player choses to skip confirm and then stop the loop
//     } 
//  };

//  }

