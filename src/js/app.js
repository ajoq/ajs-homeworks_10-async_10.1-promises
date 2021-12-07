import json from './parser';
import read from './reader';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
    load() {
        console.log('Привет')
    }
}

const test = new GameSavingLoader();
test.load();