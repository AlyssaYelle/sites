import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './reset.css';
import './App.css';

import Home from './components/Home';
import Research from './components/Research';
import Publications from './components/Publications';
import Software from './components/Software';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>Wesley Tansey</h1>
          <nav>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/research">Research</Link>
            <Link className="nav-link" to="/publications">Publications</Link>
            <Link className="nav-link" to="/software">Software</Link>
          </nav>
        </header>

        <Route exact path="/" component={Home} />
        <Route path="/research" component={Research} />
        <Route path="/publications" component={Publications} />
        <Route path="/software" component={Software} />

      </Router>
    </div>
  );
}

export default App;
