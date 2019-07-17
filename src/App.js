import React from "react";
import "./normalize.css";
import Home from "./pages/Home";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Book from "./pages/BookYourtable";
import Reservation from "./pages/reservation";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/menu" exact component={Menu} />
      <Route path="/book" exact component={Book} />
      <Route path="/home" exact component={Menu} />
      <Route path="/reservation" exact component={Reservation} />
    </Router>
  );
}

export default App;
