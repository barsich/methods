import Swordsman from '../swordsman';

test('should create correct object instance', () => {
  expect(new Swordsman('swordsman')).toBeInstanceOf(Swordsman);
});

test('should create correct object instance with correct props', () => {
  const expected = {
    name: 'Alex',
    type: 'swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(expected).toEqual(new Swordsman('Alex'));
});
