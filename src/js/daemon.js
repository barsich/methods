import Character from './character';

export default class Daemon extends Character {
  constructor(name) {
    super(name, 'daemon');

    this.attack = 10;
    this.defence = 40;
  }
}
