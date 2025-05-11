import React  ,{  useEffect, useState } from 'react'

function Counter({initialValue, stp}) {
    const [count,setCount]=useState(initialValue)
    useEffect(() => {
  console.log("Effet exécuté");

  return () => {
    console.log("Nettoyage exécuté");
  };
}, []);
    useEffect(()=>{
      console.log("Counte in changed !");
      
    },[count])
  return (
    <div>
        <button onClick={()=>{setCount(pre=>{return pre+stp })}}>Click to incremant!</button>
        <button onClick={()=>{setCount(0)}}>Reset !!</button>
      <samp>il y a {count} secondes</samp>
    </div>
  )
}

/*class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:0,
        }
        console.log('hi from constructot');
        
    }
    componentDidMount(){
        console.log("component mounted");
        
    }

    handelClick=()=>{
        this.setState(
            prevState=>{
                return {counter: prevState.counter+1}
            }
        )
    }
    componentDidUpdate(prevRops,prevState){
        console.log("component updated");
        console.log(prevState,this.state);

    }
    handleReset=()=>{
        this.setState({counter:0})
    }
    render(){
        console.log('hi from render');

        return(
            <div>
      <button onClick={this.handelClick}>Click to incremant!</button>
         <button onClick={this.handleReset}>Reset !!</button>
       <samp>il y a {this.state.counter} secondes</samp>
     </div>
        )
    }
}*/






export default Counter
