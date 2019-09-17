import React from 'react';
import "./styles/styles.css"
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
// import ProtectedRoute from "./auth/ProtectedRoute";
// import { AuthConsumer } from "./auth/Guard"


function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route path="/about" render={() => <About />} />
        <Route path="/" render={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
