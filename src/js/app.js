import GameSavingLoader from './GameSavingLoader';

export default function saveGame() {
  return GameSavingLoader.load().then(
    (saving) => JSON.parse(saving),
    (error) => new Error(`Возникла ошибка: ${error}`),
  );
}
