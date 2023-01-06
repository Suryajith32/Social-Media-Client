import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import bgimage from '../../assets/images/bg.jpeg'
import './login.css'

function Login() {
    return (
        <div>
            <Box mt={5}>
                <Grid container >
                    <Grid sx={{ display: { xs: 'none', md: 'block', lg: 'block', sm: 'none' } }} item xs={6} md={6}>
                        <Box display='flex' flexDirection='column' justifyContent='center' alignContent='center' sx={{ mt: 8, height: '47vh', width: '100%' }}>
                            <Box sx={{ m: 'auto', }}>
                                <Typography fontWeight={600} variant='h1' sx={{ color: '#FFFFFF', fontStyle: 'italic' }}>Get </Typography>
                                <Typography fontWeight={600} variant='h1' sx={{ color: '#FFFFFF', fontStyle: 'italic' }}>Socialized</Typography>
                                <Typography variant='h5' sx={{ color: '#FFFFFF', fontStyle: 'italic' }}>Don't have an account?</Typography>
                                <Typography fontWeight={600} variant='h4' sx={{ color: '#FFFFFF', fontStyle: 'italic', }}>Get Started now</Typography>
                                <Link style={{ textDecoration: 'none', color: "black" }} to='/signup'><Box display='flex' justifyContent='center' sx={{
                                    bgcolor: "#FFFFFF", height: '5vh', width: '28%', borderRadius: 14, mt: 2, '&:hover': { backgroundColor: '#F73D93', opacity: [0.9, 0.8, 0.7], },
                                }}>
                                    <Typography sx={{ fontStyle: 'italic', }} fontWeight={600} variant='h6'>Sign up</Typography>
                                </Box></Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Box sx={{ position: 'relative', height: '90vh', width: '100%', backgroundImage: `url(${bgimage})`, objectFit: 'cover', backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
                            <Box sx={{ bgcolor: "transparent", }}>
                                <Container maxWidth="xs">
                                    <Box >
                                        <Box mt={20} sx={{ borderRadius: 6, backgroundColor: "rgba(255, 255, 255, 0.10)", height: '70vh' }} >
                                            <div className="login">
                                                <h1>Login</h1>
                                                <input type="text" placeholder="Email" />
                                                <input type="password" placeholder="Password" />
                                                <button type="submit" className="btn btn-primary btn-block btn-large">Login</button>
                                                {/* <Box mt={2}> {error && <Alert severity="error">{error}</Alert>}</Box> */}
                                               <Typography sx={{ mt: 6, ml: 2, color: '#FFFFFF', }}>New User ?  <Link style={{ textDecoration: 'none', color: "#FFFFFF" }} to='/signup'>Sign up Now</Link> </Typography>
                                            </div>
                                        </Box>
                                    </Box>
                                </Container>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Login



