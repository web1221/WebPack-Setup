import { Character } from "./../src/character.js"

describe ('Character', () => {
  let character
  let enemy
  beforeEach(() => {
    character = new Character(5,5,5,5, "Tralfamadorian");
    enemy = new Character(5,5,5,5, "Human")
  });

  test('should access character stats', () => {
    expect(character.stats.str).toEqual(5);
    expect(character.stats.int).toEqual(5);
    expect(character.stats.con).toEqual(5);
    expect(character.stats.end).toEqual(5);
  });
  test('should access character health & stamina', () => {
    expect(character.health).toEqual(50);
    expect(character.stamina).toEqual(50);
  });
  test('should access character species', () => {
    expect(character.species).toEqual("Tralfamadorian");
  });
  test('should access the attack of a player', () => {
    expect(character.attack(enemy)).toEqual(character.stats.str);
    expect(enemy.health).toEqual(45);
  });
  test('should access the heal() of a player', () => {
    expect(character.heal()).toEqual(15);
  });
  test('should access the boost() of a player', () => {
    expect(character.boost()).toEqual(5);
    expect(character.stats.str).toEqual(10);
  });
  test('should increase all stats by 5', () => {
    character.levelUp(5,5,5,5)
    expect(character.stats.str).toEqual(10);
    expect(character.stats.int).toEqual(10);
    expect(character.stats.con).toEqual(10);
    expect(character.stats.end).toEqual(10);
  });
});
