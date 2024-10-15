// import React from 'react'
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


// const RegisterForm = () => {
//   return (
//     <div className='max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg bg-white'>
//       <form className='space-y-4'>
//         <div >
//             <label className='block text-sm font-medium'>Username:</label>
//             <input type='text' value='name' placeholder='Enter your Name' required/>
//         </div>

//         {/* Email */}
//         <div>
//             <label className='block text-sm font-medium'>Email:</label>
//             <input type='email' value='email' placeholder='Enter your Email' required/>
//         </div>
        
//         {/* Password */}
//         <div>
//             <label className='block text-sm font-medium'>Password:</label>
//             <input type='password' value='password' placeholder='Enter your Password' required/>
//         </div>

//         {/* Dob */}
//         <div>
//             <label className='block text-sm font-medium'>Dob:</label>
//            <DatePicker dateFormat="dd-mm-yyyy" placeholderText='Select your birth date' required/>
//           <span> <FontAwesomeIcon icon={faCalendarAlt}/></span>
//         </div>

//         {/* button */}

//         <div>
//             <button type='submit' className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Register</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default RegisterForm


// src/components/RegisterForm.jsx


// src/components/RegisterForm.jsx


// src/components/RegisterForm.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirecting
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";

// const RegisterForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [dob, setDob] = useState(null); // Initial state is 'null'

//   const navigate = useNavigate(); // Use this to navigate to login page

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Store the user data in localStorage for validation during login
   

//     const existingUser =JSON.parse(localStorage.getItem('registeredUser')) || []

// //    const userExists=existingUser.find(user => user.email === email)
// const userExists = existingUser.find(user => user.email === email);

//    if(userExists){
//     alert('User already exists with this email. Please use a different email.');
//       return;
//    }
    
// const newUser={name,email,password,dob}
// existingUser.push(newUser)
// localStorage.setItem('registeredUser', JSON.stringify(existingUser ));
//     console.log("Registered User:", newUser);

//     setName('');
//     setEmail('');
//     setPassword('');
//     setDob(null);

//     alert('Registration successful! Redirecting to login...');
//     navigate('/login'); // Redirect to login page
//   };
 
//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-md bg-gradient-to-r from-blue-50 to-blue-100 sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
//       <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-600">Create Your Account</h2>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Username Input */}
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Username:</label>
//           <input 
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
//             placeholder="Enter your username"
//             required
//           />
//         </div>

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

//         {/* Date of Birth Input (with Date Picker) */}
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Birth:</label>
//           <DatePicker 
//             selected={dob} 
//             onChange={(date) => setDob(date)} 
//             dateFormat="dd-MM-yyyy"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
//             placeholderText="Select your birth date"
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <div>
//           <button 
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg hover:shadow-xl sm:py-4 lg:py-5"
//           >
//             Register
//           </button>
//         </div>
//       </form>

//       <div className="text-center mt-4">
//         <p className="text-sm text-gray-600">Already have an account? 
//           <button className="text-blue-600 hover:underline" onClick={() => navigate('/login')}> Login</button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirecting
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState(null); // Initial state is 'null'

  const navigate = useNavigate(); // Use this to navigate to login page

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing users from localStorage or initialize an empty array
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    // Check if a user with the given email already exists
    const userExists = existingUsers.find(user => user.email === email);

    if (userExists) {
      alert('User already exists with this email. Please use a different email.');
      return;
    }

    // Create a new user object
    const newUser = { name, email, password, dob };
    
    // Add the new user to the existing users array
    existingUsers.push(newUser);

    // Store the updated users array back to localStorage
    localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));

    console.log("Registered User:", newUser);

    // Reset the form fields
    setName('');
    setEmail('');
    setPassword('');
    setDob(null);

    alert('Registration successful! Redirecting to login...');
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-md bg-gradient-to-r from-blue-50 to-blue-100 sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-600">Create Your Account</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Username Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Username:</label>
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
            placeholder="Enter your username"
            required
          />
        </div>

        {/* Email Input */}
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

        {/* Password Input */}
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

        {/* Date of Birth Input (with Date Picker) */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Birth:</label>
          <DatePicker 
            selected={dob} 
            onChange={(date) => setDob(date)} 
            dateFormat="dd-MM-yyyy"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
            placeholderText="Select your birth date"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg hover:shadow-xl sm:py-4 lg:py-5"
          >
            Register
          </button>
        </div>
      </form>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">Already have an account? 
          <button className="text-blue-600 hover:underline" onClick={() => navigate('/login')}> Login</button>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
