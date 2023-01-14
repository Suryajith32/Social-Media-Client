import { useEffect } from 'react'
import Navbar from '../../components/UI/Common/navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Box, Container } from '@mui/system'
import { BottomNavigation, Grid } from '@mui/material'
import ProfileCard from '../../components/UI/LargeScreen/profileCard/ProfileCard'
import SuggestionCard from '../../components/UI/LargeScreen/suggestionCard/SuggestionCard'
import FriendListCard from '../../components/UI/LargeScreen/friendListCard/FriendListCard'
import Feed from '../../components/UI/Common/feed/Feed'
import BottomNav from '../../components/UI/SmallScreen/bottomNav/BottomNav'

function Home() {
  const navigate = useNavigate()

  //AUTH CHECK//

  const authCheck = () => {
    axios.get("http://localhost:4000/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response: any) => {
      console.log(response, 'response jwt');
      if (!response.data.auth) {
        navigate('login')
      }
    }).catch((err: any) => {

    })
  }
  useEffect(() => {
    authCheck()
  }, [])

  return (
    <div>
      <Navbar />
      {/* <Box display='flex' alignItems='self-end'>
        <BottomNav/>
        </Box>  */}

      <Box sx={{ mt: 1, height: '50vh', width: '100%' }}>
        <Grid container >
          <Grid item xs sx={{ display: { xs: 'none', md: 'none', lg: 'block', sm: 'none' } }}>
            <Container maxWidth="md">
              <Box sx={{ height: '85.5vh' }} >
                <Box>
                  <ProfileCard />
                </Box>
                <Box sx={{ mt: 2 }}>
                  <SuggestionCard />
                </Box>
              </Box>
            </Container>
          </Grid>
          <Grid item xs={12} md={6}>
            <Container maxWidth="md">
              <Box sx={{
                overflow: "hidden",
                overflowY: "scroll", height: '88vh'
              }} >
                <Feed />

              </Box>
            </Container>
            {/* <Box sx={{ width: '100%', height: '10vh', bgcolor: 'red', position: 'relative' }}>

            </Box> */}
            

          </Grid>
          <Grid item xs sx={{ display: { xs: 'none', md: 'none', lg: 'block', sm: 'none' } }}>
            <Container maxWidth="md">
              <Box sx={{ height: '85.5vh', }} >
                <Box>
                  <FriendListCard />
                </Box>
              </Box>
            </Container>
          </Grid>
          <Box>
          </Box>
        </Grid>
      </Box>
    </div>
  )
}

export default Home