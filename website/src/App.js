import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup'
import SignUpSucced from './components/SignUpSucceed/SignUpSucced';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={Signin} exact />
        <Route path='/signup' component={Signup} exact />
        <Route path='/success' component={SignUpSucced} exact />
      </Switch>
    </Router>
  );
}

export default App;
