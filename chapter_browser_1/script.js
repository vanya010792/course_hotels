// 'use strict';
//
// 1.3.1
// document.body.firstElementChild
// document.body.lastElementChild
// document.body.lastElementChild.lastElementChild
//
// 1.3.2
// Правда, что elem.lastChild.nextSibling всегда равен null - да.
// Правда, что elem.children[0].previousSibling всегда равен null - нет.
//
// 1.3.3
// let table = document.body.firstElementChild;
//
// for (let i = 0; i < table.rows.length; i++) {
//     let row = table.rows[i];
//     row.cells[i].style.backgroundColor = 'red';
// }
//
// 1.4.1
// // 1. Таблица с `id="age-table"`.
// let table = document.getElementById('age-table')
//
// // 2. Все label в этой таблице
// table.getElementsByTagName('label')
//
// // 3. Первый td в этой таблице
// table.rows[0].cells[0]
//
// // 4. Форма с name="search"
// // предполагаем, что есть только один элемент с таким name в документе
// let form = document.getElementsByName('search')[0]
//
// // 5. Первый input в этой форме
// form.getElementsByTagName('input')[0]
//
// // 6. Последний input в этой форме
// let inputs = form.querySelectorAll('input')
// inputs[inputs.length-1]
//
// 1.5.1
// for (let li of document.querySelectorAll('li')) {
//     let title = li.firstChild.data;
// }
//
// 1.5.2
// <body>
//     <script>
//         alert(document.body.lastChild.nodeType);
//     </script>
// </body> // 1
//
// 1.5.3
// let body = document.body;
//
// body.innerHTML = "<!--" + body.tagName + "-->";
//
// alert( body.firstChild.data ); // BODY
//
// 1.5.4
// alert(HTMLDocument.prototype.constructor.name); // HTMLDocument
// alert(HTMLDocument.prototype.__proto__.constructor.name); // Document
// alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node
//
// 1.6.1
// let elem = document.querySelector('[data-widget-name]');
//
// alert(elem.dataset.widgetName);
//
// 1.6.2
// let links = document.querySelectorAll('a');
//
// for (let link of links) {
//     let href = link.getAttribute('href');
//     if (!href) continue;
//
//     if (!href.includes('://')) continue;
//
//     if (href.startsWith('http://internal.com')) continue;
//
//     link.style.color = 'orange';
// }
//
// 1.7.1
// function clear(elem) {
//     for (let i=0; i < elem.childNodes.length; i++) {
//         elem.childNodes[i].remove();
//     }
// }
//
// clear(elem); // очищает список
//
// 1.7.2
// alert(table); // таблица, как и должно быть
//
// table.remove();
// // почему в документе остался текст "ааа"?
//
// браузер исправляет поведение текста внутри тега table.
//
//
// 1.7.3
// let ul = document.createElement('ul');
// document.body.append(ul);
//
// while (true) {
//     let data = prompt("Введите текст для элемента списка", "");
//
//     if (!data) {
//         break;
//     }
//
//     let li = document.createElement('li');
//     li.textContent = data;
//     ul.append(li);
// }
//
// 1.7.4
// let data = {
//     "Рыбы": {
//         "форель": {},
//         "лосось": {}
//     },
//
//     "Деревья": {
//         "Огромные": {
//             "секвойя": {},
//             "дуб": {}
//         },
//         "Цветковые": {
//             "яблоня": {},
//             "магнолия": {}
//         }
//     }
// };
//
// function createTree(container, obj) {
//     container.innerHTML = createTreeText(obj);
// }
//
// function createTreeText(obj) { // отдельная рекурсивная функция
//     let li = '';
//     let ul;
//     for (let key in obj) {
//         li += '<li>' + key + createTreeText(obj[key]) + '</li>';
//     }
//     if (li) {
//         ul = '<ul>' + li + '</ul>'
//     }
//     return ul || '';
// }
//
// createTree(container, data);
//
// 1.7.5
// let lis = document.getElementsByTagName('li');
//
// for (let li of lis) {
//     let descendantsCount = li.getElementsByTagName('li').length;
//     if (!descendantsCount) continue;
//     li.firstChild.data += ' [' + descendantsCount + ']';
// }
//
// 1.7.6
// function createCalendar(elem, year, month) {
//
//     let mon = month - 1;
//     let d = new Date(year, mon);
//
//     let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
//     for (let i = 0; i < getDay(d); i++) {
//         table += '<td></td>';
//     }
//     while (d.getMonth() == mon) {
//         table += '<td>' + d.getDate() + '</td>';
//
//         if (getDay(d) % 7 == 6) {
//             table += '</tr><tr>';
//         }
//
//         d.setDate(d.getDate() + 1);
//     }
//     if (getDay(d) != 0) {
//         for (let i = getDay(d); i < 7; i++) {
//             table += '<td></td>';
//         }
//     }
//     table += '</tr></table>';
//
//     elem.innerHTML = table;
// }
//
// function getDay(date) {
//     let day = date.getDay();
//     if (day == 0) day = 7;
//     return day - 1;
// }
//
// createCalendar(calendar, 2012, 9);
//
// 1.7.7
// function update() {
//     let clock = document.getElementById('clock');
//     let date = new Date();
//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;
//     clock.children[0].innerHTML = hours;
//
//     let minutes = date.getMinutes();
//     if (minutes < 10) minutes = '0' + minutes;
//     clock.children[1].innerHTML = minutes;
//
//     let seconds = date.getSeconds();
//     if (seconds < 10) seconds = '0' + seconds;
//     clock.children[2].innerHTML = seconds;
// }
//
// let timerId;
//
// function clockStart() {
//     timerId = setInterval(update, 1000);
//     update();
// }
//
// function clockStop() {
//     clearInterval(timerId);
//     timerId = null;
// }
//
// 1.7.8
// one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');
//
// 1.7.9
// let sortedRows = Array.from(table.rows)
//     .slice(1)
//     .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
//
// table.tBodies[0].append(...sortedRows);
//
// 1.8.1
// function showNotification({top = 0, right = 0, className, html}) {
//
//     let notification = document.createElement('div');
//     notification.className = "notification";
//     if (className) {
//         notification.classList.add(className);
//     }
//
//     notification.style.top = top + 'px';
//     notification.style.right = right + 'px';
//
//     notification.innerHTML = html;
//     document.body.append(notification);
//
//     setTimeout(() => notification.remove(), 1500);
// }
//
// // test it
// let i = 1;
// setInterval(() => {
//     showNotification({
//         top: 10,
//         right: 10,
//         html: 'Hello ' + i++,
//         className: "welcome"
//     });
// }, 2000);
//
// 1.9.1
// let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;
//
// 1.9.2
// let div = document.createElement('div');
//
// div.style.overflowY = 'scroll';
// div.style.width = '50px';
// div.style.height = '50px';
//
// document.body.append(div);
// let scrollWidth = div.offsetWidth - div.clientWidth;
//
// div.remove();
//
// alert(scrollWidth);
//
// 1.9.3
// ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px'
// ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px'
//
// 1.9.4
// В чём отличие между getComputedStyle(elem).width и elem.clientWidth?
//
// 1. clientWidth возвращает число, а getComputedStyle(elem).width – строку с px на конце.
// 2. getComputedStyle не всегда даст ширину, он может вернуть, к примеру, "auto" для строчного элемента.
// 3. clientWidth соответствует внутренней области элемента, включая внутренние отступы padding, а CSS-ширина (при стандартном значении box-sizing) соответствует внутренней области без внутренних отступов padding.
// 4. Если есть полоса прокрутки, и для неё зарезервировано место, то некоторые браузеры вычитают его из CSS-ширины (т.к. оно больше недоступно для содержимого), а некоторые – нет. Свойство clientWidth всегда ведёт себя одинаково: оно всегда обозначает размер за вычетом прокрутки, т.е. реально доступный для содержимого.
//
// 1.11.1
// let fieldCoords = field.getBoundingClientRect();
//
// let answer = [
//     [ // 1
//         fieldCoords.left,
//         fieldCoords.top
//     ],
//     [ // 2
//         fieldCoords.right,
//         fieldCoords.bottom
//     ],
//     [ // 3
//         fieldCoords.left + field.clientLeft,
//         fieldCoords.top + field.clientTop
//     ],
//     [ // 4
//         fieldCoords.left + field.clientLeft + field.clientWidth,
//         fieldCoords.top + field.clientTop + field.clientHeight
//     ]
// ];
//
// alert(answer.join('  '));
//
// 1.11.2
// function positionAt(anchor, position, elem) {
//
//     let anchorCoords = anchor.getBoundingClientRect();
//
//     switch (position) {
//         case "top":
//             elem.style.left = anchorCoords.left + "px";
//             elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
//             break;
//
//         case "right":
//             elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
//             elem.style.top = anchorCoords.top + "px";
//             break;
//
//         case "bottom":
//             elem.style.left = anchorCoords.left + "px";
//             elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
//             break;
//     }
//
// }
// function showNote(anchor, position, html) {
//
//     let note = document.createElement('div');
//     note.className = "note";
//     note.innerHTML = html;
//     document.body.append(note);
//
//     positionAt(anchor, position, note);
// }
// let blockquote = document.querySelector('blockquote');
//
// showNote(blockquote, "top", "note above");
// showNote(blockquote, "right", "note at the right");
// showNote(blockquote, "bottom", "note below");
//
// 1.11.3
// function getCoords(elem) {
//     let box = elem.getBoundingClientRect();
//
//     return {
//         top: box.top + pageYOffset,
//         left: box.left + pageXOffset
//     };
// }
//
// function positionAt(anchor, position, elem) {
//
//     let anchorCoords = getCoords(anchor);
//
//     switch (position) {
//         case "top":
//             elem.style.left = anchorCoords.left + "px";
//             elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
//             break;
//
//         case "right":
//             elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
//             elem.style.top = anchorCoords.top + "px";
//             break;
//
//         case "bottom":
//             elem.style.left = anchorCoords.left + "px";
//             elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
//             break;
//     }
//
// }
//
// function showNote(anchor, position, html) {
//
//     let note = document.createElement('div');
//     note.className = "note";
//     note.innerHTML = html;
//     document.body.append(note);
//
//     positionAt(anchor, position, note);
// }
//
// let blockquote = document.querySelector('blockquote');
//
// showNote(blockquote, "top", "note above");
// showNote(blockquote, "right", "note at the right");
// showNote(blockquote, "bottom", "note below");
//
// 1.11.4
// function getCoords(elem) {
//     let box = elem.getBoundingClientRect();
//
//     return {
//         top: box.top + pageYOffset,
//         left: box.left + pageXOffset
//     };
// }
//
// function showNote(anchor, position, html) {
//
//     let note = document.createElement('div');
//     note.className = "note";
//     note.innerHTML = html;
//     document.body.append(note);
//
//     positionAt(anchor, position, note);
// }
//
// function positionAt(anchor, position, elem) {
//
//     let anchorCoords = getCoords(anchor);
//
//     switch (position) {
//         case "top-out":
//             elem.style.left = anchorCoords.left + "px";
//             elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
//             break;
//
//         case "right-out":
//             elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
//             elem.style.top = anchorCoords.top + "px";
//             break;
//
//         case "bottom-out":
//             elem.style.left = anchorCoords.left + "px";
//             elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
//             break;
//
//         case "top-in":
//             elem.style.left = anchorCoords.left + "px";
//             elem.style.top = anchorCoords.top + "px";
//             break;
//
//         case "right-in":
//             elem.style.width = '150px';
//             elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
//             elem.style.top = anchorCoords.top + "px";
//             break;
//
//         case "bottom-in":
//             elem.style.left = anchorCoords.left + "px";
//             elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
//             break;
//     }
//
// }
//
//
// let blockquote = document.querySelector('blockquote');
//
// showNote(blockquote, "top-in", "note top-in");
// showNote(blockquote, "top-out", "note top-out");
// showNote(blockquote, "right-out", "note right-out");
// showNote(blockquote, "bottom-in", "note bottom-in");
//
//
//
//
//
