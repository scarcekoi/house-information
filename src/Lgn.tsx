import React, { useState, FormEvent } from 'react';
import './App.css';

const App: React.FC = () => {
  // State to manage login form inputs
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [role, setRole] = useState<string>('');  // Manage role (e.g., 'prefect', 'teacher', 'user')
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);  // To check if the user is logged in
  const [error, setError] = useState<string>('');  // To manage error messages

  // Sample valid credentials with roles
  const validUsers = {
    prefect: { username: 'prefectUser', password: 'prefect123' },
    teacher: { username: 'teacherUser', password: 'teacher123' },
    user: { username: 'studentUser', password: 'student123' },
  };

  // State to manage the house numbers
  const [houseNumbers, setHouseNumbers] = useState({
    house1: 0,
    house2: 0,
    house3: 0,
    house4: 0,
  });

  // Handle Login
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    // Check credentials and assign role
    if (username === validUsers.prefect.username && password === validUsers.prefect.password) {
      setIsLoggedIn(true);
      setRole('prefect');
      setError('');
    } else if (username === validUsers.teacher.username && password === validUsers.teacher.password) {
      setIsLoggedIn(true);
      setRole('teacher');
      setError('');
    } else if (username === validUsers.user.username && password === validUsers.user.password) {
      setIsLoggedIn(true);
      setRole('user');
      setError('');
    } else {
      setIsLoggedIn(false);
      setRole('');
      setError('Invalid username or password!');
    }
  };

  // Handle House Number Edit (only for prefects and teachers)
  const handleHouseNumberChange = (house: string, value: number) => {
    if (role === 'prefect' || role === 'teacher') {
      setHouseNumbers((prevState) => ({
        ...prevState,
        [house]: value,
      }));
    }
  };

  return (
    <div className="App">
      <h1 className="title">Welcome to the House Management Dashboard</h1>

      {!isLoggedIn ? (
        // Login form
        <div className="login-widget">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
            {error && <p className="error-message">{error}</p>}  {/* Show error message */}
          </form>
        </div>
      ) : (
        // Dashboard after successful login
        <div className="dashboard">
          <p>Welcome, {username}!</p>
          <p>You are logged in as a {role}.</p>
          <button className="login-btn" onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>

          {/* Display House Number Editing only for 'prefect' or 'teacher' */}
          {(role === 'prefect' || role === 'teacher') && (
            <div className="house-edit">
              <h2>Edit House Numbers</h2>
              <div>
                <label htmlFor="house1">House 1</label>
                <input
                  type="number"
                  id="house1"
                  value={houseNumbers.house1}
                  onChange={(e) => handleHouseNumberChange('house1', Number(e.target.value))}
                />
              </div>
              <div>
                <label htmlFor="house2">House 2</label>
                <input
                  type="number"
                  id="house2"
                  value={houseNumbers.house2}
                  onChange={(e) => handleHouseNumberChange('house2', Number(e.target.value))}
                />
              </div>
              <div>
                <label htmlFor="house3">House 3</label>
                <input
                  type="number"
                  id="house3"
                  value={houseNumbers.house3}
                  onChange={(e) => handleHouseNumberChange('house3', Number(e.target.value))}
                />
              </div>
              <div>
                <label htmlFor="house4">House 4</label>
                <input
                  type="number"
                  id="house4"
                  value={houseNumbers.house4}
                  onChange={(e) => handleHouseNumberChange('house4', Number(e.target.value))}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;