import React from 'react'

import Todo from './Todo'

const TodoList = props => {

    console.log(props.state.items)

    return (
        <>
            <div>
                {props.state.items.map(item => (
                  <Todo key={item.id} id={item.id} task={item.item} completed={item.completed} dispatch={props.dispatch}/>
                ))}
            </div>
        </>
    )
}

export default TodoList