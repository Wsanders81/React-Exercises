import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Chips from './Chips';
import Soda from './Soda';
import GirlScoutCookies from './GirlScoutCookies';
import VendingMachine from './VendingMachine';
import Navbar from './Navbar';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/" >
          <VendingMachine />
        </Route>
        <Route exact path="/soda" >
          <Soda />
        </Route>
        <Route exact path="/chips" >
          <Chips />
        </Route>
        <Route exact path="/girlscoutcookies" >
          <GirlScoutCookies />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
