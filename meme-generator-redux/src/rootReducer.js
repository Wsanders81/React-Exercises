const INITIAL_STATE = {
    memes: []
}

export default function rootReducer(state=INITIAL_STATE, action){
    switch(action.type) {
        case "CREATE_MEME": 
            return {...state, memes: [...state.memes, {...action.payload}] }; 
        case "DELETE_MEME": 
            return {...state, memes: state.memes.filter(meme => meme.id !== action.payload) }
        default: 
            return state;
    }
}

