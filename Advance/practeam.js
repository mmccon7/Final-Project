// dependency for inquirer npm package
var inquirer = require ("inquirer");
// constructor function for creating player objects
  function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;

    // flips a coin: if the value is equal to 0 then shi.offense goes up by one. 
    this.goodgame = function() {
      if (Math.floor(Math.random() * 2)=== 0) {

        this.offense++;
        console.log(this.name + " 's offense has gone up!\n----------");
      }
      else {
        this.defense++;
        console.log(this.name + " 's defense has gone up!\n----------");
      }

};
    this.badgame = function() {
      if (Math.floor(Math.random() * 2)
=== 0) {
        
      }
}




  }

// arrays used to contain all of our player objects


// recursive function which will allow the user to create 5 players and then will print each player's stats afterwards

  // if the length of the team array is 8 or higher, no more questions will be asked
  
      // runs the constructor and places the new player object into the variable player.
      // turns the offense and defense variables into integers as well with parseInt

      // adds a player to the starters array if there are less than five player objects in it.
      // otherwise adds the newest player object to the subs array
      
      // runs the createPlayer function once more
     
    // loops through the team array and calls printStats() for each object it contains
  

// calls the function createPlayer() to start the code
