type ActionType = ReturnType<typeof IncAC> | ReturnType<typeof DecAC> | ReturnType<typeof MultAC>

let initialState = {
    count: 0
}
type InitStateType = {count: number}

export let counterReducer = (state: InitStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "INC": return {count: state.count + 1}
        case "DEC": return {count: state.count - 1}
        case "MULT": return {count: state.count * 2}
        default: return state
    }
}

export const IncAC = () => {return {type: 'INC'} as const }
export const DecAC = () => {return {type: 'DEC'} as const}
export const MultAC = () => {return {type: 'MULT'} as const}