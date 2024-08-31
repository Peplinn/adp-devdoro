import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './SIgn Up pages/SignIn';
import SignUp from './SIgn Up pages/SignUp';
import customCard from './custom-pomodoro-card/customCard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<SignIn />} /> {/* Default route to SignIn */}
      </Routes>
    </Router>
  );
};

export default App;
