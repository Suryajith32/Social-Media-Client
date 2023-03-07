import Box from '@mui/material/Box';
import { Triangle } from 'react-loader-spinner';

export default function CircularIndeterminate() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <Triangle
                height="80"
                width="80"
                color="#4D77FF"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                visible={true}
            />
        </Box>
    );
}