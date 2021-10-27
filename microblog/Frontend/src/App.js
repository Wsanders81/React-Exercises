import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes';
import Header from './Components/Header';
function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Routes/>
      </BrowserRouter>
  );
}

export default App;
