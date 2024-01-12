import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../Components/styles.css"
const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSignup = () => {


    // Check if email, password
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      setError('Password and confirm password do not match.');
      return;
    }

    // Save  to local 
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    
    alert('Signup successful! Redirectng to login page.');
navigate("/login")
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
          onClick={handleSignup}
        >
          Sign up
        </button>
        <p className="mt-2 text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;