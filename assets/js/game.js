/* GAME FUNCTIONS */

//function to generate a random numeric value
var randomNumber = function(min, max)  {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a vlaid answer! Please try again.");
        return fightOrSkip();
    }

    promptFight = promptFight.toLowerCase();

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerInfo.playerMoney = playerInfo.money - 10;

            // return true if player wants to leave
            return true;
            // shop();
        }
    }
}

// fight function (with parameter for enemy's name)
var fight = function(enemy) {
    console.log(enemy);

        while(playerInfo.health > 0 && enemy.health > 0) {
            // ask player if they'd like to fight or skip using fightOrSkip function
            if (fightOrSkip()) {
                // if true, leave fight by breaking loop
                break;
            }

            // generate random damage value based on player's attack power
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

            enemy.health = Math.max(0, enemy.health - damage);
            console.log (
                 playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining. "
                );

            // check enemy's health
            if (enemy.health <=0) {
            window.alert(enemy.name + " has died!");

            // award player money for winning
            playerInfo.money = playerInfo.money + 20;

            // leave while() loop since enemy is dead
            break;
        }   else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

            // generate random damage value based on player's attack power
            var damage = randomNumber(enemy.attack - 3, enemy.attack);

            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
                );

            // check player's health
            if (playerInfo.health <=0) {
            window.alert(playerInfo.name + " has died!");
            break;
        }   else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    } // end while loop
}; // end fight function

// function to start a new game
var startGame = function() {
    // reset player stats
    playerInfo.reset();
    
    // fight each enemy robot by looping over them and fighting them one at a time
    for(var i = 0; i < enemyInfo.length; i++) {
        // if player is still alive, keep fighting
        if (playerInfo.health > 0) {
            // let player know what round they are in, remember that arrays start with zero so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyObj = enemyInfo[i];

            // reset enemyHealth before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);

            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyObj);

            // if player is still alive and we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                // ask if player wants to use the stiore before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                // if yes, take them to the store() function
                if (storeConfirm) {
                shop();
                }
            }
        }
    
        // if player is not alive, break out of the loop and let endGame function run
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    // after loop ends, we are either out of playerInfo.health or enemies to fight, so run the endGame funtion
     endGame();
};

// function to end game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + '.');
    } else {
        window.alert("You've lost your robot in battle.");
    }

    // ask player if they want to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

// go to shop between battles function
var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt (
        'Would tou like to REFILL you health, UPGRADE your attack, or LEAVE the store? Please enter one: "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
    );

    shopOptionPrompt = parseInt(shopOptionPrompt);
    // use switch to carry out action
    switch (shopOptionPrompt) {
        case 1:
         playerInfo.refillHealth();    
         break;
        case 2:
         playerInfo.upgradeAttack();
         break;
        case 3:
         window.alert("Leaving the store.");

        // do nothing, so function will end
         break;
        default:
         window.alert("You did not pick a valid option. try again.");

        // call shop() again to force player to pick a valid option
         shop();
         break;
    }
};

/* END GAME FUNCTIONS */

/* GAMES INFORMATION / VARIABLES */

var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);
    return name;
};


// player information
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money= 10;
        this.attack = 10;
    }, //comma!
    refillHealth: function() {
     if (this.money >= 7) {
         window.alert("Refilling player's health by 20 for 7 dollars.");
         this.health += 20;
         this.money -= 7;
     } else {
         window.alert("You don't have enough money!");
     }
    }, // comma!
    upgradeAttack: function() {
     if (this.money >=7) {
         window.alert("Upgrading player's attack by 6 for 7 dollars.");
         this.attack += 6;
         this.money -= 7;
     } else {
         window.alert("You don't have enough money!");
     }
    }
};

// enemy information
var enemyInfo = [
    {
        name: "Roberto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);

/* END GAME INFORMATION / VARIABLES */

/* RUN GAMES */
startGame ();



/* STUFF WE DON'T NEED ANYMORE */


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

