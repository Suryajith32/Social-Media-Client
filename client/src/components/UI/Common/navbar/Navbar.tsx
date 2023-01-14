import { Avatar, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Diversity2Icon from '@mui/icons-material/Diversity2';
import SearchIcon from '@mui/icons-material/Search';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import './navbar.css'

function Navbar() {
    return (
        <div>
            <Box >
                <Box>
                    <Stack display='flex' direction='row' justifyContent='space-between' alignItems='center'>
                        <Box display='flex' alignItems='center' sx={{ ml: 2, width: '100%', height: '10vh' }} >
                            <Stack display='flex' direction='row' spacing={4} >
                                <Box sx={{ color: '#009EFF',ml:1 }}>
                                    <Diversity2Icon fontSize='large' />
                                </Box>
                                <Box>
                                    <Box display='flex' alignItems='center' sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', width: '13em', maxHeight: '6vh', borderRadius: 2, }}>
                                        <Box display='flex' justifyContent='center' alignItems='center' sx={{ ml: 1, height: '4.4vh', width: '2.5em', bgcolor: '#009EFF', borderRadius: 20, }}>
                                            <SearchIcon  />
                                        </Box>
                                        <Box sx={{ mt: 1 }}>
                                            <input className='nav-search' type='text' placeholder='Search' />
                                        </Box>
                                    </Box>
                                </Box>
                            </Stack>
                        </Box>
                        <Box sx={{ mr: 3, }}>
                            <Stack display='flex' direction='row' spacing={5} alignItems='center'>
                                <Box sx={{ color: '#009EFF', display: { md: 'block', sm: 'block', xs: 'block' } }}>
                                    <QuestionAnswerOutlinedIcon sx={{ fontSize: "30px" }} />
                                </Box>
                                <Box sx={{ color: '#009EFF', display: { md: 'block', sm: 'block', xs: 'none' } }}>
                                    <NotificationsNoneOutlinedIcon sx={{ fontSize: "30px" }} />
                                </Box>
                                <Box sx={{ display: { md: 'block', sm: 'none', xs: 'none' }, width: '8em', height: '6vh', bgcolor: 'rgba(255, 255, 255, 0.2)', borderRadius: 20, color: '#FFFFFF' }}>
                                    <Stack display='flex' direction='row' alignItems='center'>
                                        <Avatar src="https://m.media-amazon.com/images/I/61448uTtdLS._SY679_.jpg" sx={{ display: { md: 'block', sm: 'block', xs: 'block' } }} />
                                        <Typography fontWeight={550} sx={{ ml: 2 }}>Profile</Typography>
                                    </Stack>
                                </Box>
                                <Box sx={{ color: '#009EFF', display: { md: 'block', sm: 'block', xs: 'none' } }}>
                                    <ArrowDropDownOutlinedIcon sx={{ fontSize: "30px" }} />
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </div>
    )
}

export default Navbar