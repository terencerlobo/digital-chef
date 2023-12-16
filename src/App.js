import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Redirect,
  UNSAFE_enhanceManualRouteObjects,
} from "react-router-dom";
import Home from './chef-components/Home'
import Login from './chef-components/Login'
import TableReservation from './chef-components/TableReservation'

function App() {
  return (
  <Router>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route path='/reserve' element={<TableReservation/>} />
    </Routes>
  </Router>
  );
}

export default App;

