import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Counter2 = () => {
  
  const [count,setCount] = useState(0);
  const [text,setText] = useState("");

  const Increase = () => {
    setCount(count+1);
    console.log("Count 값이 변경되었습니다.")
  }

  const textIncrease = (e) => {
  setText( e.target.value) 
  console.log("text 값이 변경되었습니다.")
  }

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.")
  },[])

  return (
    <div className="counter">
      <h>Counter 2</h>
      <hr></hr>
      <h3>{count}</h3>
      
      <button onClick={Increase}>+1</button>
      <hr></hr>

      <input onChange={textIncrease} type={'text'}></input>
      
      <h3>{text}</h3>
    </div>
  )
}

export default Counter2
