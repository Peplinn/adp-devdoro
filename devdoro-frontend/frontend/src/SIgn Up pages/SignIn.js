import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGoogle } from 'react-icons/fa';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="signin-container">
      <h1 id="header">Sign In</h1>
      <button className="google-button">
        <FaGoogle className="google-icon" /> 
         Sign in with Google
      </button>
      <div className="separator">
        <span>or</span>
      </div>
      <form onSubmit={handleSubmit} className="signin-form">
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
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Sign in with Email</button>
      </form>
      <Link to="/signup"><span className='fp'><p>Forget Password?</p></span></Link> {/* for now the forget password will be linked to the SignUp page */}
      <p>Don't have an account? 
        <Link to="/signup"><span className='spa'>Create Account</span></Link> {/* Link to SignUp page */}
      </p>
    </div>
  );
};

export default SignIn;
