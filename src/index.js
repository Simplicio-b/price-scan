import React from 'react'

// import { StatusBar } from 'react-native'
// Redux
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
// import ReduxThunk from 'redux-thunk'
// import reducers from './store'

import Routes from './routes'

export default function App() {
  return (
    // <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
    //   <StatusBar style="light" backgroundColor="#313131"  />
      <Routes />
    // </Provider>
  )
}