import React, { useReducer, useState, useEffect} from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css';

import { initialState, reducer } from './reducers/todoReducer'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [input, setInput] = useState()

  console.log(state)

  const handleChanges = event => {
      setInput(event.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setInput('')
}

  
  return (
    <div className="App">
      <TodoList state={state} dispatch={dispatch} />
      <TodoForm state={state} input={input} handleChanges={handleChanges} dispatch={dispatch} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
