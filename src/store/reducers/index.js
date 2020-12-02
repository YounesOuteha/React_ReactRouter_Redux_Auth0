import Reducer1 from './reducer1'
import UserReducer from './user_reducer'
import { combineReducers }  from 'redux'

const rootReducer = combineReducers({
    Reducer1: Reducer1,
    UserReducer: UserReducer
})

export default rootReducer;