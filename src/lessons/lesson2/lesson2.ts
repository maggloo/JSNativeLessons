// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

/*function sum(a: number){
    return (b: number) => {
        return a + b;
    }
}*/

// console.log(sum(0)(3))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3


import {log} from "util";

function makeCounter() {
    let a = 0;
    return () => {
        return ++a
    }
}

const counter = makeCounter();
const counter2 = makeCounter();

/*console.log(counter())
console.log(counter2())*/

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function sum(a: number) {
    let start = a;

    return {
        increase() {
            return start = start + 1;
        },
        decrease() {
            return start = start - 1;
        },
        reset() {
            return start = 0;
        },
        set(b: number) {
            return start = b;
        }
    }

}

// console.log(sum(2).set(4))

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

function superSum(a: number) {
    let newArr: any = [];

    return function newFoo(){
        if (a > 0) {
            return (...args: number[]) => {
                newArr.push(...args);
                if (a > newArr.length) {
                    return newFoo()
                } else {
                    return newArr.splice(0, newArr[a-1]).reduce((a: any, b: any) => a + b)
                }
            }
        } else {
            return 0;
        }
    }();
}

// @ts-ignore
// console.log(superSum(4)(2,5)(3,9))

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

function sumTo(n) {
    return (n > 0) ? n + sumTo(n-1) : 0;
}
// console.log(sumTo(1));

function factorial(n: number): number {
    return (n > 1) ? n * factorial(n-1) : 1;
}

// console.log(factorial(5));

function fib(n: number): number{
    return (n > 1) ?  fib(n-1) + fib(n-2)  : n;
}

// console.log(fib(7))

function printList(list: any): any{

    if (list.next ) {
        printList(list.next)
    }
    console.log(list.next)
}

/*
console.log(printList({
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}))*/
// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

function flatten(array: Array<any>){
    let newArr: any = [];
    // @ts-ignore
    for (const [index, element] of array.entries()) {
        Array.isArray(element) ?  newArr.push(...flatten(element)) :  newArr.push(element)
    }
    return newArr;
}

/*console.log(flatten([0, 1, 2, [[[3, 4]]]]))*/

// just a plug
export default () => {
};