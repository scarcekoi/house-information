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
    user: { username: 'studentUser', password: 'student123' }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validate login credentials
    for (const role in validUsers) {
      if (
        validUsers[role].username === username &&
        validUsers[role].password === password
      ) {
        onLogin(username, role);
        return;
      }
    }

    // If login fails, show error
    onError('Invalid username or password.');
  };

  return (
    <div className="login-container">
      <h2 className="title">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Lgn;