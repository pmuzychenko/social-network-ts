

type InitialStateType = {
    items: Array<string>
}

let initialState: InitialStateType = {
    items: ['Profile', 'Messages', 'News', 'Music', 'Settings']
}

export const sidebarReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    return state
}