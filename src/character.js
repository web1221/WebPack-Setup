export class Character {
  constructor(str, int, con, end, species){
    this.level = 1;
    this.health = con * 10;
    this.stamina = end * 10;
    this.species = species;

    this.stats = {
      str: str,
      int: int,
      con: con,
      end: end
    };
  }


}
