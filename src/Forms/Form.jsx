import React, { use, useState } from 'react'

export default function Form() {
    const [name,setName]=useState();
    const [age,setAge]=useState();
    const handleChangeName=()=>{
        const valueName= document.querySelector('#name').value
        setName(valueName)
    }
    const handleChangeAge=()=>{
        const valueAge= document.querySelector('#age').value
        setAge(valueAge)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name,age);
        

    }
  return (
    <div>
      <input type="text" onChange={handleChangeName} id="name" />
      <input type="number" onChange={handleChangeAge} id="age" />
      <input type="submit" onClick={handleSubmit} id="submit" />
    </div>
  )
}

