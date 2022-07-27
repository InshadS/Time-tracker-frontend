import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainContainer from './components/MainContainer/MainContainer';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' />
        </Routes>
      </Router>

      {/* <MainContainer /> */}
    </div>
  );
}

export default App;
