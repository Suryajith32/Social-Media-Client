import { Box, Typography, Stack } from '@mui/material'
import Avatar from '@mui/material/Avatar';

function ProfileCard() {
  return (
    <div>
      <Box sx={{ bgcolor: 'rgba(225,225,225,0.10)', height: '46vh', borderRadius: '23px', }}>
        <Box >
          <Box display='flex' justifyContent='center' sx={{ maxWidth: '100%', pt: 3 }}>
            <Avatar sx={{ width: 75, height: 75 }} src="https://m.media-amazon.com/images/I/61448uTtdLS._SY679_.jpg" />
          </Box>
          <Box display='flex' justifyContent='center' sx={{ color: '#FFFFFF', maxWidth: '100%' }}>
            <Box pt={1}>
              <Typography sx={{ fontSize: 18 }} fontWeight={570}>The Weekend</Typography>
              <Box display='flex' justifyContent='center' sx={{ color: '#FFFFFF', maxWidth: '100%' }}>
                <Typography sx={{ fontSize: 15 }} fontWeight={340}>The Hills</Typography>
              </Box>           
            </Box>
          </Box>
        </Box>
        <Box sx={{ ml: 4, mr: 4, mt: 2 }}>
          <Stack display='flex' direction='row' spacing={2} justifyContent='space-between' >
            <Box sx={{ color: '#FFFFFF' }}>
              <Typography sx={{ fontSize: 18 }}>Followers</Typography>
              <Box display='flex' justifyContent='center' sx={{ color: '#FFFFFF', maxWidth: '100%' }}>
                <Typography sx={{ fontSize: 18 }} fontWeight={570}>6,000</Typography>
              </Box>
            </Box>
            <Box sx={{ color: '#FFFFFF' }}>
              <Typography sx={{ fontSize: 18 }}>Following</Typography>
              <Box display='flex' justifyContent='center' sx={{ color: '#FFFFFF', maxWidth: '100%' }}>
                <Typography sx={{ fontSize: 18 }}  fontWeight={570}>6,000</Typography>
              </Box>
            </Box>
          </Stack>
          <Box display='flex' justifyContent='center' sx={{ color: '#009EFF', maxWidth: '100%' ,pt:4}}>
            <Typography fontWeight={570}>My Profile</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default ProfileCard