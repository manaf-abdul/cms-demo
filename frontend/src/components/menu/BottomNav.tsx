import { Box, Typography } from "@mui/material";

const BottomNav = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="fixed bottom-0 w-full pb-3 pt-3"
            sx={{
                backgroundColor: "grey",
            }}
        >
            <Typography variant="caption">
                Powered by AUTOVERT
            </Typography>
            {/* <img src={GrayLogo} alt="Gray logo" className="w-24" /> */}
        </Box>
    );
};

export default BottomNav;
