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
import Team from './pages/Home/HomePages/Team';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from './store';

const App = observer(() => {
  const [user, setUser] = useState(null);

  const { tasksStore } = useStore();
  const { setUserId } = tasksStore;

  useEffect(() => {
    const getUser = () => {
      fetch('http://localhost:5000/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error('Authentication failed!');
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  setUserId(user?.id);

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
            <Route path='/team' element={<Team />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
});

export default App;
