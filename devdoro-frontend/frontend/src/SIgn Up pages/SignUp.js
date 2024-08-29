import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGoogle } from 'react-icons/fa';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      console.log('Email:', email);
      console.log('Password:', password);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div className="signup-container">
      <h1 id='header'>Create Account</h1>
      <button className="google-button">
        <FaGoogle className="google-icon" />
        Sign Up with Google
      </button>
      <div className="separator">
        <span>or</span>
      </div>
      <form onSubmit={handleSubmit} className="signup-form">
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='confirmPassword'>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? 
        <Link to="/signin"><span className='spa'>Sign In</span></Link> {/* Link to SignIn page */}
      </p>
    </div>
  );
};

export default SignUp;
