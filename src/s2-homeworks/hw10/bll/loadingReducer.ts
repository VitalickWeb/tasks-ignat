const initState = {
    isLoading: false,
}
type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingReducer = (state: typeof initState = initState, action: LoadingActionType): typeof initState => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING':
        return {...state,
            isLoading: state.isLoading === false ? true : action.isLoading
        }

        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => {
    return {
        type: 'CHANGE_LOADING',
        isLoading,
    } as const
}
