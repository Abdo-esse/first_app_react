import React, { Component, useState } from 'react'

function Fruit({fruits}) {
    const [fruit,setFruit]=useState('')
    const [fruitListe,setFruitListe]=useState(fruits)
    const dispalyFruits=()=> fruitListe.map((item,fruitKey)=>{return <li key={fruitKey}>{item}</li>})
    const handlFruit=()=>{
        const fruitValue= document.querySelector('#fruit').value
        setFruit(fruitValue)
    }
    const handleSubmit=(e)=>{
         e.preventDefault();
         setFruitListe([...fruitListe,fruit])
         
    }
  return (
    <>
    <span>
        <form>
            <input type="text" onChange={handlFruit}  id="fruit" />
            <input type="submit" onClick={handleSubmit} value="Add fruit" id="submit" />
        </form>
    </span>
    <h1>Fruits :</h1>
      <ul>
        {dispalyFruits()}
      </ul>
    </>
  )
}

// class Fruit extends Component{

//     render(){
//         const dispalyFruits=()=>this.props.fruits.map(item=>{return <li>{item}</li>})
//         return(
//     <>
//     <h1>Fruits</h1>
//       <ul>
//         {dispalyFruits()}
//       </ul>
//     </>
//   )

//     }
// }

export default Fruit
