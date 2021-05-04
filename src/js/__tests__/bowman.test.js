import Bowman from '../bowman';

test('should create correct object instance', () => {
  expect(new Bowman('bowman')).toBeInstanceOf(Bowman);
});

test('should create correct object instance with correct props', () => {
  const expected = {
    name: 'Alex',
    type: 'bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(expected).toEqual(new Bowman('Alex'));
});
