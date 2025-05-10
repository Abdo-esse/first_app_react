import React from 'react'

function HelloWorld({lastname}) {
    // console.log(props);
    const age=18
    let isAdult= age>=18
    
  return (
    <div>
     <h1> hello {lastname} {isAdult?"adult":"mineur"} </h1>
    </div>
  )
}


// class HelloWorld extends React.Component{
//     const age=18
    
//     render(){
//      let isAdult=false
//      if(age>=18){
//         isAdult=true
//      }
//         return <h1>Hello {this.props.lastname}</h1>
//     }
// }

export default HelloWorld
