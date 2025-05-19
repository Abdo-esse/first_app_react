import { createStore } from 'redux'
import { CounterReducer } from './Reducers/Counterreducer'

const store = createStore(CounterReducer)

store.subscribe(() => {
    alert('state changed')
})

store.dispatch({ type: 'counter/increment' })
console.log(3);
