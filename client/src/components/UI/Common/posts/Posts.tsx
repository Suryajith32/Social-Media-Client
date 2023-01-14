import { Avatar, Box, Container, IconButton, Typography } from '@mui/material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import { Stack } from '@mui/system'
import './posts.css'

function Posts() {
    return (
        <div>
            {[1, 2, 3].map(() => (
                <Box sx={{ bgcolor: 'rgba(225,225,225,0.10)', height: '73vh', borderRadius: '23px', mt: 2 }}>
                    <Box>
                        <Box sx={{ pt: 1, ml: 2 }}>
                            <Stack display='flex' direction='row' spacing={2}>
                                <Box sx={{ pt: 1 }}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="https://media.zenfs.com/en/the_independent_635/dbe881afc80e6b3d88a23a6873d050d6"
                                        sx={{ width: 55, height: 55 }}
                                    />
                                </Box>
                                <Box sx={{ pt: 2 }}>
                                    <Stack>
                                        <Box sx={{ color: '#FFFFFF' }}>
                                            <Typography fontWeight='bold'>Leo Messi</Typography>
                                        </Box>
                                        <Box sx={{ color: '#FFFFFF', opacity: 0.5 }}>
                                            <Stack display='flex' direction='row' spacing={10}>
                                                <Typography fontSize={13}>@lapulga</Typography>
                                                <Typography fontSize={13}>43 minutes ago</Typography>
                                            </Stack>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Box>
                        <Container maxWidth="sm">
                            <Box display='flex' alignItems='center' sx={{ width: '100%', height: '8vh', mt: 1, color: '#FFFFFF', ml: 1, mr: 2 }}>
                                <Typography>
                                    How are you going to convince me that magic dosn't exist...
                                </Typography>
                            </Box>
                        </Container>
                        <Box sx={{ width: '100%', height: '40vh', bgcolor: '#FFFFFF', mt: 1, borderRadius: '14px', }}>
                            <img className='post-image' src='https://krdo.b-cdn.net/2022/12/hypatia-h_f713da99ca8c431026596b205d153aa6-h_af8fc5a6011cac14a07a0c68a30491b2-300-860x573.jpg' />

                        </Box>
                        <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center' sx={{ width: '88%', height: '9.2vh', mt: 1, color: '#FFFFFF', ml: 4, mr: 6, }}>
                            {/* <Box sx={{ color: '#FFFFFF', ml: 4, mr: 4, }}> */}

                            <Box >
                                <IconButton sx={{color:'#FFFFFF'}}>
                                    <ThumbUpOffAltIcon />
                                    <Box sx={{pl:2,display:{md:'block',lg:'block',sm:'block',xs:'none'}}}><Typography fontSize={13}>72.5k likes</Typography></Box>
                                </IconButton>
                                <Box sx={{display:{md:'none',lg:'none',sm:'none',xs:'block'}}}><Typography fontSize={13}>72.5k likes</Typography></Box>
                            </Box>
                            <Box>
                                <IconButton sx={{color:'#FFFFFF'}}>
                                    <InsertCommentOutlinedIcon />
                                    <Box sx={{pl:2,display:{md:'block',lg:'block',sm:'block',xs:'none'}}}><Typography fontSize={13}>4.5k comments</Typography></Box>
                                </IconButton>
                                <Box sx={{display:{md:'none',lg:'none',sm:'none',xs:'block'}}}><Typography fontSize={13}>4.5k comments</Typography></Box>
                            </Box>
                            <Box>
                                <IconButton sx={{color:'#FFFFFF'}}>
                                    <SendSharpIcon />
                                </IconButton>
                            </Box>

                            {/* </Box> */}
                        </Box>
                    </Box>
                </Box>
            ))}
        </div>
    )
}

export default Posts