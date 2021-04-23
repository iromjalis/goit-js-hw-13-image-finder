//*Statement - иструкция

const b =10
const a=b*2;
// console.log(a); //~20

//*Expressio - выражение

// [[a] = [[b] * [2]]]

//*Свойство - существителное

'JavaScript is awesome'.length
// console.log('JavaScript is awesome'.length); //~21 /рост/вес/

//*Метод - действие
// console.log('JavaScript is awesome'.toUpperCase()) 
//~JAVASCRIPT IS AWESOME

//*Идентификатор = имя переменной, функции, параметра, класса
const _lovercase = 10;
const $dollar = 5;

//* Prompt + Confirm
// const message = 'JavaScript is awesome';

//*Number
// const value = '5'
// console.log(Number(value)); //~5
// console.log(typeof Number(value)); //~number

//*ParseInt -> целое число
//*ParseFloat -> из строки дробное число

// console.log(Number.parseInt('12qwe'));//~12
// console.log(Number.parseInt('12.46qwe')); //~12
// console.log(Number.parseInt('qwe'));//~NaN

// console.log(Number.parseFloat('12qwe'));//~12
// console.log(Number.parseFloat('12.46qwe')); //~12.46
// console.log(Number.parseFloat('qwe'));//~NaN
//* Number.isNaN(val) => Этот метод отвечает на вопрос "Это Not A Number?
const number = Number('qwe')
// console.log(Number.isNaN(value)); //~false
// console.log(0.1+0.2);

const message = 'Welcome to Bahamas!';
// console.log(message.indexOf('to')); // 8

//Запомните 6 ложных (falsy) значений, приводящихся к false в логическом преобразовании:
//^ 0, NaN, null, undefined, пустая строка: "" или '', false.
//Абсолютно все остальное приводится к true.

//*IF
let age= 18;
const type = age>=18?'adult': 'child';
// console.log(type);

//*Global scope
const value = 5;

// if(true){
//     console.log('Block scope', value);
// }
// console.log('Global scope', value);

//*While - с предусловием - проверяет до вып цикла
let counter=10
while(counter>0){
    console.log(counter);
    counter--
}