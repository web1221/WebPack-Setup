import { Character } from "./../src/character.js"

describe ('Character', () => {
  let character
  beforeEach(() => {
    character = new Character(5,5,5,5, "tralfamadorian");
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
  test('should acces character species', () => {
    expect(character.species).toEqual("tralfamadorian");
  });
