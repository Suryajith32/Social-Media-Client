import { Avatar, Box, Button, IconButton, Typography, } from '@mui/material'
import { Stack } from '@mui/system'

function SuggestionCard() {
    return (
        <div>
            <Box sx={{ bgcolor: 'rgba(225,225,225,0.10)', height: '38vh', borderRadius: '23px' }}>
                <Box sx={{ color: '#FFFFFF', ml: 2, pt: 2 }}>
                    <Typography fontWeight={480} sx={{opacity:0.5}}>People you might know</Typography>
                </Box>
                {[1, 2, 3].map(() => (
                    <Box sx={{ mr: 2, ml: 2, mt: 2 }} >
                        <Stack display='flex' direction='row' justifyContent='space-between'>
                            <Box>
                                <Avatar  src="https://media.zenfs.com/en/the_independent_635/dbe881afc80e6b3d88a23a6873d050d6" />
                            </Box>
                            <Box sx={{ color: '#FFFFFF', mt: 1.2 }}>
                                <Typography fontWeight={480} sx={{ fontVariant: 'h8' }}>Leo Messi</Typography>
                            </Box>
                            <Box sx={{ mt: .3 }}>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <Box display='flex' alignItems='center' justifyContent='center' sx={{ width: '70px', height: '4vh', bgcolor: '#FFFFFF', borderRadius: 1 }}>
                                    <Typography sx={{color:'black'}} fontSize={14} fontWeight={600} >Follow</Typography>
                                </Box>
                            </IconButton>
                            </Box>
                        </Stack>
                    </Box>
                ))}
            </Box>
        </div>
    )
}

export default SuggestionCard