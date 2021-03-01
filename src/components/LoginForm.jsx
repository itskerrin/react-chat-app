import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      'Project-ID': 'ad6ec516-db79-4be4-8ce0-84a58ecfe6ba',
      'User-Name': username,
      'User-Secret': password,
    };

    try {
      await axios.get('https://api.chatengine.io/chats', {
        headers: authObject,
      }); // logged in

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
    } catch (error) {
      setError('Incorrect login details.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Login to chat</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Enter</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
