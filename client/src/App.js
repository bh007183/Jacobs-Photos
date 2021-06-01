import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import './App.css';

function App() {
  return (

    <>
    <Router>
      <NavBar/>
      <Route exact path="/">
        <Home/>
      </Route>


    </Router>
    </>
  );
}

export default App;
