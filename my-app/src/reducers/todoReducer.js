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
                items: state.items.map(item => {
                    if(item.id === action.payload2) {
                     item.completed = action.payload
                    } return {...item, completed: item.completed}
                })
            }
        case 'DELETE_TASK':
            return{
                items: state.items.filter(item => item.completed !== true)
            }
        default:
            return state
    }
}

// state.items[0].completed = !state.items[0].completed
// state.items.map(item => {
//     return item.completed = !item.completed
// })


// state.items.filter(item => {
//     if(item.completed === true) {
//         return item.item = ''
//     }
// })