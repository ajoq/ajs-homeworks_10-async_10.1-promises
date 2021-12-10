import saveGame from '../app';

test('saveGame resolve', () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  const received = saveGame();
  return expect(received).resolves.toEqual(expected);
});
