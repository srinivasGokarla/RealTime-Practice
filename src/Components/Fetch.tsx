import React, { useState, useEffect } from 'react';

interface TodoData {
    id : number
    title : string
    price : number
    description : string
}

const Fetch = () => {
  const[data, setData] = useState <TodoData[]> ([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((e) => setData(e as TodoData[] ))
  }, [])
  return (
    <div>
      <h1>Fetch Practicing</h1>
   {
    data?.map((item) => <div key={item.id}>
        <h3>Id : {item.id}</h3>
        <h4> Title : {item.title}</h4>
        <h5> Description : {item.description}</h5>
        <h6> Price : {item.price}</h6>
        <hr/>
        </div>)
   }
    </div>
  )
}

export default Fetch
