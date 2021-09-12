import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
function Landing(){
  return (
    <div>
      <h1>Landing</h1>
    </div>
  )
}
function RP(){
  return (
    <div>
      <h1>Relative Pitch</h1>
    </div>
  )
}
function IP(){
  return (
    <div>
      <h1>Interval Pitch</h1>
    </div>
  )
}
function CP(){
  return (
    <div>
      <h1>Chord Pitch</h1>
    </div>
  )
}
function App() {
  return (
    <Router>

        {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div> */}

          <Switch>
            <Route exact path="/">
              <Landing/>
            </Route>
            <Route path="/RP">
              <RP/>
            </Route>
            <Route path="/IP">
              <IP/>
            </Route>
            <Route path="/CP">
              <CP/>
            </Route>
          </Switch>
    </Router>
  );
}

export default App;
