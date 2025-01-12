import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Footer from '../Footer';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  const [error, setError] = useState<string>('');

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (username === 'a.alexander' && password === 'password') {
      window.location.href = `/`;
      setError('');
      setUsername('');
      setPassword('');
    } else if (username === '' || password === '') {
      setError('Please enter both username and password');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="App">
      <Link to="/" className="login-btn">Back to Home</Link>
      <h1 className="title">Teacher/Prefect Login</h1>
      <div className="widget-container">
        <div className="login-form">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-btn">Login</button> {/* Updated button class */}
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;