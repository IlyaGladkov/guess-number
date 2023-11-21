import { isValidate, validateCounter } from './validate.js'

const btnSt = document.querySelector('.btnSt')
const checkBtn = document.querySelector('.check')
const minIn = document.getElementById('minIn')
const maxIn = document.getElementById('maxIn')
const userIn = document.querySelector('.userIn')
const counterTry = document.querySelector('.counterTry')

let compData = {
    guessNum: 0,
    minNum: 0,
    maxNum: 100
}
let countAttempts = 0

btnSt.addEventListener('click', () => {
    let min = +minIn.value
    let max = +maxIn.value
    compData = {
        guessNum: Math.floor(Math.random() * (max - min) + min),
        minNum: min,
        maxNum: max
    }
})

checkBtn.addEventListener('click', () => {
    let userAns = +userIn.value
    countAttempts++

    isValidate(compData, userAns)

    validateCounter(countAttempts, compData.guessNum)

    counterTry.innerHTML = `Попыток: ${countAttempts}`
})

let restart = document.querySelector('.restart')
restart.addEventListener('click', () => {
    minIn.value = ''
    maxIn.value = ''
    userIn.value = ''
    countAttempts = 0
    counterTry.innerHTML = `Попыток: 0`
    compData = {
        guessNum: 0,
        minNum: 0,
        maxNum: 100
    }
    alert('Игра перезапущена')
})