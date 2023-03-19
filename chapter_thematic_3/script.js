// // 'use strict';
//
// 3.1.1
// async function getUsers(names) {
//     let jobs = [];
//
//     for(let name of names) {
//         let job = fetch(`https://api.github.com/users/${name}`).then(
//             successResponse => {
//                 if (successResponse.status != 200) {
//                     return null;
//                 } else {
//                     return successResponse.json();
//                 }
//             },
//             failResponse => {
//                 return null;
//             }
//         );
//         jobs.push(job);
//     }
//
//     let results = await Promise.all(jobs);
//
//     return results;
// }
//
// 3.5.1
// Accept: */*
// Accept-Charset: utf-8
// Accept-Encoding: gzip,deflate,sdch
// Connection: keep-alive
// Host: google.com
// Origin: http://javascript.info
// Referer: http://javascript.info/some/url
// Как вы можете видеть, присутствуют и Referer, и Origin.
//
// Вопросы:
//
// Почему нужен Origin, если Referer содержит даже больше информации?
// Возможно ли отсутствие Referer или Origin, или это неправильно?
//
// Нам нужен Origin, потому что иногда Referer отсутствует. Например, когда мы запрашиваем через fetch HTTP-страницу с HTTPS (менее безопасный доступ с более безопасного), то Referer нет.
//
// Content Security Policy (политика безопасности содержимого) может запретить отправление Referer.
//
// Как мы увидим позже, у fetch есть опции, которые предотвращают отправку Referer и даже позволяют изменять его (в пределах того же сайта).
//
// Согласно спецификации, Referer является необязательным HTTP-заголовком.
//
// Именно потому что Referer ненадёжен, был изобретён Origin. Браузер гарантирует наличие правильного Origin при запросах на другой источник.
//
