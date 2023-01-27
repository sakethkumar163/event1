import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login'; 
import Footer from './components/Footer'; 
import Events from './components/Events'; 
import Approvals from './components/Approvals'; 
import Schedule from './components/Schedule'; 
import Reports from './components/Reports'; 
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from 'react-router-dom';
function App() {
	return <>
  <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/events" element={<Events/>}/>
          <Route exact path="/approvals" element={<Approvals/>}/>
          <Route exact path="/schedule" element={<Schedule/>}/>
          <Route exact path="/reports" element={<Reports/>}/>
        </Routes>
    <Footer/>
	</>
}

export default App;