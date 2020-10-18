import React from "react";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Merge</Link>
            </li>
            <li>
              <Link to="/contact">Bubble</Link>
            </li>
          </ul>
        </nav>

        {/* <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
      </main>
    </Router>)};
export default App;
