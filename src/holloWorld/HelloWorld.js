import React from 'react'

// function HelloWorld({lastname}) {
//     // console.log(props);
    
//   return (
//     <div>
//      <h1> hello {lastname}</h1>
//     </div>
//   )
// }


class HelloWorld extends React.Component{
    
    
    render(){
     
        return <h1>Hello {this.props.lastname}</h1>
    }
}

export default HelloWorld
