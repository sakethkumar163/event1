import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login'; 
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import { Route, Routes } from 'react-router-dom';
function App() {
	return <>
  <Navbar/>
  <Router>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
  </Router>
	</>
}

export default App;