import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Tracker from './pages/Home/HomePages/Tracker/Tracker';
import Calender from './pages/Home/HomePages/Calender';
import Reports from './pages/Home/HomePages/Reports';
import Projects from './pages/Home/HomePages/Projects';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from './store';

const App = observer(() => {
  const { authStore } = useStore();
  const { getUser, user } = authStore;

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            path='/login'
            element={user ? <Navigate to='/' /> : <Login />}
          />
          <Route
            path='/'
            element={user ? <Home user={user} /> : <Navigate to='/login' />}
          >
            <Route path='/' element={<Tracker user={user} />} />
            <Route path='/calender' element={<Calender />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/projects' element={<Projects />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
});

export default App;
