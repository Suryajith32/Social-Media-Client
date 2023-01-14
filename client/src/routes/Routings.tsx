import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ForgotPassword from '../pages/forgotPassword/ForgotPassword'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import ResetPassword from '../pages/resetPassword/ResetPassword'
import Signup from '../pages/signup/Signup'

function Routings() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Routings