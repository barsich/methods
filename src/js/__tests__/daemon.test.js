import Daemon from '../daemon';

test('should create correct object instance', () => {
  expect(new Daemon('daemon')).toBeInstanceOf(Daemon);
});

test('should create correct object instance with correct props', () => {
  const expected = {
    name: 'Alex',
    type: 'daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(expected).toEqual(new Daemon('Alex'));
});
