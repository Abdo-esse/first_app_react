import React  ,{ Component } from 'react'

// function Counter() {
//   return (
//     <div>
      
//     </div>
//   )
// }

class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:0,
        }
    }
    componentDidMount(){
        setInterval(()=>{this.setState(
            prevState=>{
                return {counter: prevState.counter+1}
            }
        )},1000)
        
    }
    render(){
        return(
            <>
             <p>il y a {this.state.counter} secondes</p>
            </>
        )
    }
}






export default Counter
