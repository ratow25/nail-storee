import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUsername }) => {
  const [usernameInput, setUsernameInput] = useState('');
  const navigate = useNavigate();  // For redirecting after login

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setUsername(usernameInput);
    navigate('/landing');
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
