// // 'use strict';
//
// 2.1.1
// document.getElementById('hider').onclick = function() {
//     document.getElementById('text').hidden = true;
// }
//
// 2.1.2
// button.addEventListener("click", () => alert("1"));
//
// button.removeEventListener("click", () => alert("1"));
//
// button.onclick = () => alert(2); // 1, 2
//
// 2.1.3
// field.onclick = function(event) {
//
//     let fieldCoords = this.getBoundingClientRect();
//
//     let ballCoords = {
//         top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
//         left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
//     };
//
//     if (ballCoords.top < 0) ballCoords.top = 0;
//
//     if (ballCoords.left < 0) ballCoords.left = 0;
//
//
//     if (ballCoords.left + ball.clientWidth > field.clientWidth) {
//         ballCoords.left = field.clientWidth - ball.clientWidth;
//     }
//
//     if (ballCoords.top + ball.clientHeight > field.clientHeight) {
//         ballCoords.top = field.clientHeight - ball.clientHeight;
//     }
//
//     ball.style.left = ballCoords.left + 'px';
//     ball.style.top = ballCoords.top + 'px';
// }
//
// 2.1.4
// let menuElem = document.getElementById('sweeties');
// let titleElem = menuElem.querySelector('.title');
//
// titleElem.onclick = function() {
//     menuElem.classList.toggle('open');
// };
//
// 2.1.5
// let panes = document.querySelectorAll('.pane');
//
// for(let pane of panes) {
//     pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
//     pane.firstChild.onclick = () => pane.remove();
// }
//
// 2.1.6
// let i = 1;
// for(let li of carousel.querySelectorAll('li')) {
//     li.style.position = 'relative';
//     li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
//     i++;
// }
//
// let width = 130;
// let count = 3;
//
// let list = carousel.querySelector('ul');
// let listElems = carousel.querySelectorAll('li');
//
// let position = 0;
//
// carousel.querySelector('.prev').onclick = function() {
//     position += width * count;
//     position = Math.min(position, 0)
//     list.style.marginLeft = position + 'px';
// };
//
// carousel.querySelector('.next').onclick = function() {
//     position -= width * count;
//     position = Math.max(position, -width * (listElems.length - count));
//     list.style.marginLeft = position + 'px';
// };
//
// 2.3.1
// container.onclick = function(event) {
//     if (event.target.className != 'remove-button') return;
//
//     let pane = event.target.closest('.pane');
//     pane.remove();
// };
//
// 2.3.2
// for (let li of tree.querySelectorAll('li')) {
//     let span = document.createElement('span');
//     li.prepend(span);
//     span.append(span.nextSibling);
// }
//
// tree.onclick = function(event) {
//
//     if (event.target.tagName != 'SPAN') {
//         return;
//     }
//
//     let childrenContainer = event.target.parentNode.querySelector('ul');
//     if (!childrenContainer) return;
//
//     childrenContainer.hidden = !childrenContainer.hidden;
// }
//
// 2.3.3
// grid.onclick = function(e) {
//     if (e.target.tagName != 'TH') return;
//
//     let th = e.target;
//     sortGrid(th.cellIndex, th.dataset.type);
// };
//
// function sortGrid(colNum, type) {
//     let tbody = grid.querySelector('tbody');
//
//     let rowsArray = Array.from(tbody.rows);
//
//     let compare;
//
//     switch (type) {
//         case 'number':
//             compare = function(rowA, rowB) {
//                 return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
//             };
//             break;
//         case 'string':
//             compare = function(rowA, rowB) {
//                 return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
//             };
//             break;
//     }
//
//     rowsArray.sort(compare);
//
//     tbody.append(...rowsArray);
// }
//
// 2.3.4
// let tooltipElem;
//
// document.onmouseover = function(event) {
//     let target = event.target;
//
//     let tooltipHtml = target.dataset.tooltip;
//     if (!tooltipHtml) return;
//
//     tooltipElem = document.createElement('div');
//     tooltipElem.className = 'tooltip';
//     tooltipElem.innerHTML = tooltipHtml;
//     document.body.append(tooltipElem);
//
//     let coords = target.getBoundingClientRect();
//
//     let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
//     if (left < 0) left = 0;
//
//     let top = coords.top - tooltipElem.offsetHeight - 5;
//     if (top < 0) {
//         top = coords.top + target.offsetHeight + 5;
//     }
//
//     tooltipElem.style.left = left + 'px';
//     tooltipElem.style.top = top + 'px';
// };
//
// document.onmouseout = function(e) {
//
//     if (tooltipElem) {
//         tooltipElem.remove();
//         tooltipElem = null;
//     }
//
// };
//
// 2.4.1
// function handler(event) {
//     alert("...");
//     event.preventDefault();
// }
//
// 2.4.2
// contents.onclick = function(event) {
//
//     function handleLink(href) {
//         let isLeaving = confirm(`Leave for ${href}?`);
//         if (!isLeaving) return false;
//     }
//
//     let target = event.target.closest('a');
//
//     if (target && contents.contains(target)) {
//         return handleLink(target.getAttribute('href'));
//     }
// };
//
// 2.4.3
// thumbs.onclick = function(event) {
//     let thumbnail = event.target.closest('a');
//
//     if (!thumbnail) return;
//     showThumbnail(thumbnail.href, thumbnail.title);
//     event.preventDefault();
// }
//
// function showThumbnail(href, title) {
//     largeImg.src = href;
//     largeImg.alt = title;
// }
//
//
