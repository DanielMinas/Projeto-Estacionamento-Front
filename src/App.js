import './App.css';
import ListEstacionamento from "./components/estacionamento-list"
import AddEstacionamento from "./components/add-estacionamento.js"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
      <Route path="/add-estacionamento" component={AddEstacionamento}></Route>
      <Route path="/edit-estacionamento/:id" component={AddEstacionamento}></Route>
        <Route path ="/" component={ListEstacionamento}></Route>
        <Route path="/estacionamento" component={ListEstacionamento}></Route>
        
    </Switch>
    </Router>
    
    
  );
}

export default App;
