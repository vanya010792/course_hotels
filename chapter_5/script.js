'use strict';

// 5.1.1
// let str = "Привет";
// str.test = 5;
// alert(str.test);
// Нельзя, выведет undefined или ошибку.

// 5.2.1
// const n1 = Number(prompt('Первое число:'));
// const n2 = Number(prompt('Второе число:'));
// alert(`Сумма чисел: ${n1 + n2}`);

// 5.2.2
// alert( 1.35.toFixed(1) ); // 1.4
// alert( 6.35.toFixed(1) ); // 6.3
// alert(Number((6.35 * 10).toFixed(0)) / 10);

// 5.2.3
// function readNumber() {
//     const n = prompt('Введите число:');
//     if(n === null || n === '') return alert('Canceled');
//     if(!n.trim().length > 0 || isNaN(+(n.trim()))) {
//         return readNumber();
//     }
//     alert(n);
// }
// readNumber();

// 5.2.4
// let i = 0;
// while (i != 10) {
//     i += 0.2;
// }
// Не завершится, потому что ни когда не запишет в i число равное 10

// 5.2.5
// function random(min, max) {
//     return (max - min) * Math.random() + min;
// }
// console.log(random(10, 12));
// console.log(random(1, 5));
// console.log(random(1, 5));

// 5.2.6
// function random(min, max) {
//     return Math.trunc((max - min) * Math.random() + min);
// }
// console.log(random(10, 12));
// console.log(random(1, 5));
// console.log(random(1, 5));

// 5.3.1
// function ucFirst(str) {
//     return `${str[0].toUpperCase()}${str.slice(1)}`;
// }
// console.log(ucFirst('ivan'));

// 5.3.2
// function checkSpam(str) {
//     const strToLover = str.toLowerCase();
//     return strToLover.includes('viagra') || strToLover.includes('xxx');
// }
// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam('innocent rabbit'));

// 5.3.3
// function truncate(str, maxlength) {
//     return str.length > maxlength
//         ? `${str.slice(0, maxlength - 3)}...`
//         : str;
// }
// console.log(truncate("Всем привет!", 20));
// console.log(truncate("Всем привет Всем привет Всем привет Всем привет!", 4));

// 5.3.4
// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }
// console.log(extractCurrencyValue('$120'));

// 5.4.1
// let fruits = ["Яблоки", "Груша", "Апельсин"];
// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан")
// // что в fruits?
// alert( fruits.length ); // 4

// 5.4.2
// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// styles[Math.trunc(styles.length / 2)] = 'Классика';
// styles.shift();
// styles.unshift('Рэп', 'Рэгги');
// console.log(styles);

// 5.4.3
// let arr = ["a", "b"];
// arr.push(function() {
//     alert( this );
// });
// arr[2](); // выполнение функции и выведет то что в this

// 5.4.4
// const sum = [];
// function sumInput() {
//     const n = prompt('Введите значение:');
//     if(n === '' || n === null || isNaN(+n)) {
//         if(sum.length === 0) return alert('Нечего суммировать');
//         let result = 0;
//         for(let i = 0; i < sum.length; i++) {
//             result += sum[i];
//         }
//         return alert(`Сумма: ${result}`);
//     }
//     sum.push(+n);
//     sumInput();
// }
// sumInput();

