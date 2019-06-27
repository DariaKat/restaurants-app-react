import React from "react";
import "./normalize.css";
import Home from "./pages/Home";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./pages/Menu";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/menu" exact component={Menu} />
    </Router>
  );
}

export default App;
