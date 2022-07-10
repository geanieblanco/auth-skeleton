import './App.css';
import { useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/dashboard')
    }
  }, [])

  return (
    <main className="wrapper">
      <Link to={'/'}>
        <h1>Home</h1>
      </Link>
      <nav>
        <Link to="/auth">Sign In</Link>
        <Link to="/auth/new">Sign Up</Link>
      </nav>
      <Outlet/>
    </main>
  );
}

export default App;
