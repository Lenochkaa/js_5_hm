// Логический оператор

// I if - не полная форма логичкого оператора; if (если)

// if (условие) {
//     инструкция
// }

// //II  if else - полная форма логического оператора; else (в ином случае)

// if (условие) {
//     инструкция1
// } else {
//     инструкция2
// }

// // III if else-if else - каскадное ветвление 

// if (условие) {
//     инструкция1
// } else if (условие) {
//     инструкция2
// } else if (условие) {
//     инструкция3
// } ......
// else {
//     инструкцияN
// }

// let ageUser = prompt("Сколько тебе лет?")

// if (ageUser > 25) {
//     alert("Ты большой дядя!!")
// } else if (ageUser > 0 && ageUser < 26) {
//     alert("Ты ещё маленький!!")
// } else {
//     alert("Ты кто??")
// }

// let password = prompt("Введите пароль -->")

// if (password == "dendenden") {
//     alert("Добро пожаловать!!!")
// }  else {
//     alert("Нет в системе")
// }


// Упрощенная запись логического оператора

// let переменная = условие ? значение1 :значение2

// let ageUser = prompt("Сколько тебе лет?")

// let message = (ageUser > 25) ? alert("Ты большой дядя!!") : (ageUser > 0 && ageUser < 26 && ) ? alert("Ты ещё маленький!!"): alert("ТЫ кто ?");


// ЗАДАЧИ

//TASK 1
// let a = Number(prompt("Введите целое число"))

// if (a > 0) {
//     alert(a+1)
// } else {
//     alert(a)
// }

//task 2
// let a = Number(prompt("Введите целое число"))

// if (a > 0) {
//     alert(a+1)
// } else {
//     alert(a-2)
// }

//task 3
// let a = Number(prompt("Введите целое число"))

// if (a > 0) {
//     alert(a+1)
// } else if (a < 0) {
//     alert(a-2)
// } else {
//     alert(a = 10)
// }

// task 4
// let a = prompt("1")
// let b = prompt("2")
// let c = prompt("3")

// if (a > 0 && b > 0 && c > 00) {
//     alert("Все числа положительные.")
// } else if ((a > 0 && b > 0 && c < 0) || (a > 0 && b < 0 && c > 0) || (a < 0 && b > 0 && c > 0)) {
//     alert("Два положительных.")
// } else if ((a > 0 && b < 0 && c < 0) || (a < 0 && b > 0 && c < 0) || (a < 0 && b < 0 && c > 0)) {
//     alert("Одно положительное.")
// } else {
//     alert("все числа отрицательные")
// }

// task 11
// let a = prompt("1")
// let b = prompt("2")

// if ( a != b) {
//     if(a > b) {
//         alert(a, b = a)
//     } else {
//         alert(b, a = b)
//     }
// } else {
//     alert(a = 0, b = 0)
// }

// task 5
// let a = prompt("1")
// let b = prompt("2")
// let c = prompt("3")

// if (a > 0 && b > 0 && c > 00) {
//     alert("Все числа положительные и нет отрицательных.")
// } else if ((a > 0 && b > 0 && c < 0) || (a > 0 && b < 0 && c > 0) || (a < 0 && b > 0 && c > 0)) {
//     alert("Два положительных и одно отрицательное.")
// } else if ((a > 0 && b < 0 && c < 0) || (a < 0 && b > 0 && c < 0) || (a < 0 && b < 0 && c > 0)) {
//     alert("Одно положительное и два отрицательных.")
// } else {
//     alert("все числа отрицательные и нет положительных.")
// }

//task 6
// let a = Number(prompt("1"))
// let b = Number(prompt("2"))

// if (a > b) {
//     alert(a)
// } else if (b > a) {
//     alert(b)
// } else {
//     alert("Оба числа равны.")
// }

//task 7
// let a = Number(prompt("1"))
// let b = Number(prompt("2"))

// if (a > b) {
//     alert("2 - порядковый номер меньшего числа")
// } else if (b > a) {
//     alert("1 - порядковый номер меньшего числа")
// } else {
//     alert("Оба числа равны.")
// }

// task 8
// let a = Number(prompt("1"))
// let b = Number(prompt("2"))

// if (a > b) {
//     alert(a + "; " + b)
// } else if (b > a) {
//     alert(b + "; " + a)
// } else {
//     alert("Оба числа равны.")
// }

//task 9
// let a = prompt("1")
// let b = prompt("2")

// if (a > b) {
//     alert((a = b) + "; " + (b = a))            // IMPORTANT
// } else {
//     alert(a + "; " + b)
// }

//TASK 10 
// let a = Number(prompt("1"))
// let b = Number(prompt("2"))

// if ( a != b) {
//     alert(a + b)
// } else {
//     alert((a = 0) + (b = 0))
// }

//task 12 
// let a = Number(prompt("1"))
// let b = Number(prompt("2"))
// let c = Number(prompt("3"))

// if (a > c && b > c) {
//     alert(c)
// } else if (b > a && c > a) {
//     alert(a)
// } else if (a > b && c > b)  {
//     alert(b)
// }

//task 13 
// let a = Number(prompt("1"))
// let b = Number(prompt("2"))
// let c = Number(prompt("3"))

// if ((a > c && b < c)  || (b > c && a < c)) {
//     alert(c)
// } else if ((b > a && c < a) || (c > a && b < a)){
//     alert(a)
// } else if ((a > b && c < b) || (c > b && a < b)){
//     alert(b)
// } else {
//     alert("нет среднего")
// }

//task 14
// let a = Number(prompt("1"))
// let b = Number(prompt("2"))
// let c = Number(prompt("3"))

// if ((a > c && b > c) && (a > b)) {
//     alert(c + " - наименьшее, " + a + " - наибольшее")
// } else if ((a > c && b > c) && (b > a)) {
//     alert(c + " - наименьшее, " + b + " - наибольшее")
// } else if ((b > a && c > a) && (b > c)) {
//     alert(a + " - наименьшее, " + b + " - наибольшее")
// } else if ((b > a && c > a) && (c > b)) {
//     alert(a + " - наименьшее, " + c + " - наибольшее")
// } else if ((a > b && c > b) && (a > c)) {
//     alert(b + " - наименьшее, " + a + " - наибольшее")
// } else {
//     alert(b + " - наименьшее, " + c + " - наибольшее")
// }

//task 15
// let a = Number(prompt("1"))
// let b = Number(prompt("2"))
// let c = Number(prompt("3"))

// if (a > c && b > c)  {
//     alert(a+b)
// } else if (b > a && c > a){
//     alert(b + c)
// } else {
//     alert(a + c)
// }

//task 16 
let a = prompt("1")
let b = prompt("2")
let c = prompt("3")

if (a > b && b > c) {
    alert((a * 2) + "; " + (b *2) + "; " + (c *2))
} else {
    alert((a = -a) + "; " + (b = -b) + "; " + (c = -c))
}
