import React, { useEffect, useState } from 'react';

export const Statehook = () => {
    const [count, setCount] = useState(0)
useEffect(() => {
    document.title = `chats${count}`
})
   

  return (
    <div>
        <h1>Use State Hook</h1>
        <h3>Counter:{count}</h3>
        <button onClick={()=> setCount(count+1)}>+</button>
        <button onClick={()=> setCount(count-1)}>-</button>
    </div>
  )
}
