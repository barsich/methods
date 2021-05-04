import Zombie from '../zombie';

test('should create correct object instance', () => {
  expect(new Zombie('zombie')).toBeInstanceOf(Zombie);
});

test('should create correct object instance with correct props', () => {
  const expected = {
    name: 'Alex',
    type: 'zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(expected).toEqual(new Zombie('Alex'));
});
