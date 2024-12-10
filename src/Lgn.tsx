import React, { useState, FormEvent } from 'react';

interface LgnProps {
  onLogin: (username: string, role: string) => void;
  onError: (error: string) => void;
}

const Lgn: React.FC<LgnProps> = ({ onLogin, onError }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Sample valid credentials with roles
  const validUsers = {
    prefect: { username: 'prefectUser', password: 'prefect123' },
    teacher: { username: 'teacherUser', password: 'teacher123' },
    user: { username: 'studentUser', password: 'student123' },
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (username === validUsers.prefect.username && password === validUsers.prefect.password) {
      onLogin(username, 'prefect');
      onError('');
    } else if (username === validUsers.teacher.username && password === validUsers.teacher.password) {
      onLogin(username, 'teacher');
      onError('');
    } else if (username === validUsers.user.username && password === validUsers.user.password) {
      onLogin(username, 'user');
      onError('');
    } else {
      onError('Invalid username or password!');
    }
  };

  return (
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
      </form>
    </div>
  );
};

export default Lgn;