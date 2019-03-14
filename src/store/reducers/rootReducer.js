import { combineReducers } from 'redux';
import userReducer from './userReducer';
import moduleReducer from './moduleReducer';
import questionReducer from './questionReducer';

const rootReducer = combineReducers({
    user: userReducer,    
    module: moduleReducer,
    question: questionReducer
})

export default rootReducer;