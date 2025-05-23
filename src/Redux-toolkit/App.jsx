import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Store/Store'
import User from './User'
import UserForme from './UserForme'

function App() {
  return (
    <Provider store={store}>
       <UserForme/>
       <User/>


    </Provider>
  )
}

export default App
