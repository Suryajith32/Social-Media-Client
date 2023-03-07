import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { User } from '../context/userContext'
import AdminLogin from '../pages/admin/adminLogin/AdminLogin'
import Error from '../pages/error/Error'
import InternalServerError from '../pages/error/InternalServerError'
import ForgotPassword from '../pages/forgotPassword/ForgotPassword'
import Login from '../pages/login/Login'
import ResetPassword from '../pages/resetPassword/ResetPassword'
import Signup from '../pages/signup/Signup'
import AdminHome from '../pages/admin/adminHome/AdminHome'
import jwtDecode from 'jwt-decode'
import { useEffect } from 'react'
import Users from '../pages/admin/users/Users'
import Posts from '../pages/admin/posts/Posts'
import React from 'react'
import Spinner from '../components/skelton/spinner/Spinner'
import LineSpinner from '../components/skelton/spinner/LineSpinner'
const LazyHome = React.lazy(() => import('../pages/home/Home'))
const LazyFeed = React.lazy(() => import('../components/UI/Common/feed/Feed'))
const LazyUserProfile = React.lazy(() => import('../pages/userProfile/UserProfile'))
const LazyMessages = React.lazy(() => import('../pages/messages/Messages'))
const LazyUsersProfile = React.lazy(() => import('../pages/usersProfile/UsersProfile'))
const LazyNotification = React.lazy(() => import('../pages/notification/Notification'))

const socketio = require('socket.io-client')("ws://localhost:8000")

function Routings() {
  const data: any = localStorage.getItem('token')

  useEffect(() => {
    if (data != null) {
      const user: any = jwtDecode(data)
      console.log(user, 'user from routings')

      socketio?.emit("addUser", user?.id, user?.name)
    }
  }, [])
  
  return (
    <div>
      <Router>
        <User>
          <Routes>
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route path='reset-password' element={<ResetPassword />} />
            <Route path='error' element={<InternalServerError />} />
            <Route path='*' element={<Error />} />

            <Route path='/' element={<React.Suspense fallback={<Spinner/>}><LazyHome /></React.Suspense>} >
              <Route path='/' element={<React.Suspense fallback={<LineSpinner/>}><LazyFeed socketio={socketio} /></React.Suspense>} />
              <Route path='profile' element={<React.Suspense fallback={<LineSpinner/>}><LazyUserProfile /></React.Suspense>} />
              <Route path='users-profile' element={<React.Suspense fallback={<LineSpinner/>}><LazyUsersProfile /></React.Suspense>} />
              <Route path='notification' element={<React.Suspense fallback={<LineSpinner/>}><LazyNotification /></React.Suspense>} />
              <Route path='inbox' element={<React.Suspense fallback={<LineSpinner/>}><LazyMessages socketio={socketio} /></React.Suspense>} />
            </Route>

            <Route path='admin-login' element={<AdminLogin />} />
            <Route path='admin' element={<AdminHome />}>
              <Route path='usermanagement' element={<Users />} />
              <Route path='postmanagement' element={<Posts />} />

            </Route>
          </Routes>
        </User>
      </Router>
    </div>
  )
}

export default Routings