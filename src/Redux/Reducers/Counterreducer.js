export const CounterReducer=(state={value:0},action)=>{

    // eslint-disable-next-line default-case
    switch(action.type){
        case 'counter/increment':return{value:state.value+1}
        case 'counter/decrement':return{value:state.value-1}
    }

}