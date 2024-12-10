import React, { useState } from 'react';
import './App.css';
import Lgn from './Lgn'; // Import the Login component

const App: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [role, setRole] = useState<string>('');  // Store the role of the logged-in user
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);  // To track login status
  const [error, setError] = useState<string>('');  // Error message for invalid login attempts

  // Handle successful login
  const handleLogin = (username: string, role: string) => {
    setUsername(username);
    setRole(role);
    setIsLoggedIn(true);
    setError('');
  };

  // Handle error
  const handleError = (error: string) => {
    setError(error);
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setRole('');
  };

  return (
    <div className="App">
      <h1 className="title">Welcome to the House Management Dashboard</h1>

      {!isLoggedIn ? (
        // Show the login component if the user is not logged in
        <Lgn onLogin={handleLogin} onError={handleError} />
      ) : (
        // Show the dashboard once logged in
        <div className="dashboard">
          <p>Welcome, {username}!</p>
          <p>You are logged in as a {role}.</p>
          <button className="login-btn" onClick={handleLogout}>
            Logout
          </button>

          {/* Display house number editing for 'prefect' or 'teacher' */}
          {(role === 'prefect' || role === 'teacher') && (
            <div className="house-edit">
              <h2>Edit House Numbers</h2>
              {/* House number inputs (similar to your previous code) */}
            </div>
          )}
        </div>
      )}

      {/* Display error message if login fails */}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default App;