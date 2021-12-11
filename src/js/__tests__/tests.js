import GameSavingLoader from '../GameSavingLoader';


  test('the data is peanut butter', () => {
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
    return GameSavingLoader.load().then(data => {
        const received = JSON.parse(data)
      expect(received).toEqual(expected);
    });
  });  