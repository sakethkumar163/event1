import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login'; 
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import { Route, Routes } from 'react-router-dom';
function App() {
	return <>
  <Navbar/>
 <Router>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/login" element={<Login/>}/>
        </Routes>
    </Router>
	</>
}

export default App;