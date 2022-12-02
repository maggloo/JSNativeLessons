import {log} from "util";
import {HandlePromiseType} from "./Lesson4";

console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

// let pr = new Promise((res, rej) => console.log("Promise is created"))


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

let pr1 = new Promise((res, rej) => res('Promise data'));

// console.log(pr1)

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

// let pr2 = new Promise((res, rej) => rej('Promise Error'));

// console.log(pr2)

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

let pr3 = new Promise((res, rej) => {
    setTimeout(() => {
        res('Promise Data')
    }, 3000)
})

// console.log(pr3)

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.


export const handlePromise: HandlePromiseType = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (param: string) => {
        console.log(`Promise is resolved with data: ${param}`)
    },
    onError: (param: string) => {
        console.log(`Promise is rejected with error: ${param}`)
    },
}

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

/*let pr6 = new Promise((res, rej) => {
    setInterval(() => {
        res('My name is ');
    }, 1000)
})
    .then(res => onSuccess(res))
    .then(result => print(result))

function onSuccess(str: any) {
    return str + 'Rita';
}

function print(param:  string) {
    console.log(param)
}*/

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

/*
let newObj: any = {};

let a = new Promise((res, rej) => {
    setTimeout(()=> {
        res({name: 'Anna'});
    }, 2000)
}).then((res: any) => newObj = {...res})

let b = new Promise((res, rej) => {
    setTimeout(()=> {
        res({age: 16});
    }, 3000)
}).then((res: any) => newObj = {...newObj, ...res})


let c = new Promise((res, rej) => {
    setTimeout(()=> {
        res({city: ''});
    }, 4000)
}).then((res: any) => {
    newObj = {...newObj, ...res};
    console.log(newObj)
})

*/




function testAsync() {
    console.log('1')

    setTimeout(() => {
        console.log('2')
    }, 0)

    function count() {
        console.log('3')
    }

    const res = new Promise((res) => {
        console.log('4')

        res('5')
    })

    count();
    console.log(res)
}

console.clear();
testAsync();



// just a plug
export default () => {
};