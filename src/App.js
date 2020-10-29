import React from "react";
import "./App.css";
import Home from "./pages/HomePage/Home";
import Blog from './pages/BlogPage/Blog';
import About from './pages/AboutPage/About';
import Contact from './pages/ContactPage/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
<About />
        </Route>
        <Route path="/post">
      <Blog />
      </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
