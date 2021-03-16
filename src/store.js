import { createStore } from 'redux'
import reducer from './reducers'
const initState = {}
const store = createStore(reducer, initState)

export default store