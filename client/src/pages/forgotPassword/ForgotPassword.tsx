import { Box, Typography } from '@mui/material'

function ForgotPassword() {
    return (
        <div>
            <Box display='flex' justifyContent='center' alignItems='center' sx={{ width: '100%', height: '100vh' }}>
                <Box   sx={{ bgcolor: '#FFFFFF', width: '32%', height: '44vh', borderRadius: 6, backgroundColor: "rgba(255, 255, 255, 0.10)" }}>
                    <Box >
                        <Box  display='flex' justifyContent='center' >
                            <Typography sx={{color:'#FFFFFF',mt:5}} fontWeight={530} variant='h5'>Forgot Password</Typography>
                        </Box>
                        <Box sx={{ml:5,mr:6,mt:5}}>
                            <input name='email' type="text" placeholder="Enter Your Email" />
                            <button className="btn btn-primary btn-block btn-large">Submit</button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default ForgotPassword