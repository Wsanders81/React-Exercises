import {
    GET_TITLES, 
    CREATE_POST,
    DELETE_POST,
    EDIT_POST
} from '../Actions/types'

function makeTitleFromPost(values, id) {
    const {title, description, votes} = values
    return {id, title, description, votes};
  }

export default function titlesReducer(state=[], action) {
    switch(action.type){
        case GET_TITLES: 
        return [...action.titles]
        case CREATE_POST: 
        const {title, description, votes} = action.values
        const id = action.id
            return [...state, {id, title, description, votes}]
        case DELETE_POST:
            return state.filter(title => title.id !== action.id)
        case EDIT_POST: 
            const postId = action.id
            const values = action.values
            return state.map(title => title.id === postId ? makeTitleFromPost(values, postId) : title)
        
        default: 
            return state; 
    }
}