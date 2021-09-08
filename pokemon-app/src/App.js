import './App.css';
import defaultDeck from "./DefaultDeck"
import Pokedex from './Pokedex';
function App() {
  return (
    <div className="App">
      <Pokedex pokemon={defaultDeck}/>
    </div>
  );
}

export default App;
