import { Avatar, Box, Stack, Typography } from '@mui/joy'
import Skeleton from '@mui/material/Skeleton';


function FriendListSkelton() {
    return (
        <div>
            <Box sx={{ height: '42vh', borderRadius: '23px', }}>
                <Box>
                    <Box display='flex' justifyContent='center' sx={{ color: '#FFFFFF', maxWidth: '100%' }}>
                        <Box sx={{ width: '60%' }} pt={2}>
                            <Skeleton sx={{ bgcolor: 'grey.900' }} width="100%">
                                <Typography>.</Typography>
                            </Skeleton>
                        </Box>
                    </Box>
                </Box>
               {[1,2,3].map((_,index)=>(
                 <Box sx={{ mr: 3, ml: 3, mt: 1.4 }} >
                    <Stack display='flex' direction='row' justifyContent='space-between'>
                        <Box sx={{ margin: 1 }}>
                            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="circular">
                                <Avatar />
                            </Skeleton>
                        </Box>
                        <Box sx={{ width: '40%' }} pt={2}>
                            <Skeleton sx={{ bgcolor: 'grey.900' }} width="100%">
                                <Typography>.</Typography>
                            </Skeleton>
                        </Box>
                        <Box sx={{ width: '20%' }} pt={2}>
                            <Skeleton sx={{ bgcolor: 'grey.900' }} width="100%">
                                <Typography>.</Typography>
                            </Skeleton>
                        </Box>
                    </Stack>
                </Box>))}
            </Box>
        </div>
    )
}

export default FriendListSkelton