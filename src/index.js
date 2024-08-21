import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import './index.scss'

import App from './components/app'
import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer,
})

// console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
