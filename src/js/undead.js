import Character from './character';

export default class Undead extends Character {
  constructor(name) {
    super(name, 'undead');

    this.attack = 25;
    this.defence = 25;
  }
}
