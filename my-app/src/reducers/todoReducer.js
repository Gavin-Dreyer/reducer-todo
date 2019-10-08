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
        default:
            return state
    }
}