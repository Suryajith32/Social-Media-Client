import { Stack } from '@mui/joy'
import { Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import React from 'react'

function Notification() {
    return (
        <>
            <Box sx={{ width: '100%', minHeight: '88vh', bgcolor: 'rgba(225,225,225,0.10)', borderRadius: '23px' }}>
                {/* <Box display='flex' justifyContent='center'> 
               <Typography>Notifications</Typography>
               </Box> */}
               {[1,2,3,4,5,6].map((_,index)=>(
                <Box sx={{ml:5,pt:4}} >
                    <Stack display='flex' direction='row' alignItems='center' spacing={3} >
                        <Box>
                            <Avatar
                                alt="Remy Sharp"
                                src="   "
                                sx={{ width: 56, height: 56 }}
                            />
                        </Box>
                        <Box>
                            <Stack display='flex' direction='row' spacing={1}>
                                <Typography sx={{ color: '#FFFFFF' }}>suryajith</Typography>
                                <Typography sx={{ color: '#FFFFFF' }}>Liked Your Photo</Typography>
                            </Stack>
                            <Typography sx={{ color: 'grey' }}>1d </Typography>
                        </Box>
                    </Stack>
                </Box>
                ))}
            </Box>
        </>
    )
}

export default Notification
