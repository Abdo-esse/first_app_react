import { createStore } from 'redux'
import { CounterReducer } from './Reducers/Counterreducer'

 const store = createStore(CounterReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
    console.log(store.getState());
    
})

export default store;