import React, { useReducer} from 'react';
import './App.css';

import { initialState, reducer } from './reducers/todoReducer'

function App() {
  const[state, dispatch] = useReducer(reducer, initialState)
  console.log(state)

  return (
    <div className="App">
      Todo
    </div>
  );
}

export default App;
