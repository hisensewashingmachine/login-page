import { Routes, Route, Navigate } from 'react-router-dom';
import SignInForm from './SignInForm';
import Dashboard from './Dashboard';

function App() {
  const isAuthenticated = !!localStorage.getItem('user');

  return (
    <Routes>
      <Route path="/" element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} />} />
      <Route path="/login" element={<SignInForm />} />
      <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
    </Routes>
  );
}

export default App;