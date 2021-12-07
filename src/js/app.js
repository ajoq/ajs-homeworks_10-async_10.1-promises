import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    const data = read();
    const value = json(data);
    return value;
  }
}

GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
}, (error) => {
  // ...
});
