import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Calender from './pages/Calender';
import Projects from './pages/Projects';
import Reports from './pages/Reports';
import Team from './pages/Team';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/calender' element={<Calender />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/team' element={<Team />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
