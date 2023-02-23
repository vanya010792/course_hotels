'use strict';

// 4.1.1
// const user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// 4.1.2
// function isEmpty(obj) {
//     for (let key in obj) {
//         return true;
//     }
//     return false;
// }
// const user = {};
// console.log(isEmpty(user));
// user.name = 'Ivan';
// console.log(isEmpty(user));

// 4.1.3
// const user = {
//     name: "John"
// };
// // это будет работать? Да, потому что изменения внутри обьекта.
// user.name = "Pete";

// 4.1.4
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }
// console.log(sum);

// 4.1.5
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if(typeof obj[key] === 'number') {
//             obj[key] *= 2;
//         }
//     }
// }
// multiplyNumeric(menu);
// console.log(menu);

// 4.4.1
// function makeUser() {
//     return {
//         name: "John",
//         ref: this
//     };
// }
// let user = makeUser();
// alert( user.ref.name ); // Каким будет результат?
// Uncaught TypeError: Cannot read properties of undefined (reading 'name')
// Потому что this ссылается на функцию makeUSer, а у нее this = undefined

// 4.4.2
// const calculator = {
//     read() {
//         this.n1 = Number(prompt('Введите первое число:'));
//         this.n2 = Number(prompt('Введите второе число:'));
//     },
//     sum() {
//         this.read();
//         alert(`Результат суммирования: ${this.n1 + this.n2}`);
//     },
//     mul() {
//         this.read();
//         alert(`Результат умножения: ${this.n1 * this.n2}`);
//     }
// }
// calculator.sum();
// calculator.mul();

// 4.4.3
// const ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function() { // показывает текущую ступеньку
//         alert( this.step );
//         return this;
//     }
// };
// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep();
// // ladder.down();
// // ladder.showStep();
// ladder.up().up().down().showStep().down().showStep();

// 4.5.1
// let obj = {};
// function A() {return obj;}
// function B() {return obj;}
// let a = new A();
// let b = new B();
// alert( a == b ); // true
// Да, возвращая тот же обьект внешне определенный.

// 4.5.2
// const Calculator = function () {
//     this.read = function () {
//         this.n1 = prompt('Введите первое число:');
//         this.n2 = prompt('Введите второе число:');
//     }
//     this.sum = function () {
//         return this.n1 + this.n2;
//     }
//     this.mul = function () {
//         return this.n1 * this.n2;
//     }
// }
// let calculator = new Calculator();
// calculator.read();
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// 4.5.3
// const Accumulator = function (startingValue) {
//     this.value = Number(startingValue);
//     this.read = function () {
//         this.value += Number(prompt('Прибавить число:'));
//     }
// }
// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// alert(accumulator.value); // выведет сумму этих значений



// const id = Symbol('id');
// const id2 = Symbol('id');
// console.log(id, id2, id.toString(), id.description, id2.description);



























