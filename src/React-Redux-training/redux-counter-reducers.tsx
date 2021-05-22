type ActionType = ReturnType<typeof SumAC> | ReturnType<typeof SubAC> | ReturnType<typeof MultAC>

let initialState = {
    count: 0
}
type InitStateType = {count: number}

export let counterReducer = (state: InitStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "SUM": return {count: state.count + 1}
        case "SUB": return {count: state.count + 1}
        case "MULT": return {count: state.count + 1}
        default: return state
    }
}

export const SumAC = () => {return {type: 'SUM'} as const }
export const SubAC = () => {return {type: 'SUB'} as const}
export const MultAC = () => {return {type: 'MULT'} as const}