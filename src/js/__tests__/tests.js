import read from '../reader';
import json from '../parser';
import GameSavingLoader from '../GameSavingLoader';
import saveGame from '../app';

test('load return promise', () => {
  const expected = new Promise((resolve, reject) => {
    resolve('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
  });
  const received = saveGame();
  expect(received).toEqual(expected);
});

test('reader', () => {
  const expected = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
      return ((input) => {
        const buffer = new ArrayBuffer(input.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i++) {
          bufferView[i] = input.charCodeAt(i);
        }
        resolve(buffer);
      })(data);
    }, 1000);
  });
  const received = read();
  expect(received).toEqual(expected);
});
