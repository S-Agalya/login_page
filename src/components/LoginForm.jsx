// src/components/LoginForm.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';


// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate()
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Get registered user from localStorage
//     const registeredUser = JSON.parse(localStorage.getItem('registeredUser')) || [];
//     const user = registeredUser.find(user => user.email === email && user.password === password);
//     // Check if the entered credentials match the registered user
//     if (user) {
//       alert('Logged in successfully!');
//       navigate('/dashboard');
//     } else {
//       alert('Invalid credentials. Please try again.');
//     }

//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-md bg-gradient-to-r from-gray-50 to-gray-100 sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
//       <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-600">Login to Your Account</h2>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Email Input */}
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Email:</label>
//           <input 
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
//             placeholder="Enter your email"
//             required
//           />
//         </div>

//         {/* Password Input */}
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Password:</label>
//           <input 
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
//             placeholder="Enter your password"
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <div>
//           <button 
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg hover:shadow-xl sm:py-4 lg:py-5"
//           >
//             Login
//           </button>
//         </div>
//       </form>

//       <div className="text-center mt-4">
//         <p className="text-sm text-gray-600">Don't have an account? 
//           <button className="text-blue-600 hover:underline" onClick={() => navigate('/register')}> Register</button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve the array of registered users from localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    // Find the user that matches the email and password
    const user = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert('Logged in successfully!');
      // Store the logged-in user to be used in the dashboard
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      navigate('/dashboard');
    } else {
      alert('Invalid credentials. Please try again.');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-md bg-gradient-to-r from-gray-50 to-gray-100 sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-600">Login to Your Account</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email:</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Password:</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
            placeholder="Enter your password"
            required
          />
        </div>

        <div>
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg hover:shadow-xl sm:py-4 lg:py-5"
          >
            Login
          </button>
        </div>
      </form>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">Don't have an account? 
          <button className="text-blue-600 hover:underline" onClick={() => navigate('/register')}> Register</button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
