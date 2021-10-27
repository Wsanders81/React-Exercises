import {
    GET_POST, 
    CREATE_POST, 
    EDIT_POST, 
    DELETE_POST, 
    CREATE_COMMENT,
    DELETE_COMMENT
} from '../Actions/types'
export default function postReducer(state={}, action){
    let blog = state[action.id]
    switch(action.type) {
        case GET_POST:
            console.log(action.post)
            return {...state, [action.post.id]: action.post}
        case CREATE_POST:
            
            return {...state, [action.id]: {...action.values, comments:[]} }
        case DELETE_POST: 
            const stateCopy = {...state}
            delete stateCopy[action.id]
            return stateCopy
        case EDIT_POST: 
        
            return {
                ...state, 
                [action.id]: {...action.values, comments: state[action.id].comments}
            }
        case CREATE_COMMENT: 
            
            return {
                ...state, 
                [action.id]: {...blog, comments: [...blog.comments, action.comment]}
            }
        case DELETE_COMMENT: 
            return {
                ...state, 
                [action.id]: {...blog, comments: blog.comments.filter(comment => comment.id !== action.commentId)}
            }
            
        default: 
            return state; 
    }
}