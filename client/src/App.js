import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Video from "./pages/Video"
import Photos from "./pages/Photos"
import About from "./pages/About"
import Contact from "./pages/Contact"
import AdminLogin from "./pages/AdminLogin"
import './App.css';

function App() {
  return (

    <>
    <Router>
      <NavBar/>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/photos">
        <Photos/>
      </Route>
      <Route exact path="/videos">
        <Video/>
      </Route>
      <Route exact path="/about">
        <About/>
      </Route>
      <Route exact path="/contact">
        <Contact/>
      </Route>
      <Route exact path="/AdminLogin/1996bacon">
        <AdminLogin/>
      </Route>


    </Router>
    </>
  );
}

export default App;
