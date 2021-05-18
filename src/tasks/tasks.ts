/*
export const rest = (...numbers: number[]) =>
{return numbers.reduce((acc,el) => acc + el, 0)}
*/

type ActionType = {type: 'sum' | 'substract' | 'mult' | 'div'}

export function reducer(a: number,b:number, action: ActionType) {
    switch (action.type) {
        case 'sum': return a + b
        case'substract': return a - b
        case 'mult': return a * b
        case 'div': return a / b
        default: return null
    }
}

