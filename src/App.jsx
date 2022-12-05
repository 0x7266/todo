import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <div className="App bg-neutral-800 min-h-screen h-screen flex flex-col items-center">
        <div className="h-full w-full text-center flex justify-center">
          <Routes>
            <Route
              path="/"
              element={user ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            {/* <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <Navigate to="/login"/>}
            /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
