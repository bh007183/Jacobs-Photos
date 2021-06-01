import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from "./components/NavBar"
import './App.css';

function App() {
  return (

    <>
    <Router>
      <NavBar/>


    </Router>
    </>
  );
}

export default App;
