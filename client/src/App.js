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
import AdminHome from "./pages/AdminHome"
import Error from "./pages/Unauthorized"
import MediaUpload from "./pages/AdminPhotoManage"
import './App.css';
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
const store = configureStore()

function App() {
  return (

    <>
     <Provider store={store}>
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
      <Route exact path="/AdminLogin">
        <AdminLogin/>
      </Route>
      <Route exact path="/adminAccess">
        <AdminHome/>
      </Route>
      <Route exact path="/error">
        <Error/>
      </Route>
      <Route exact path="/UploadMedia">
        <MediaUpload/>
      </Route>


    </Router>
    </Provider>
    </>
  );
}

export default App;
