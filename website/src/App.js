import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup'
import SignUpSucced from './components/SignUpSucceed/SignUpSucced';
import NatureDescribe from './components/Describtion/NatureDescribe';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={Signin} exact />
        <Route path='/signup' component={Signup} exact />
        <Route path='/success' component={SignUpSucced} exact />
        <Route path='/describtion' component={NatureDescribe} exact />

      </Switch>
    </Router>
  );
}

export default App;
