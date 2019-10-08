import React from 'react'

const Todo = (props) => {
    console.log(props.completed)
    return (
        <p key={props.key}
        onClick={() => props.dispatch({ type: 'TOGGLE_COMPLETED', payload: !props.completed, payload2: props.id })}
        className={`Task${props.completed ? ` completed` : ''}`}
        >
            {props.task}
        </p>
    )
}

export default Todo


