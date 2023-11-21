export function isValidate(compData, userNum) {
    if (!userNum) {
        alert('Вы не ввели свое предположительное число')
        return
    }

    if (!compData.guessNum) {
        alert('Введите диапозон значений и нажмите старт')
        return
    }

    if (userNum < compData.minNum || userNum > compData.maxNum) {
        alert('Ваше число вышло за диапозон значений')
        return
    }

    if (compData.guessNum !== userNum) {
        if (compData.guessNum < userNum) {
            alert('Твое число больше загаданого!')
        } else {
            alert('Твое число меньше загаданого!')
        }
    }

    if (compData.guessNum === userNum) {
        alert('Ты победил!')
        return
    }
}

export function validateCounter(countAttempts, guessNum) {
    if (countAttempts % 3 === 0) {
        if (guessNum % 2 === 0) {
            alert('Подсказка: число четное')
        } else {
            alert('Подсказка: число нечетное')
        }
    }
}