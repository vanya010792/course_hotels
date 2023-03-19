// 'use strict';
//
// 8.1.1
// let animal = {
//     jumps: null
// };
// let rabbit = {
//     __proto__: animal,
//     jumps: true
// };
//
// alert( rabbit.jumps ); // true, берётся из rabbit
//
// delete rabbit.jumps;
//
// alert( rabbit.jumps ); null, берётся из anima
//
// delete animal.jumps;
//
// alert( rabbit.jumps ); undefined
//
// 8.1.2
// let head = {
//     glasses: 1
// };
//
// let table = {
//     pen: 3,
//     __proto__: head
// };
//
// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
// };
//
// let pockets = {
//     money: 2000,
//     __proto__: bed
// };
//
// alert( pockets.pen ); // 3
// alert( bed.glasses ); // 1
// alert( table.money ); // undefined
//
// 8.1.3
// let animal = {
//     eat() {
//         this.full = true;
//     }
// };
//
// let rabbit = {
//     __proto__: animal
// };
//
// rabbit.eat(); // rabbit
//
// 8.1.4
// let hamster = {
//     stomach: [],
//
//     eat(food) {
//         this.stomach.push(food);
//     }
// };
//
// let speedy = {
//     __proto__: hamster,
//     stomach: []
// };
//
// let lazy = {
//     __proto__: hamster,
//     stomach: []
// };
//
// speedy.eat("apple");
// alert( speedy.stomach ); // apple
//
// alert( lazy.stomach ); // <ничего>
//
// 8.2.1.1
// function Rabbit() {}
// Rabbit.prototype = {
//     eats: true
// };
//
// let rabbit = new Rabbit();
//
// Rabbit.prototype = {};
//
// alert( rabbit.eats ); // true
//
// 8.2.1.2
// function Rabbit() {}
// Rabbit.prototype = {
//     eats: true
// };
//
// let rabbit = new Rabbit();
//
// Rabbit.prototype.eats = false;
//
// alert( rabbit.eats ); // false
//
// 8.1.1.3
// function Rabbit() {}
// Rabbit.prototype = {
//     eats: true
// };
//
// let rabbit = new Rabbit();
//
// delete rabbit.eats;
//
// alert( rabbit.eats ); // true
//
// 8.1.1.4
// function Rabbit() {}
// Rabbit.prototype = {
//     eats: true
// };
//
// let rabbit = new Rabbit();
//
// delete Rabbit.prototype.eats;
//
// alert( rabbit.eats ); // undefined
//
// 8.2.1
// function User(name) {
//     this.name = name;
// }
//
// let user = new User('John');
// let user2 = new user.constructor('Pete');
//
// alert( user2.name ); // Pete
//
// 8.3.1
// Function.prototype.defer = function(ms) {
//     setTimeout(this, ms);
// };
//
// function f() {
//     alert("Hello!");
// }
//
// f.defer(1000);
//
// 8.3.2
// Function.prototype.defer = function(ms) {
//     let f = this;
//     return function(...args) {
//         setTimeout(() => f.apply(this, args), ms);
//     }
// };
//
// function f(a, b) {
//     alert( a + b );
// }
//
// f.defer(1000)(1, 2);
//
// 8.4.1
// let dictionary = Object.create(null, {
//     toString: {
//         value() {
//             return Object.keys(this).join();
//         }
//     }
// });
//
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test";
//
// for(let key in dictionary) {
//     alert(key);
// }
//
// alert(dictionary);
//
// 8.4.2
// function Rabbit(name) {
//     this.name = name;
// }
// Rabbit.prototype.sayHi = function() {
//     alert( this.name );
// }
//
// let rabbit = new Rabbit("Rabbit");
//
// rabbit.sayHi();                        // Rabbit
// Rabbit.prototype.sayHi();              // undefined
// Object.getPrototypeOf(rabbit).sayHi(); // undefined
// rabbit.__proto__.sayHi();              // undefined
//
//
//
