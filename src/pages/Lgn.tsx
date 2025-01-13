import React, { useState, FormEvent } from 'react';
import {
  Container,
  CssBaseline,
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';

import './App.css';

// Editable username and password lists
const users = [
  { username: 'a.alexander', password: 'alexander123' },

  { username: 'p.link', password: 'link123' },
  { username: 'm.smith', password: 'welcome' },
];

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (username === '' || password === '') {
      setError('Please enter both username and password');
      return;
    }

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setError('');
      window.location.href = '/';
      setError('');
      setUsername('');
      setPassword('');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin} noValidate>
          <TextField
            label="Username"
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
          {error && (
            <Typography
              variant="body2"
              color="error"
              sx={{ marginTop: 2, textAlign: 'center' }}
            >
              {error}
            </Typography>
          )}
        </form>
      </Box>
    </Container>
  );
};

export default Login;