import React from 'react';

import {useSelector, useDispatch} from "react-redux";
import { increment, decriment } from './actions';
import {AppState}  from "./reducer"

const Redux: React.FC = () => {
  const count = useSelector((state: AppState) => state.count);
  const dispatch = useDispatch();


  const handleIncriment = () => {
    dispatch(increment())
  }

  const handleDecriment = () => {     
    dispatch(decriment())
  }

  return (
    <div>
   <h1>Counter : {count}</h1>
   <button onClick={handleIncriment}>Incrcriment</button>
   <button onClick={handleDecriment}>Decriment</button>

    </div>
  );
}

export default Redux;
