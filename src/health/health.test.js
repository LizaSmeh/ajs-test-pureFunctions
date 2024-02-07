import pureFunctions from './health.js';

test('healthy test', () => {
  const playerObject = {
    name: 'Маг',
    health: 90,
  };

  const result = pureFunctions(playerObject);
  expect(result).toBe('healthy');
});

test('wounded test', () => {
  const playerObject = {
    name: 'Маг',
    health: 40,
  };

  const result = pureFunctions(playerObject);
  expect(result).toBe('wounded');
});

test('critical test', () => {
  const playerObject = {
    name: 'Маг',
    health: 10,
  };

  const result = pureFunctions(playerObject);
  expect(result).toBe('critical');
});
