import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup'
import SuccessSignup from './pages/SuccessSignup';
import Education from './pages/Education'
import WorkDetail from './pages/WorkDetail';
import ProjectDetails from './pages/ProjectsDetail'
import SkillDetails from './pages/SkillDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        {/* <Route path='/signin' component={Signin} exact /> */}
        {/* <Route path='/signup' component={Signup} exact /> */}
        {/* <Route path='/success' component={SuccessSignup} exact /> */}
        <Route path='/education' component={Education} exact />
        <Route path='/projects' component={ProjectDetails} exact />
        <Route path='/skill' component={SkillDetails} exact />

        <Route path='/work' component={WorkDetail} exact />

      </Switch>
    </Router>
  );
}

export default App;
