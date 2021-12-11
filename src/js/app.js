import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => JSON.parse(saving), (error) => error);
