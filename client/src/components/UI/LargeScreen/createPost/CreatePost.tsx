import { Avatar, Box, Button, IconButton } from "@mui/material"
import { Stack } from "@mui/system"
import Typography from "@mui/material/Typography";
import CameraAltIcon from '@mui/icons-material/CameraAlt';



function CreatePost() {
    return (
        <div>
            <Box sx={{ bgcolor: 'rgba(225,225,225,0.10)', height: '20vh', borderRadius: '23px' }}>
                <Box display='flex' flexDirection='row' sx={{ pt: 2, ml: 3 }}>
                    <Box>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://m.media-amazon.com/images/I/61448uTtdLS._SY679_.jpg"
                            sx={{ width: 45, height: 45 }}
                        />
                    </Box>
                    <Box sx={{ mt: 0.5, ml: 3 }}>
                        <Box display='flex' alignItems='center' sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', width: '25em', maxHeight: '6vh', borderRadius: 2, }}>
                            <Box sx={{ mt: 1 }}>
                                <input className='nav-search' type='text' placeholder='Whats Happening...?' />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box display='flex' justifyContent='center' >
                    <Stack display='flex' direction='row' spacing={2}>
                        <Box>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <Box display='flex' alignItems='center' justifyContent='center' sx={{ width: '95px', height: '5vh', border:1,borderColor:'#FFFFFF', borderRadius: 1, }}>
                                    <CameraAltIcon sx={{color:'#FFFFFF'}}/>
                                    <Typography sx={{color:"#FFFFFF"}} fontWeight={500} >photo</Typography>
                                </Box>
                            </IconButton>
                        </Box>
                        {/* <Box>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <Box display='flex' alignItems='center' justifyContent='center' sx={{ width: '3em', height: '5vh', bgcolor: '#FFFFFF', borderRadius: 1 }}>
                                    <Typography fontWeight={500} >video</Typography>
                                </Box>
                            </IconButton>
                        </Box> */}
                        <Box sx={{pt:1}}>
                            <Button size="small" variant="contained">Post</Button>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </div>
    )
}

export default CreatePost