import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => {
    console.log(JSON.parse(saving))
  }, (error) => {
    console.log(error)
  });