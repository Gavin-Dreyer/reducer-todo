import React from 'react'

const TodoForm = props => {
    

    return (
        <form onSubmit={props.handleSubmit}>
            <input
            className = 'todoInput'
            type= 'text'
            value= {props.input}
            name= 'todoForm'
            onChange={props.handleChanges}
            />
            <button onClick={() => props.dispatch({ type: 'ADD_TODO', payload: props.input })}>Add Item</button>
            <button onClick={() => props.dispatch({ type: 'DELETE_TASK'})}>Delete</button>
        </form>
    )
}

export default TodoForm