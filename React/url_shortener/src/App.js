import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MainPage, RedirectPage } from './pages';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/:shorten" component={RedirectPage} />
      </Router>
    </div>
  );
}

export default App;
