import json from './parser';
import read from './reader';

export default class GameSavingLoader {
    load() {
        return new Promise((resolve, reject) => {
            read()
            .then((result) => {
                resolve (json(result));
            })
        })
    }
}

const test1 = JSON.parse('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
console.log(test1);
console.log('---');

// const test2 = new GameSavingLoader
// const test3 = test2.load().then(
//     saving => {return JSON.parse(saving)}
// )
// console.log(test3);