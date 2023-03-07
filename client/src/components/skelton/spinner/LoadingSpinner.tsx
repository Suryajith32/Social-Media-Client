import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Triangle } from 'react-loader-spinner';
import { useSelector } from 'react-redux';

export default function CircularIndeterminate({text}:any) {

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center',height:'100vh',  alignItems: 'center' }}>
            <Triangle
                height="80"
                width="80"
                color="#4D77FF"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                visible={true}
            />
            <Box>
                <Typography sx={{color:'#4D77FF'}}>{text}</Typography>
            </Box>
        </Box>
    );
}