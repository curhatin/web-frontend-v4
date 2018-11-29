import {
    FECTH_DATA_COMMENT_BY_ID
} from '../actions/types'

const initialState = {
    comments_by_post_id : [] 
}
 
export default function(state = initialState, action){
    switch(action.type){
       
            case FECTH_DATA_COMMENT_BY_ID : 
            console.log(action.payload)
            return {
                ...state,
                comments_by_post_id: action.payload
            }
         
            default:
            return state
    }
}

