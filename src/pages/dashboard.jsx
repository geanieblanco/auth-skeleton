import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
        navigate('/dashboard')
    }

    if (!authToken) {
        navigate('/auth')
    }
  }, [])

  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    navigate('/auth/new')
  }

  return (
      <div>
          Logged In User
          <button onClick={handleLogout}>Log out</button>
      </div>
  )
  }