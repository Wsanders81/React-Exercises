import './App.css';
import MemeForm from './MemeForm';
import {useSelector, useDispatch } from 'react-redux'
import MemeList from './MemeList';


function App() {
  const dispatch = useDispatch()
  const memes = useSelector(store => store.memes)
  const addMeme = (data) => {
      dispatch({type: "CREATE_MEME", payload: data})
  }
  const deleteMeme = (id) => {
    dispatch({type: "DELETE_MEME", payload: id})
    
  } 
  return (

    

    <div className="App">
      <h1>MEME GENERATOR</h1>
      <MemeForm addMeme={addMeme}/>
      <MemeList memes={memes} remove={deleteMeme}/>
    </div>
  );
}

export default App;
