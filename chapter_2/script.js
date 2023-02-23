'use strict';

// 2.1.1 и 2.1.2
// alert('Я JavaScript!');

// 2.4.1
// let admin, name;
// name = 'Джон';
// admin = name;
// alert(admin);

// 2.4.2
// let ourPlanet, currentUser.

// 2.4.3
// const BIRTHDAY = '18.04.1982'; // есть смысл в заглавных буквах.
// const AGE = someCode(BIRTHDAY); // нет смысла в заглавных буквах.

// 2.5.1
// let name = "Ilya";
// alert( `hello ${1}` ); // hello 1
// alert( `hello ${"name"}` ); // hello name
// alert( `hello ${name}` ); // hello Ilya

// 2.6.1
// const name = prompt('Введите ваше имя:');
// alert(`Вас зовут ${name}!`);

// 2.8.1
// let a = 1, b = 1;
// let c = ++a; // c = 2, a = 2
// let d = b++; // d = 1, b = 1, но после присваивания станет b = 2

// 2.8.2
// let a = 2;
// let x = 1 + (a *= 2); // x = 5, a = 4;

// 2.8.3
// "" + 1 + 0 // "10"
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // "9px"
// "$" + 4 + 5 // "$45"
// "4" - 2 // 2
// "4px" - 2 // NaN
// "  -9  " + 5 // "  -9  5"
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // NaN
// " \t \n" - 2 // -2

// 2.8.4
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// alert(a + b); // 12
// alert(+a + +b);
// alert(Number(a) + Number(b));
// Вариант 2
// let a = Number(prompt("Первое число?", 1)); // или вместо Number +
// let b = Number(prompt("Второе число?", 2)); // или вместо Number +
// alert(a + b);

// 2.9.1
// 5 > 4 // true
// "ананас" > "яблоко" // false
// "2" > "12" // true
// undefined == null // true
// undefined === null // false
// null == "\n0\n" // false
// null === +"\n0\n" // false

// 2.10.1
// if ("0") {
//     alert( 'Привет' );
// } // выведется потому что это строка со значением, а она не равна false

// 2.10.2
// const messageValue = prompt('Какое «официальное» название JavaScript?', '');
// if(messageValue === 'ECMAScript') {
//     alert('Верно');
// } else {
//     alert('Не знаете? ECMAScript!');
// }

// 2.10.3
// let numberMessage = Number(prompt('Введите число', ''));
// if(numberMessage === 0) {
//     alert(0);
// } else if(numberMessage > 0) {
//     alert(1);
// } else {
//     alert(-1);
// }

// 2.10.4
// let result;
// // if (a + b < 4) {
// //     result = 'Мало';
// // } else {
// //     result = 'Много';
// // }
// a + b < 4 ? result = 'Мало' : result = 'Много';

// 2.10.5
// let message;
// // if (login == 'Сотрудник') {
// //     message = 'Привет';
// // } else if (login == 'Директор') {
// //     message = 'Здравствуйте';
// // } else if (login == '') {
// //     message = 'Нет логина';
// // } else {
// //     message = '';
// // }
// login == 'Сотрудник' ? message = 'Привет'
//     : login == 'Директор' ? message = 'Здравствуйте'
//         : login == '' ? message = 'Нет логина'
//             : message = '';

// 2.11.1
// alert( null || 2 || undefined ); // 2

// 2.11.2
// alert( alert(1) || 2 || alert(3) ); // 1 потом 2, хотя немного странно, поидее только alert должен был отработать

// 2.11.3
// alert( 1 && null && 2 ); // null

// 2.11.4
// alert( alert(1) && alert(2) ); // 1 и undefined

// 2.11.5
// alert( null || 2 && 3 || 4 ); // 3

// 2.11.6
// age >= 14 && age <= 90

// 2.11.7
// !(age >= 14 && age <= 90)
// age < 14 && age > 90

// 2.11.8
// if (-1 || 0) alert( 'first' ); // true
// if (-1 && 0) alert( 'second' ); // false
// if (null || -1 && 1) alert( 'third' ); // true

// 2.11.9
// const login = prompt('Введите логин:');
// if(login === 'Админ') {
//     const password = prompt('Введите пароль:');
//     if(password === 'Я главный!') {
//         alert('Здравствуйте!');
//     } else if(password === null) {
//         alert('Отменено!');
//     } else {
//         alert('Неверный пароль!');
//     }
// } else if(login === null) {
//     alert('Отменено!');
// } else {
//     alert('Я вас не знаю!');
// }

// 2.13.1
// let i = 3;
// while (i) {
//     alert( i-- );
// } // последнее 1, потому что 0 === false

// 2.13.2
// let i = 0;
// while (++i < 5) alert( i ); // 1,2,3,4
// let i = 0;
// while (i++ < 5) alert( i ); // 1,2,3,4,5

// 2.13.3
// for (let i = 0; i < 5; i++) alert( i ); // 0,1,2,3,4
// for (let i = 0; i < 5; ++i) alert( i ); // 0,1,2,3,4

// 2.13.4
// for(let i = 2; i <= 10; i += 2) alert(i);

// 2.13.5
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }
// let i = 0;
// while (i < 3) {
//     alert( `number ${i}!` );
//     i++;
// }

// 2.13.6
// while(true) {
//     const numberMessage = Number(prompt('Введите число большее 100:'));
//     if(numberMessage > 100 || numberMessage === 0) break;
// }

// 2.13.7
// const n = 10;
// loop:
// for(let i = 2; i <= n; i++) {
//     for(let x = 2; x < i; x++) {
//         if(i % x === 0) continue loop;
//     }
//     alert(i);
// }

// 2.14.1
// switch (browser) {
//     case 'Edge':
//         alert( "You've got the Edge!" );
//         break;
//
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert( 'Okay we support these browsers too' );
//         break;
//
//     default:
//         alert( 'We hope that this page looks ok!' );
// }
// if(browser === 'Edge') {
//     alert( "You've got the Edge!" );
// } else if(browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     alert( 'Okay we support these browsers too' )
// } else {
//     alert( 'We hope that this page looks ok!' );
// }

// 2.14.2
// const number = +prompt('Введите число между 0 и 3', '');
// if (number === 0) {
//     alert('Вы ввели число 0');
// }
// if (number === 1) {
//     alert('Вы ввели число 1');
// }
// if (number === 2 || number === 3) {
//     alert('Вы ввели число 2, а может и 3');
// }
// switch(number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }

// 2.15.1
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         // ...
//         return confirm('Родители разрешили?');
//     }
// }
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     }
//     // ...
//     return confirm('Родители разрешили?');
// } // Одинаковые функции по функционалу

// 2.15.2
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }
// function checkAge(age) {
//     // return age > 18 ? true : confirm('Родители разрешили?');
//     return age > 18 || confirm('Родители разрешили?');
// }

// 2.15.3
// function min(n1, n2) {
//     return n1 < n2 ? n1 : n2;
// }
// console.log(min(2, 5) === 2);
// console.log(min(3, -1) === -1);
// console.log(min(1, 1) === 1);

// 2.15.4
// function pow(x, n) {
//     return x ** n;
// }
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

// 2.17.1
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
// );
// const ask = (question, yes, no) => confirm(question) ? yes() : no();
// ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
// );










































