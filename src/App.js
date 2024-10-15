import React from 'react'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import { BrowserRouter as Router, Route,Routes,Navigate } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <Router>
    <div className='App'>
      {/* <h1 className='text-center text-4xl font-bold my-10'>Welcome to our App</h1> */}
      
      <Routes>
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Navigate to="/register" />} />
        <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
      </Routes>
      
    </div>
    </Router>
  )
}

export default App
