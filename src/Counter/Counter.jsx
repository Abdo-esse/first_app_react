import React  ,{ Component, useState } from 'react'

function Counter({initialValue, stp}) {
    const [count,setCount]=useState(initialValue)
  return (
    <div>
        <button onClick={()=>{setCount(pre=>{return pre+stp })}}>Click to incremant!</button>
        <button onClick={()=>{setCount(0)}}>Reset !!</button>
      <samp>il y a {count} secondes</samp>
    </div>
  )
}

// class Counter extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             counter:0,
//         }
//     }
//     componentDidMount(){
//         setInterval(()=>{this.setState(
//             prevState=>{
//                 return {counter: prevState.counter+1}
//             }
//         )},1000)
        
//     }
//     render(){
//         return(
//             <>
//              <p>il y a {this.state.counter} secondes</p>
//             </>
//         )
//     }
// }






export default Counter
