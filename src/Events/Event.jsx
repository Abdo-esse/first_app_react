import { click } from '@testing-library/user-event/dist/click'
import React,{Component} from 'react'

// function Event() {

//     function handleClick(){
//         alert("click")
//     }
//   return (
//     <div>
//       <button onClick={handleClick}>
//         click
//       </button>
//     </div>
//   )
// }

class Event extends Component {

    handleClick(){
        alert("click")
    }

    render(){
        return(
            <div>
      <button onClick={this.handleClick}>
        click
       </button>
    </div>
        )
    }
    

}
export default Event
