import json from './parser';
import read from './reader';

export default class GameSavingLoader {
    load() {
        return new Promise((resolve, reject) => {
            read()
            .then((result) => {
                return json(result);
            })
            .then((result) => {
                resolve(result);
            })
        })
    }
}

// GameSavingLoader.load().then((saving) => {
//     // saving объект класса GameSaving
//     console.log(saving);
//   }, (error) => {
//     // ...
//   });


// const test = new GameSavingLoader();
// console.log(test.load());
// test.load().then((saving) => {
//     console.log(saving);
//     return saving;
//   }, (error) => {
//       console.log(error);
//   });

// let p = new Promise((resolve, reject) => {
//     resolve('{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}');
// });
// console.log(p);

// const res1 = json(read1);
// console.log(res1);

// read1.then((result) => {
//     console.log(result);
//     const decodeBuf = new Uint16Array(result);
//     console.log(decodeBuf);
//     let resultArr2 = String.fromCharCode.apply(null, decodeBuf)
//     console.log(resultArr2);
//     // let resultArr = '';
//     // decodeBuf.forEach((item) => {
//     //     resultArr += String.fromCharCode(item);
//     // });
//     // console.log(resultArr);
// });

// res1.then((result) => {

// })

