const INITIAL_STATE = { face: "ಠ_ಠ"}
const faceReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case 'IN_LOVE': 
        return {...state, face: "(♥ω♥*)"}
        case 'HAPPY_CRY': 
        return {...state, face: "(ಥ◡ಥ)"}
        case 'PENSIVE': 
        return {...state, face: "눈_눈"}
        case 'DRUNK' : 
        return {...state, face: "ʕ✖﹏✖ʔ"}
        default: 
        return state
    }
}

const store = Redux.createStore(faceReducer)