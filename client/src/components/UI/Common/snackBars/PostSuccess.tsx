import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { SnackBarOpen } from '../../../../services/Reducers/UserReducer';



function PostSuccess() {

    const isSnackOpen = useSelector((state: any) => state.user.value.isSnackBar);
    const dispatch = useDispatch()

    setTimeout(() => {
        dispatch(SnackBarOpen(false))
    }, 5000);

  return (
    <div>
         <Snackbar open={isSnackOpen} autoHideDuration={6000} >
        <Alert  severity="success" sx={{ width: '100%' }}>
         Post added 
        </Alert>
      </Snackbar>
    </div>
  )
}

export default PostSuccess