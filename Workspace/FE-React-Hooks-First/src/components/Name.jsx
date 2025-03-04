import React from 'react'
import { useState } from 'react'

const Name = () => {
  const [name,setName] = useState('');
  const [nickname,setNickname] = useState('') 

  const ChangeName = e => {
    setName(e.target.value);
  }

  const ChanegeNickname = e => {
    setNickname(e.target.value);
  }

  
  return (
    <div className="name">
      <h>Name</h>
      <hr></hr>
      <input value = {name} onChange = {ChangeName} name="myName" placeholder="이름을 입력해주세요" />
      <input value = {nickname} onChange = {ChanegeNickname} name="nickName" placeholder="닉네임을 입력해주세요" />
      <p>이름: {name}</p>
      <p>닉네임: {nickname} </p>
    </div>
  )
}

export default Name
