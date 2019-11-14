import { Battle } from "./../src/battle.js"

describe ('Battle', () => {
  let battle
  beforeEach(() => {
    battle = new Battle('Tyler','Angela' );
  });
  test('should access turn counter', () => {
    expect(battle.turnCounter).toEqual(0);
  });
  test('should access combatants', () => {
    expect(battle.combatants).toEqual(['Tyler', 'Angela']);
  });
  test('switch turn function should return player number', () => {
    expect(battle.switchTurn()).toEqual(1);
  });


});
