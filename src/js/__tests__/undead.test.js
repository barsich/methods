import Undead from '../undead';

test('should create correct object instance', () => {
  expect(new Undead('undead')).toBeInstanceOf(Undead);
});

test('should create correct object instance with correct props', () => {
  const expected = {
    name: 'Alex',
    type: 'undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(expected).toEqual(new Undead('Alex'));
});
