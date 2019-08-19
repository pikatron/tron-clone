import {combineReducers} from 'redux'
import {users} from './userReducer'
import {authentication} from './authenticationReducer'
import {registration} from './registration'

const rootReducer = combineReducers({
    authentication,
    registration,
    users
})

export default rootReducer
