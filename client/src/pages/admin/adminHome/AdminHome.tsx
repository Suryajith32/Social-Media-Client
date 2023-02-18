import Box from '@mui/material/Box'
import React from 'react'
import Sidebar from '../../../components/UI/Admin/drawer/Sidebar'
import AdminNavbar from '../../../components/UI/Admin/navbar/AdminNavbar'

function AdminHome() {
  return (
    <div>
      <AdminNavbar />
      <Sidebar />
      <Box>
             <Box sx={{bgcolor:'rgba(225,225,225,0.10)' ,width:'100%',height:'88vh',borderRadius:'23px'}}>

             </Box>
      </Box>
    </div>
  )
}

export default AdminHome