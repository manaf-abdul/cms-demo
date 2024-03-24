import { Box, CircularProgress } from '@mui/material'

const CircularProgressBar = () => {
    return (
        <Box
            className="w-screen flex items-center justify-center"
        >
            <CircularProgress color='primary' />
        </Box>
    )
}

export default CircularProgressBar