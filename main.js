"use strict"

const items = document.querySelectorAll(".countdown-item > h4");
const countDownElement = document.querySelector(".countdown")
// назначаем дату отсчета
const countDownDate = new Date(2027, 11, 18, 20, 0, 0).getTime();

function getCountDownTime() {
// получить текущее время
const now = new Date().getTime();

// найти разницу 
const distance = countDownDate - now

// 1с == 1000 милисекнуд 1 минута 60 секунд 1 час 60 минут 1 день 24 часа
// создаем переменные в милисекнудах
const oneday = 24 * 60 * 60 * 1000
const onehour = 60 * 60 * 1000
const oneminute = 60 * 1000

// подсчет для дней часов минут и секунд
let days = Math.floor(distance / oneday)
let hour = Math.floor((distance % oneday) / onehour)
let minut = Math.floor((distance % onehour) / oneminute)
let second = Math.floor((distance % oneminute) / 1000)

// создаем массив с перпеменными
const values = [days, hour, minut, second]

// добавляем значения переменных на страницу
items.forEach(function(item, index){
    item.textContent = values[index];
})

if ( distance < 0){
    clearInterval(countdown)
    countDownElement.innerHTML = "<h4 class='expired'>Время вышло</h4>"
}
}

// обновление счетчика каждую секунду
let countdown = setInterval(getCountDownTime, 1000)

//инициализация текущего времени
getCountDownTime();