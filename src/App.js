import './App.css';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Landing from './components/Landing.js';
import RelativePitch from './components/RelativePitch';

function App() {
  return (
    <Router>
          <Switch>
            <Route exact path="/" component={RelativePitch}/>
          </Switch>
    </Router>
  );
}

export default App;
