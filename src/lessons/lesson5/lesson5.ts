import {inspect} from "util";

console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290


// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

type someObjType = {
    name: string;
    age: number;
    greeting: () => void
}

let someObj:someObjType = {
    name: 'Eugene',
    age: 32,
    greeting() {
        return `My name is ${this.name}. I am ${this.age}`
    }
}

// console.log(someObj.greeting())




// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект



const counter = {
    count: 0,
    getCurrentCount(){
        return this.count;
    },
    increment(){
        this.count += 1;
        return this
    },
    decrement(){
        this.count -= 1;
        return this
    },
    setCurrentCount(count: number){
        this.count = count;
        return this
    },
    resetCurrentCount(){
        this.count = 0;
        return this
    }
}

/*counter.increment()
counter.increment()
counter.increment()
console.log(counter.count)
counter.setCurrentCount(5)
console.log(counter.count)*/

// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12

// console.log(counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount())

// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01

function MyFirstConstructorFunc(this: any, name: string, age: number) {
    this['name'] = name;
    this.age = age;
    this.greeting = someObj.greeting.bind(this)
}

let a = new (MyFirstConstructorFunc as any)('Rita', 24);
// console.log(a.greeting())


// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

let One: any = {name: 'One'};
let Two = {name: 'Two', sayHello: function() {console.log(`Hello, my name is ${this.name}`)}};

// Two.sayHello.bind(One)()

// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore

const helperObj = {
    name: '',
    age: 0,
    changeName(name: string){
        this.name = name;
    },
    setAge(age: number){
        this.age = age;
    },
    greeting: Two.sayHello
}
helperObj.changeName('Masha');
helperObj.setAge(23);
// helperObj.greeting()
// console.log(helperObj)




// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя
function sumTwoNumbers(a:number,b:number): number {
    return a + b
}

function bindNumber(foo: (a: number, b: number) => number, num1: number): (num2: number) => number {

    return (num2) => foo.bind({}, num1, num2)()
}
//
// console.log(bindNumber(sumTwoNumbers, 4)(5))

// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One

function newFoo(one: {name: string}, obj: any) {
    return (str: string) => obj.changeName.call(one,str);
}
newFoo(One, helperObj)('Her')
// console.log(One)



// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30

// helperObj.setAge.bind(Two)(30)
helperObj.setAge.call(Two, 30)
// console.log(Two)

// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two



// One.hi = helperObj.greeting.bind(Two)
//
// One.hi()

/*One.hi = helperObj.greeting
One.hi.call(Two)*/


// Реализовать задачи 2-4 из Bind с помощью Call


// learn js.ru

//1

let calculator = {
    a: 0,
    b: 0,
    read() {
        // @ts-ignore
        this.a = +prompt('a?', 0);
        // @ts-ignore
        this.b = +prompt('b?', 0);
    },

    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    }
};

/*
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

//2


let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        alert( this.step );
        return this;
    }
};

// ladder.up().up().down().showStep().down().showStep();

//call apply

function sumArgs() {

    // @ts-ignore
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
   /* return rest.reduce(function(a, b) {
        return a + b;
    });*/
}
//
// @ts-ignore
// console.log(( sumArgs(4, 5, 6)))

/*function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'Вася',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};*/

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


function askPassword(ok: any, fail: any) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',

    login(result: boolean) {
        alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
};

// askPassword(user.login.bind(user,true), user.login.bind(user, false)); // ?
//

// just a plug
export default () => {};