import GameSavingLoader from './GameSavingLoader';
import read from './reader';

export default function saveGame() {
  return GameSavingLoader.load().then(
    (saving) => JSON.parse(saving),
    (error) => new Error(`Возникла ошибка: ${error}`),
  );
}

console.log(read());
