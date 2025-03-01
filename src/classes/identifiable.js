class Identifiable {
  static idGenerator = idGen();

  /** @type {number} */
  id;

  constructor() {
    this.id = Identifiable.createId();
  }

  static createId() {
    return Identifiable.idGenerator.next().value;
  }
}
