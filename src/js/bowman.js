import Character from './character';

export default class Bowman extends Character {
  constructor(name) {
    super(name, 'bowman');

    this.attack = 25;
    this.defence = 25;
  }
}
