// import React from 'react'
// import { useNavigate } from 'react-router-dom'


// const Dashboard = () => {
//    const navigate=useNavigate();
//    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'))

//    const handleLogout =()=>{
//     localStorage.removeItem('registeredUser')
//     alert('you have been logged out')
//     navigate('/login')
//    }


//   return (
//     <div className='max-w-lg mx-auto mt-10 p-6 border rounded-xl shadow-md bg-gradient-to-r from-green-50 to-green-100'>
//       <h1 className='text-3xl font-extrabold mb-6 text-center text-green-600'>welcome , {registeredUser ? registeredUser.email : 'User'}!</h1>
//       <p>This is your dashboard</p>
//       <div className="flex justify-center">
//         <button onClick={handleLogout} className="bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition duration-300 ease-in-out shadow-lg hover:shadow-xl">Logout</button>
//       </div>
//     </div>
//   )
// }

// export default Dashboard


// src/components/Dashboard.jsx

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
  
//   if (!registeredUser) {
//     alert("You need to log in first.");
//     navigate('/login');
//     return null; // Prevent further rendering
//   }

//   const handleLogout = () => {
    
//     navigate('/login');
//   };

//   //writing bday logic

//   const today=new Date()
//   const birthday=new Date(registeredUser.dob)


//   birthday.setFullYear(today.getFullYear())

//   const days=today-birthday

//   const days_left=Math.floor(days/(1000*60*60*24))


//   const birthdayQuotes = [
//     "Wishing you a day filled with love and cheer!",
//     "Happy Birthday! May your day be as special as you are!",
//     "Here’s to another year of great adventures!",
//     "Cheers to you on your birthday!",
//     "May your birthday be the start of a year filled with good luck, good health, and much happiness!"
//   ];
  
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
//       <div className="bg-white shadow-lg rounded-lg p-10 max-w-md w-full">
//         <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
//           Welcome, {registeredUser.name}!
//         </h2>
//         <p className="text-md mb-6 text-center text-gray-600">
//           This is your dashboard. Explore your options below.
//         </p>
     
//      <div className='text-center mb-4'>
//         {
//             days_left === 0 ? (
//                 <h3 className='text-lg font-semibold text-green-600'> Happy Birthday ! {birthdayQuotes[Math.floor(Math.random()*birthdayQuotes.length)]}</h3>
//             ) : days_left > 0 ?(
//                 <h3 className='text-lg font-semibold text-green-600'>Your birthday is in {days_left} days</h3>
//             ) : (
//                 <h3 className='text-lg font-semibold text-green-600'>your birthday was {Math.abs(days_left)} days ago</h3>
//             )
//         }
//      </div>


//         <div className="flex justify-center">
//           <button 
//             onClick={handleLogout}
//             className="bg-blue-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg hover:shadow-xl">
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  
  if (!loggedInUser) {
    alert("You need to log in first.");
    navigate('/login');
    return null; // Prevent further rendering
  }

  const handleLogout = () => {
    // Clear logged-in user from localStorage
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
