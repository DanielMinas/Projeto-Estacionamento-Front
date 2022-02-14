import './App.css';
import Home from "./components/estacionamento-list"
import Login from "./components/Login"
import AddEstacionamento from "./components/add-estacionamento"
import { AuthProvider} from "./components/estacionamento"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/edit-estacionamento/:id" component={AddEstacionamento}></Route>
      <Route path="/add-estacionamento" component={AddEstacionamento}></Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
    
}

export default App;
