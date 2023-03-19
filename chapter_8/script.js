// 'use strict';
//
// 6.1.1
// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }
//
// alert( sumTo(100) );
//
// 6.1.2
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }
//
// alert( factorial(5) ); // 120
//
// 6.1.3
// function fib(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }
//
// alert( fib(3) ); // 2
// alert( fib(7) ); // 13
// alert( fib(77) ); // 5527939700884757
//
// 6.1.4
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
//
// function printList(list) {
//     let tmp = list;
//
//     while (tmp) {
//         alert(tmp.value);
//         tmp = tmp.next;
//     }
//
// }
//
// printList(list);
//
// 6.1.5
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
//
// function printReverseList(list) {
//
//     if (list.next) {
//         printReverseList(list.next);
//     }
//
//     alert(list.value);
// }
//
// printReverseList(list);
//
// 6.3.1
// function makeCounter() {
//     let count = 0;
//
//     return function() {
//         return count++;
//     };
// }
//
// let counter = makeCounter();
// let counter2 = makeCounter();
//
// alert( counter() ); // 0
// alert( counter() ); // 1
//
// alert( counter2() ); // 0
// alert( counter2() ); // 1
//
// 6.3.2
// function Counter() {
//     let count = 0;
//
//     this.up = function() {
//         return ++count;
//     };
//
//     this.down = function() {
//         return --count;
//     };
// }
//
// let counter = new Counter();
//
// alert( counter.up() ); // 1
// alert( counter.up() ); // 2
// alert( counter.down() ); // 1
//
// 6.3.3
// let phrase = "Hello";
//
// if (true) {
//     let user = "John";
//
//     function sayHi() {
//         alert(`${phrase}, ${user}`);
//     }
// }
//
// sayHi(); //error
//
// 6.3.4
// function sum(a) {
//
//     return function(b) {
//         return a + b;
//     };
//
// }
//
// alert( sum(1)(2) ); // 3
// alert( sum(5)(-1) ); // 4
//
// 6.3.5
// function inArray(arr) {
//     return function(x) {
//         return arr.includes(x);
//     };
// }
//
// let arr = [1, 2, 3, 4, 5, 6, 7];
// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2
//
// 6.3.6
// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];
//
// function byField(field) {
//     return (a, b) => a[field] > b[field] ? 1 : -1;
// }
//
// users.sort(byField('name'));
// users.forEach(user => alert(user.name)); // Ann, John, Pete
//
// users.sort(byField('age'));
// users.forEach(user => alert(user.name)); // Pete, Ann, John
//
// 6.3.7
// function makeArmy() {
//
//     let shooters = [];
//
//     for(let i = 0; i < 10; i++) {
//         let shooter = function() { // функция shooter
//             alert( i ); // должна выводить порядковый номер
//         };
//         shooters.push(shooter);
//
//
//     }
//
//     return shooters;
// }
//
// let army = makeArmy();
//
// army[0](); // 0
// army[5](); // 5
//
// 6.6.1
// function makeCounter() {
//     let count = 0;
//
//     function counter() {
//         return count++;
//     }
//
//     counter.set = value => count = value;
//
//     counter.decrease = () => count--;
//
//     return counter;
// }
//
// 6.6.2
// function sum(a) {
//
//     let currentSum = a;
//
//     function f(b) {
//         currentSum += b;
//         return f;
//     }
//
//     f.toString = function() {
//         return currentSum;
//     };
//
//     return f;
// }
//
// alert( sum(1)(2) ); // 3
// alert( sum(5)(-1)(2) ); // 6
// alert( sum(6)(-1)(-2)(-3) ); // 0
// alert( sum(0)(1)(2)(3)(4)(5) ); // 15
//
// 6.8.1
// function printNumbers(from, to) {
//     let current = from;
//
//     let timerId = setInterval(function() {
//         alert(current);
//         if (current == to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 1000);
// }
//
// // использование:
// printNumbers(5, 10);
//
// 6.8.2
// let i = 0;
//
// setTimeout(() => alert(i), 100); // 100000000
//
// // предположим, что время выполнения этой функции >100 мс
// for(let j = 0; j < 100000000; j++) {
//     i++;
// }
//
// 6.9.1
// function spy(func) {
//
//     function wrapper(...args) {
//         wrapper.calls.push(args);
//         return func.apply(this, args);
//     }
//
//     wrapper.calls = [];
//
//     return wrapper;
// }
//
// 6.9.2
// function delay(f, ms) {
//
//     return function() {
//         setTimeout(() => f.apply(this, arguments), ms);
//     };
//
// }
//
// let f1000 = delay(alert, 1000);
//
// f1000("test");
//
// 6.9.3
// function debounce(f, ms) {
//
//     let isCooldown = false;
//
//     return function() {
//         if (isCooldown) return;
//
//         f.apply(this, arguments);
//
//         isCooldown = true;
//
//         setTimeout(() => isCooldown = false, ms);
//     };
//
// }
//
// 6.9.4
// function throttle(func, ms) {
//
//     let isThrottled = false,
//         savedArgs,
//         savedThis;
//
//     function wrapper() {
//
//         if (isThrottled) { // (2)
//             savedArgs = arguments;
//             savedThis = this;
//             return;
//         }
//
//         func.apply(this, arguments); // (1)
//
//         isThrottled = true;
//
//         setTimeout(function() {
//             isThrottled = false; // (3)
//             if (savedArgs) {
//                 wrapper.apply(savedThis, savedArgs);
//                 savedArgs = savedThis = null;
//             }
//         }, ms);
//     }
//
//     return wrapper;
// }
//
// 6.10.1
// function f() {
//     alert( this ); // null
// }
//
// let user = {
//     g: f.bind(null)
// };
//
// user.g();
//
// 6.10.2
// function f() {
//     alert(this.name);
// }
//
// f = f.bind( {name: "Вася"} ).bind( {name: "Петя"} );
//
// f(); // Вася
//
// 6.10.3
// function sayHi() {
//     alert( this.name );
// }
// sayHi.test = 5;
//
// let bound = sayHi.bind({
//     name: "Вася"
// });
//
// alert( bound.test );
//
// undefined
// У него не будет test.
//
// 6.10.4
// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }
//
// let user = {
//     name: 'Вася',
//
//     loginOk() {
//         alert(`${this.name} logged in`);
//     },
//
//     loginFail() {
//         alert(`${this.name} failed to log in`);
//     },
//
// };
//
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
//
// 6.10.5
// askPassword(() => user.login(true), () => user.login(false));
//
