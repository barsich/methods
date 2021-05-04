export default class Character {
  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Длина имени должна быть от 2 до 10 символов!');
    }

    if (['bowman', 'swordsman', 'magician', 'daemon', 'undead', 'zombie'].includes(type)) {
      this.type = type;
    } else {
      throw new Error('Некорректный класс персонажа!');
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Персонаж мертв!');
    }
    this.level += 1;
    this.attack = Math.floor(this.attack * 1.2);
    this.defence = Math.floor(this.defence * 1.2);
    this.health = 100;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= Math.floor(points * (1 - this.defence / 100));
    }

    // чтобы исключить овердемедж и корректно работал лвлап
    if (this.health <= 0) {
      this.health = 0;
    }
  }
}
