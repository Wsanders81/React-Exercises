import './App.css';

import {useSelector, useDispatch} from 'react-redux'
import TodoForm from './TodoForm';
import Todo from './Todo'
function App() {
  const todos = useSelector(store => store.todos)
  const dispatch = useDispatch()
  
  const addTodo = (data) => {
    dispatch({type: "ADD_TODO", payload: data})
  }
  const deleteTodo = (id) => {
    dispatch({type: "DELETE_TODO", payload: id})
  }
  return (
    <div className="App">
      <h1>GIT ER DONE!</h1>
      <TodoForm addTodo={addTodo}/>
      {todos.map(t => <Todo text={t} remove={deleteTodo}/>)}
    </div>
  );
}

export default App;
