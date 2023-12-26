import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar";
import "./App.css";
import Login from "./Components/Login-Signup/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <div className="App">
        <Navbar />
      <Home />
        <Login />
      </div> */}
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
