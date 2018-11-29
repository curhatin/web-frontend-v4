import {
    LOGIN_AUTH,
    LOG_OUT
} from '../actions/types'

const initialState = {
    isAuthenticated: false

}

export default function(state = initialState, action){
    switch(action.type){
        case LOGIN_AUTH : 
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload
            }
            case LOG_OUT : 
            return {
                ...state,
                isAuthenticated: false,
                token: null
            }

            default:
            return state
        }
    }











