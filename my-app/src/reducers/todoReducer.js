export const initialState = {
    items: [
        {
            item: 'Learn about reducers',
            id: Date.now(),
            completed: false
        }
    ]
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            const newItem = {
                item: action.payload,
                id: Date.now(),
                completed: false
            }
            return {
                ...state,
                items: [...state.items, newItem]
            }
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                items: [...state.items, state.items.map(item => {
                    if(item.id === action.payload2) {
                    return item.completed = action.payload
                    }
                })]
            }
        default:
            return state
    }
}

// state.items[0].completed = !state.items[0].completed
// state.items.map(item => {
//     return item.completed = !item.completed
// })