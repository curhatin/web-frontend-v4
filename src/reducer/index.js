import {
    combineReducers
} from "redux"

import authReducer from "./authReducer"
import postReducer from "./postReducer"
import commentsReducer from "./commentsReducer"


const rootReducers = combineReducers({
    auth : authReducer,
    post : postReducer,
    comment : commentsReducer 
})

export default rootReducers