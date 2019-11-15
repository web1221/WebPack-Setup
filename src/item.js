export class Item {
  constructor(cost, weight, modifiers){
    this.cost = cost;
    this.weight = weight;
    this.modifiers = modifiers;
  }
  buy() {}
  sell()
}

export class Equipment extends Item {
  constructor(weight, modifiers, slot){
    super(weight, modifiers);
    this.slot = slot;
  }
}
