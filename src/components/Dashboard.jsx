import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  if (!loggedInUser) {
    alert("You need to log in first.");
    navigate('/login');
    return null; 
  }

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  // Writing birthday logic
  const today = new Date();
  const birthday = new Date(loggedInUser.dob);
  birthday.setFullYear(today.getFullYear());

  const days = today - birthday;
  const days_left = Math.floor(days / (1000 * 60 * 60 * 24));

  const birthdayQuotes = [
    "Wishing you a day filled with love and cheer!",
    "Happy Birthday! May your day be as special as you are!",
    "Here’s to another year of great adventures!",
    "Cheers to you on your birthday!",
    "May your birthday be the start of a year filled with good luck, good health, and much happiness!"
  ];
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
          Welcome, {loggedInUser.name}!
        </h2>
        <p className="text-md mb-6 text-center text-gray-600">
          This is your dashboard. Explore your options below.
        </p>
     
        <div className='text-center mb-4'>
          {
            days_left === 0 ? (
              <h3 className='text-lg font-semibold text-green-600'> Happy Birthday! {birthdayQuotes[Math.floor(Math.random() * birthdayQuotes.length)]}</h3>
            ) : days_left > 0 ? (
              <h3 className='text-lg font-semibold text-green-600'>Your birthday is in {days_left} days</h3>
            ) : (
              <h3 className='text-lg font-semibold text-green-600'>Your birthday was {Math.abs(days_left)} days ago</h3>
            )
          }
        </div>

        <div className="flex justify-center">
          <button 
            onClick={handleLogout}
            className="bg-blue-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg hover:shadow-xl">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


