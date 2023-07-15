import React, {useReducer} from 'react'

const UseReducer = () => {
   const IntialValue = 0;
 type Action = {
    type: string;
 }
    const reducer = (state: number, action: Action) => {
          if(action.type === "Incri") {
            state = state + 1
          }
           if(action.type === "Decri" && state > 0) {
            state = state - 1;
          }
          return state
    }
    const[state, dispatch] = useReducer(reducer, IntialValue)
  return (
    <div>
      <h1>USe Reducer Practice</h1>
       <h2>Reducer Practice</h2>
      <h5>Count: {state}</h5>
      <button onClick={() => dispatch({type: "Incri"})}>+</button>
      <button onClick={() => dispatch({type: "Decri"})} >-</button>
    </div>
  )
}

export default UseReducer


