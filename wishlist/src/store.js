import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

export default () => {
    const store = createStore(rootReducer, applyMiddleware(thunk,logger));

    return store
}