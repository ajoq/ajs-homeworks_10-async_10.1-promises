import read from '../reader';
import json from '../parser';
import GameSavingLoader from '../app';

test('load return promise', () => {
    const expected = new Promise((resolve, reject) => {
        resolve('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
    });
    const received = new GameSavingLoader();
    expect(received.load()).toEqual(expected);
  });