import { Box } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton/IconButton";
import SendSharpIcon from '@mui/icons-material/SendSharp';



function FriendListCard() {
    return (
        <div>
            <Box sx={{ bgcolor: 'rgba(225,225,225,0.10)', height: '70vh', borderRadius: '23px' }}>
                <Box display='flex' justifyContent='center' sx={{ width: '100%', pt: 2 }}>
                    <Box display='flex' alignItems='center' sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', width: '12em', maxHeight: '6vh', borderRadius: 2, }}>
                        <Box display='flex' justifyContent='center' alignItems='center' sx={{ ml: 1, height: '4.4vh', width: '2.5em', bgcolor: '#009EFF', borderRadius: 20, }}>
                            <SearchIcon />
                        </Box>
                        <Box sx={{ mt: 1, }}>
                            <input className='nav-search' type='text' placeholder='Search' />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ ml: 2, mt: 2 }}>
                    <Typography fontWeight={480} sx={{ opacity: 0.5, color: '#FFFFFF' }}>Friends</Typography>
                </Box>
                <Box>
                    {[1, 2, 3,].map(() => (
                        <Box sx={{ mr: 2, ml: 2, mt: 2 }} >
                            <Stack display='flex' direction='row' justifyContent='space-between'>
                                <Box>
                                    <Avatar src="https://media.zenfs.com/en/the_independent_635/dbe881afc80e6b3d88a23a6873d050d6" />
                                </Box>
                                <Box sx={{ color: '#FFFFFF', mt: 1.2 }}>
                                    <Typography fontWeight={480} sx={{ fontVariant: 'h8' }}>Leo Messi</Typography>
                                </Box>
                                <Box sx={{ mt: .3 }}>
                                    <IconButton color="primary" aria-label="upload picture" component="label">
                                        <Box display='flex' alignItems='center' justifyContent='center' sx={{ width: '70px', height: '4vh', borderRadius: 1 }}>
                                            <Box>
                                                <IconButton sx={{ color: '#FFFFFF' }}>
                                                    <SendSharpIcon />
                                                </IconButton>
                                            </Box>
                                        </Box>
                                    </IconButton>
                                </Box>
                            </Stack>
                        </Box>
                    ))}
                </Box>
            </Box>
        </div>
    )
}

export default FriendListCard