const INITIAL_STATE = {
	todos : []
};

export default function rootReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				todos: [ ...state.todos, { ...action.payload } ]
			};
		case 'DELETE_TODO':
			return {
				...state,
				todos: state.todos.filter(t => t.id !== action.payload)
			};
		default:
			return state;
	}
}
