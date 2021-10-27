
import {combineReducers} from 'redux'
import postReducer from './postReducer'
import titlesReducer from './titlesReducer'
const rootReducer = combineReducers({
    postReducer, 
    titlesReducer
})

export default rootReducer; 