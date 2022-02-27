import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Home} from "./Components/Home";
import {Department} from "./Components/Department";
import {Employee} from "./Components/Employee";
import {Navigation} from "./Components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h3 className = "m-3 d-flex justify-content-center"> Developed By Tony Group </h3>
        <Navigation/>
        <Switch>
          <Route path="/" component ={Home} exact />
          <Route path="/department" component ={Department} />
          <Route path="/employee" component ={Employee} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
