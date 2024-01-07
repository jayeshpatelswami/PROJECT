import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Login from "./Components/Login-Signup/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Components/Login-Signup/Signup";
import About from "./Components/About/About";
import Setting from "./Components/Setting/Setting";
import Footer from "./Components/Footer";

import ErrorPage from "./Components/Error page/ErrorPage";

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
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/about">
          <Navbar />
          <About />
          <Footer />
        </Route>
        <Route exact path="/setting">
          <Navbar />
          <Setting />
          <Footer />
        </Route>
        <Route exact path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
