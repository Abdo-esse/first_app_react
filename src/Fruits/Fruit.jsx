import React, { Component } from 'react'

// function Fruit({fruits}) {
//     const dispalyFruits=()=> fruits.map(item=>{return <li>{item}</li>})
//   return (
//     <>
//     <h1>Fruits</h1>
//       <ul>
//         {dispalyFruits()}
//       </ul>
//     </>
//   )
// }

class Fruit extends Component{

    render(){
        const dispalyFruits=()=>this.props.fruits.map(item=>{return <li>{item}</li>})
        return(
    <>
    <h1>Fruits</h1>
      <ul>
        {dispalyFruits()}
      </ul>
    </>
  )

    }
}

export default Fruit
