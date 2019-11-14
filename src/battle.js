export class Battle {
  constructor(first, second){
    this.turnCounter = 0;
    this.combatants = [first, second]
  }

  
  switchTurn(){
    const turn = this.turnCounter % 2
    if (turn == 0) {
      //player 1 turn
      return 1
    } else {
      //player 2 turn
      return 2
    }
  }
}
