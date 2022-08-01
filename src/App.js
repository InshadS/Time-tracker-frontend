import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Tracker from './pages/Home/HomePages/Tracker/Tracker';
import Calender from './pages/Home/HomePages/Calender';
import Reports from './pages/Home/HomePages/Reports';
import Projects from './pages/Home/HomePages/Projects';
import Team from './pages/Home/HomePages/Team';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />}>
            <Route path='/tracker' element={<Tracker />} />
            <Route path='/calender' element={<Calender />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/team' element={<Team />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
