import * as React from 'react';
import Box from '@mui/material/Box';
import { LineWave } from 'react-loader-spinner';

export default function CircularIndeterminate() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', height: '80vh',width:"100%" ,alignItems: 'center' }}>
            <LineWave
                height="150"
                width="150"
                color="#4D77FF"
                ariaLabel="line-wave"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                firstLineColor=""
                middleLineColor=""
                lastLineColor=""
            />
        </Box>
    );
}