// 5.4.5
// function getMaxSubSum(arr) {
//     let sum = 0, curSum = 0;
//
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i; j < arr.length; j++) {
//             curSum += arr[j];
//             if(sum < curSum) {
//                 sum = curSum;
//             }
//         }
//         curSum = 0;
//     }
//
//     return console.log(sum);
// }
// getMaxSubSum([-1, 2, 3, -9]);
// getMaxSubSum([2, -1, 2, 3, -9]);
// getMaxSubSum([-1, 2, 3, -9, 11]);
// getMaxSubSum([-2, -1, 1, 2]);
// getMaxSubSum([100, -9, 2, -3, 5]);
// getMaxSubSum([1, 2, 3]);

// 5.5.1
// function camelize(str) {
//     const result = str
//         .split('-')
//         .reduce((acc, word, index) => {
//             if(index === 0) {
//                 acc = word;
//             }
//             acc += word[0].toUpperCase() + word.slice(1);
//             return acc;
//         });
//     console.log(result);
// }
// camelize("background-color");
// camelize("list-style-image");
// camelize("-webkit-transition");

// 5.5.2
// function filterRange(arr, a, b) {
//     return arr
//         .filter(n => n >= a && n <= b)
//         .join(', ');
// }
// const arr = [5, 3, 8, 1];
// const filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)

// 5.5.3
// function filterRangeInPlace(arr, a, b) {
//     const indexRemove = [];
//     arr.forEach((n, i) => {
//         if(n < a || n > b) {
//             indexRemove.push(i);
//         }
//     });
//     indexRemove.map(i => arr.splice(i, 1));
// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// alert( arr ); // [3, 1]

// 5.5.4
// let arr = [5, 2, 1, -10, 8];
// arr.sort((n1, n2) => n2 - n1);
// alert( arr ); // 8, 5, 2, 1, -10

// 5.5.5
// const copySorted = arr => arr.concat().sort();
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

// 5.5.6
// const Calculator = function() {
//     this.methods = {
//         '+': (a, b) => a + b,
//         '-': (a, b) => a - b,
//     }
//     this.calculate = function(str) {
//         const arrStr = str.split(' ');
//         const n1 = Number(arrStr[0]);
//         const symbol = arrStr[1];
//         const n2 = Number(arrStr[2]);
//
//         if(!this.methods[symbol]) return 'Операция не доступна!';
//
//         return this.methods[symbol](n1, n2);
//     }
//     this.addMethod = function(name, func) {
//         this.methods[name] = func;
//     }
// }
// let calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// // powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8

// 5.5.7
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [ vasya, petya, masha ];
// let names = users.map(item => item.name);
// alert( names ); // Вася, Петя, Маша

// 5.5.8
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
// let users = [ vasya, petya, masha ];
// let usersMapped = users.map(item => ({fullName: `${item.name} ${item.surname}`, id :item.id}));
// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */
// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин
// console.log(usersMapped);

// 5.5.9
// const sortByAge = users => users.sort((item1, item2) => item1.age - item2.age);
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let arr = [ vasya, petya, masha ];
// sortByAge(arr);
// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя
// console.log(arr);

// 5.5.10
// const shuffle = array => array.map(i => [Math.random(), i]).sort().map(i => i[1]);
// let arr = [1, 2, 3];
// console.log(shuffle(arr));
// // arr = [3, 2, 1]
// console.log(shuffle(arr));
// // arr = [2, 1, 3]
// console.log(shuffle(arr));
// // arr = [3, 1, 2]

// 5.5.11
// const getAverageAge = (array) => array
//     .reduce((acc, item, index, array) => {
//         if(index === array.length - 1) return (acc + item.age) / (index + 1);
//         return acc + item.age;
//     }, 0);
// const getAverageAge = (array) => array.reduce((acc, item, index, array) => acc + item.age, 0) / array.length;
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
// let arr = [ vasya, petya, masha ];
// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// 5.5.12
// const unique = arr => arr.reduce((acc, str) => {
//     if(acc.includes(str)) return acc;
//     acc.push(str);
//     return acc;
// }, []);
// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];
// alert( unique(strings) ); // кришна, харе, :-O

// 5.5.13
// const groupById = arr => arr.reduce((acc, item) => {
//     acc[item.id] = item;
//     return acc;
// }, {});
// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
// ];
//
// let usersById = groupById(users);
// console.log(usersById);
// /*
// // после вызова у нас должно получиться:
//
// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
// */

// 5.7.1
// function unique(arr) {
//     const arrToSet = new Set(arr);
//     return Array.from(arrToSet);
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// alert( unique(values) ); // Hare,Krishna,:-O

// 5.7.2
// const aclean = arr => {
//     const map = new Map();
//     arr.forEach(word => {
//         const formattedWord = word.toLowerCase().split('').sort().join('');
//         map.set(formattedWord, word);
//     });
//     return Array.from(map.values());
//     // const checkSymbolInWord = (word1, word2) => {
//     //     const arrWord1 = word1.toLowerCase().split('').sort().join('');
//     //     const arrWord2 = word2.toLowerCase().split('').sort().join('');
//     //     return arrWord1 === arrWord2;
//     // }
//     // const result = [];
//     // loop:
//     // for(let i = 0; i < arr.length; i++) {
//     //     result.push(arr[i]);
//     //     for(let j = 0; j < result.length; j++) {
//     //         if(arr[i] === result[j]) continue loop;
//     //         if(arr[i].length === result[j].length) {
//     //             if(checkSymbolInWord(arr[i], result[j])) {
//     //                 console.log(checkSymbolInWord(arr[i], result[j]), arr[i], result[j], result);
//     //                 result.splice(j, 1);
//     //             }
//     //         }
//     //     }
//     // }
//     // return result;
// }
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// alert(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

// 5.7.3
// let map = new Map();
// map.set("name", "John");
// let keys = Array.from(map.keys());
// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");
// console.log(keys);

// 5.8.1
// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
// ];
// const readMessage = new WeakSet();
// readMessage.add(messages[0]);
// readMessage.add(messages[0]);
// console.log(readMessage);
// console.log(readMessage.has(messages[0]));
// readMessage.delete(messages[0]);
// console.log(readMessage.has(messages[0]));

// 5.8.2
// let messages = [
//     { text: "Hello", from: "John" },
//     { text: "How goes?", from: "John" },
//     { text: "See you soon", from: "Alice" }
// ];
// const dateMessage = new WeakMap();
// dateMessage.set(messages[0], new Date());
// console.log(dateMessage);
// console.log(dateMessage.has(messages[0]));
// messages[0] = null;
// // messages.splice(0, 1);
// console.log(dateMessage);
// console.log(messages);
// dateMessage.delete(messages[0]);
// console.log(dateMessage);

// 5.9.1
// const sumSalaries = salaries => {
//     let result = 0;
//     for(let value of Object.values(salaries)) {
//         result += +value;
//     }
//     return result;
// }
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// alert( sumSalaries(salaries) ); // 650

// 5.9.2
// const count = obj => {
//     return Object.keys(obj).reduce(acc => acc + 1, 0);
//     return Object.keys(obj).length;
// }
// let user = {
//     name: 'John',
//     age: 30
// };
// alert( count(user) ); // 2

// 5.10.1
// let user = {
//     name: "John",
//     years: 30
// };
// const {name, years: age, isAdmin = false} = user;
// console.log(name, age, isAdmin);

// 5.10.2
// const topSalary = salaries => {
//     if(!Object.keys(salaries).length) return null;
//     return Object
//         .entries(salaries)
//         .reduce((acc, [name, salary]) => {
//             if(acc[1] < salary) {
//                 acc = [name, salary];
//             }
//             return acc;
//         }, ['', 0])
//         .join(' - ');
// }
// let salaries = {};
// console.log(topSalary(salaries));

// 5.11.1
// alert(new Date(2012, 1, 20, 3, 12));

// 5.11.2
// const getWeekDay = date => {
//     const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
//     console.log(days[date.getDay()]);
// }
// const date = new Date(2012, 0, 3);  // 3 января 2012 года
// getWeekDay(date);        // нужно вывести "ВТ"

// 5.11.3
// function getLocalDay(date) {
//     let dayNum = date.getDay();
//     if(dayNum === 0) {
//         dayNum = 7;
//     }
//     console.log(dayNum);
// }
// let date = new Date(2012, 0, 7);  // 3 января 2012 года
// getLocalDay(date);       // вторник, нужно показать 2

// 5.11.4
// function getDateAgo(date, days) {
//     // const year = date.getFullYear();
//     // const month = date.getMonth();
//     // const diffDays = date.getDate() - days;
//     // const result = new Date(year, month, diffDays);
//     // console.log(result.getDate());
//
//     const dateCopy = new Date(date);
//     dateCopy.setDate(date.getDate() - days);
//     console.log(dateCopy.getDate());
// }
// let date = new Date(2015, 0, 2);
// getDateAgo(date, 1); // 1, (1 Jan 2015)
// getDateAgo(date, 2); // 31, (31 Dec 2014)
// getDateAgo(date, 365); // 2, (2 Jan 2014)

// 5.11.5
// function getLastDayOfMonth(year, month) {
//     const date = new Date(year, month + 1, 0);
//     // date.setDate(date.getDate() - 1);
//     console.log(date.getDate());
// }
// getLastDayOfMonth(2012, 0); // 31
// getLastDayOfMonth(2012, 1); // 29
// getLastDayOfMonth(2013, 1); // 28

// 5.11.6
// function getSecondsToday() {
//     const curDate = new Date();
//     const hours = curDate.getHours();
//     const minutes = curDate.getMinutes();
//     const seconds = curDate.getSeconds();
//     console.log(hours * 3600 + minutes * 60 + seconds);
// }
// getSecondsToday();

// 5.11.7
// function getSecondsToTomorrow() {
//     // const curDate = new Date();
//     const date = new Date();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();
//     console.log((24 - hours) * 3600 + (60 - minutes) * 60 + 60 - seconds);
// }
// getSecondsToTomorrow();

// 5.11.8
// function formatDate(date) {
//     const curDate = new Date();
//     const diffDate = (curDate - date);
//     const diffDateToSeconds = diffDate / 1000;
//     if(diffDateToSeconds < 1) {
//         return console.log('прямо сейчас');
//     }
//     if(diffDateToSeconds < 60) {
//         return console.log(`${diffDateToSeconds} сек. назад`);
//     }
//     const diffDateToMinutes = diffDate / 60000;
//     if(diffDateToMinutes < 60) {
//         return console.log(`${diffDateToMinutes} мин. назад`);
//     }
//     const oldDay = date.getDate();
//     const oldMonth = date.getMonth().toString().length === 1 ? `0${date.getMonth()}` : date.getMonth();
//     const oldYear = date.getFullYear().toString().slice(2);
//     const oldHours = date.getHours();
//     const oldMinutes = date.getMinutes();
//     const resultOldDate = `${oldDay}.${oldMonth}.${oldYear} ${oldHours}:${oldMinutes}`;
//     return console.log(resultOldDate);
// }
// formatDate(new Date(new Date - 1));
// formatDate(new Date(new Date - 30 * 1000));
// formatDate(new Date(new Date - 5 * 60 * 1000));
// formatDate(new Date(new Date - 86400 * 1000));

// 5.12.1
// let user = {
//     name: "Василий Иванович",
//     age: 35
// };
// console.log(user);
// const userToJSON = JSON.stringify(user);
// console.log(userToJSON);
// const userJSONToObject = JSON.parse(userToJSON);
// console.log(userJSONToObject);

// 5.12.2
// let room = {
//     number: 23
// };
// let meetup = {
//     title: "Совещание",
//     occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//     place: room
// };
// цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;
// alert( JSON.stringify(meetup, function replacer(key, value) {
//     return key !== '' && value === meetup ? undefined : value;
// }));
/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/





















