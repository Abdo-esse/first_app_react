import React, { Children, Component } from 'react'

// function TextField(props) {
//   return (
//     <>
//       <label>{props.label}</label>
//       <input name={props.lastname} type='text'/>
//       <div>{props.children}</div>
//     </>
//   )
// }


class TextField extends Component{
   
    render(){
        console.log(this);
        
        return(
            <>
               <label>{this.props.label}</label>
               <input name={this.props.lastname} type='text'/>
               <div>{this.props.children} </div>
        </>
        )
        
    }
}



export default TextField
