import React from "react";
import "./App.css";
import Home from "./pages/HomePage/Home";
import Blog from './pages/BlogPage/Blog';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
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
