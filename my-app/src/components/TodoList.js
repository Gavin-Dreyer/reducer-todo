import React from 'react'

const TodoList = props => {
    
    return (
        <>
            <div>
                {props.state.items.map(item => (
                    <p key={item.id}>
                        {item.item}
                    </p>
                ))}
            </div>
        </>
    )
}

export default TodoList