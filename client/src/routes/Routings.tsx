import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'

function Routings() {
  return (
    <div>
           <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
          </Routes>
        </Router>
    </div>
  )
}

export default Routings