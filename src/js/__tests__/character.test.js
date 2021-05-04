/* eslint-disable no-new */
import Bowman from '../bowman';
import Character from '../character';

test('should throw error on incorrect name', () => {
  expect(() => {
    new Character('A', 'bowman');
  }).toThrow('Длина имени должна быть от 2 до 10 символов!');
  expect(() => {
    new Character('AAAAAAAAAAA', 'bowman');
  }).toThrow('Длина имени должна быть от 2 до 10 символов!');
});

test('should throw error on incorrect type', () => {
  expect(() => {
    new Character('bowman', 'booowman');
  }).toThrow('Некорректный класс персонажа!');
});

test('should correct lvlup', () => {
  const bowman = new Bowman('Alex');
  bowman.levelUp();
  const expected = {
    name: 'Alex',
    type: 'bowman',
    attack: 30,
    defence: 30,
    level: 2,
    health: 100,
  };
  expect(expected).toEqual(bowman);
});

test('should throw error if lvluping character is dead', () => {
  const bowman = new Bowman('Alex');
  bowman.health = 0;
  expect(() => bowman.levelUp()).toThrow('Персонаж мертв!');
});

test('should correct calculate health after damaging', () => {
  const bowman = new Bowman('Alex');
  bowman.damage(50);
  const expected = {
    name: 'Alex',
    type: 'bowman',
    attack: 25,
    defence: 25,
    level: 1,
    health: 63,
  };
  expect(expected).toEqual(bowman);
});

test('should set health to 0 when overdamage', () => {
  const bowman = new Bowman('Alex');
  bowman.health = 10;
  bowman.damage(50);
  const expected = {
    name: 'Alex',
    type: 'bowman',
    attack: 25,
    defence: 25,
    level: 1,
    health: 0,
  };
  expect(expected).toEqual(bowman);
});
