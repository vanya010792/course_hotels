// 'use strict';
//
// 4.1.1
// // 1)
// let selectedOption = genres.options[genres.selectedIndex];
// alert( selectedOption.value );
// alert( selectedOption.text );
//
// // 2)
// let newOption = new Option("Классика", "classic");
// genres.append(newOption);
//
// // 3)
// newOption.selected = true;
//
// 4.2.1
// let area = null;
// let view = document.getElementById('view');
//
// view.onclick = function() {
//     editStart();
// };
//
// function editStart() {
//     area = document.createElement('textarea');
//     area.className = 'edit';
//     area.value = view.innerHTML;
//
//     area.onkeydown = function(event) {
//         if (event.key == 'Enter') {
//             this.blur();
//         }
//     };
//
//     area.onblur = function() {
//         editEnd();
//     };
//
//     view.replaceWith(area);
//     area.focus();
// }
//
// function editEnd() {
//     view.innerHTML = area.value;
//     area.replaceWith(view);
// }
//
// 4.2.2
// let table = document.getElementById('bagua-table');
//
// let editingTd;
//
// table.onclick = function(event) {
//
//     // 3 возможных цели
//     let target = event.target.closest('.edit-cancel,.edit-ok,td');
//
//     if (!table.contains(target)) return;
//
//     if (target.className == 'edit-cancel') {
//         finishTdEdit(editingTd.elem, false);
//     } else if (target.className == 'edit-ok') {
//         finishTdEdit(editingTd.elem, true);
//     } else if (target.nodeName == 'TD') {
//         if (editingTd) return; // уже редактируется
//
//         makeTdEditable(target);
//     }
//
// };
//
// function makeTdEditable(td) {
//     editingTd = {
//         elem: td,
//         data: td.innerHTML
//     };
//
//     td.classList.add('edit-td'); // td в состоянии редактирования, CSS применятся к textarea внутри ячейки
//
//     let textArea = document.createElement('textarea');
//     textArea.style.width = td.clientWidth + 'px';
//     textArea.style.height = td.clientHeight + 'px';
//     textArea.className = 'edit-area';
//
//     textArea.value = td.innerHTML;
//     td.innerHTML = '';
//     td.appendChild(textArea);
//     textArea.focus();
//
//     td.insertAdjacentHTML("beforeEnd",
//         '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
//     );
// }
//
// function finishTdEdit(td, isOk) {
//     if (isOk) {
//         td.innerHTML = td.firstChild.value;
//     } else {
//         td.innerHTML = editingTd.data;
//     }
//     td.classList.remove('edit-td');
//     editingTd = null;
// }
//
// 4.2.3
// mouse.tabIndex = 0;
//
// mouse.onclick = function() {
//     this.style.left = this.getBoundingClientRect().left + 'px';
//     this.style.top = this.getBoundingClientRect().top + 'px';
//
//     this.style.position = 'fixed';
// };
//
//
// mouse.onkeydown = function(e) {
//     switch (e.key) {
//         case 'ArrowLeft':
//             this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px';
//             return false;
//         case 'ArrowUp':
//             this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px';
//             return false;
//         case 'ArrowRight':
//             this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
//             return false;
//         case 'ArrowDown':
//             this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
//             return false;
//     }
// };
//
// 4.3.1
// let form = document.forms.calculator;
//
// form.money.oninput = calculate;
// form.months.onchange = calculate;
// form.interest.oninput = calculate;
//
// function calculate() {
//     let initial = +form.money.value;
//     if (!initial) return;
//
//     let interest = form.interest.value * 0.01;
//
//     if (!interest) return;
//
//     let years = form.months.value / 12;
//     if (!years) return;
//
//     let result = Math.round(initial * (1 + interest) ** years);
//
//     let height = result / form.money.value * 100 + 'px';
//     document.getElementById('height-after').style.height = height;
//     document.getElementById('money-before').innerHTML = form.money.value;
//     document.getElementById('money-after').innerHTML = result;
// }
//
// calculate();
//
// 4.4.1
// function showCover() {
//     let coverDiv = document.createElement('div');
//     coverDiv.id = 'cover-div';
//
//     document.body.style.overflowY = 'hidden';
//
//     document.body.append(coverDiv);
// }
//
// function hideCover() {
//     document.getElementById('cover-div').remove();
//     document.body.style.overflowY = '';
// }
//
// function showPrompt(text, callback) {
//     showCover();
//     let form = document.getElementById('prompt-form');
//     let container = document.getElementById('prompt-form-container');
//     document.getElementById('prompt-message').innerHTML = text;
//     form.text.value = '';
//
//     function complete(value) {
//         hideCover();
//         container.style.display = 'none';
//         document.onkeydown = null;
//         callback(value);
//     }
//
//     form.onsubmit = function() {
//         let value = form.text.value;
//         if (value == '') return false; // игнорируем отправку пустой формы
//
//         complete(value);
//         return false;
//     };
//
//     form.cancel.onclick = function() {
//         complete(null);
//     };
//
//     document.onkeydown = function(e) {
//         if (e.key == 'Escape') {
//             complete(null);
//         }
//     };
//
//     let lastElem = form.elements[form.elements.length - 1];
//     let firstElem = form.elements[0];
//
//     lastElem.onkeydown = function(e) {
//         if (e.key == 'Tab' && !e.shiftKey) {
//             firstElem.focus();
//             return false;
//         }
//     };
//
//     firstElem.onkeydown = function(e) {
//         if (e.key == 'Tab' && e.shiftKey) {
//             lastElem.focus();
//             return false;
//         }
//     };
//
//     container.style.display = 'block';
//     form.elements.text.focus();
// }
//
// document.getElementById('show-button').onclick = function() {
//     showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
//         alert("Вы ввели: " + value);
//     });
// };
//
//
//
