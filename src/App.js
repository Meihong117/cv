import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup'
import SuccessSignup from './pages/SuccessSignup';
import Describtion from './pages/Describtion';
import DiscoverNature from './pages/DiscoverNature';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={Signin} exact />
        <Route path='/signup' component={Signup} exact />
        <Route path='/success' component={SuccessSignup} exact />
        <Route path='/describtion' component={Describtion} exact />
        <Route path='/discover' component={DiscoverNature} exact />

      </Switch>
    </Router>
  );
}

export default App;