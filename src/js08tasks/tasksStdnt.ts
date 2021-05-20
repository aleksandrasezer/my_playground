// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму.

export function sum(...nums: number[]): number {
    let sum = 0
    nums.forEach(el => sum += el)
    return sum
}

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b < c || c + b < a || a + c < b) return '00'
    if (a === b && b === c && a === c) return '10'
    if (a === b || b === c || a === c) return '01'
    if (a !== b && b !== c && a !== c) return '11'
    else return '00'
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    const array = number.toString().split('')
    let sum = 0
    array.forEach(el => sum += +el)
    return sum
}

export const isEvenIndexSumGreater = (arr: number[]): boolean => {
    let sumEven = 0
    let sumOdd = 0
    arr.forEach((el, i) => i % 2 == 0 ? sumEven += el : sumOdd += el)
    return sumEven > sumOdd
}

export function isSquareGreater(areaCr: number, areaSq: number): boolean {
    return (Math.sqrt(areaCr)) / Math.PI < Math.sqrt(areaSq) / 2
}


// 6. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

export function getBanknoteList(amountOfMoney: number): number[] {
    let res: number[] = []
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    banknotes.forEach(el => {
        if (amountOfMoney / el >= 1) {
            res.push(el)
            amountOfMoney -= el * Math.floor(amountOfMoney / el)
        }
    })
    console.log(res)
    return res
}