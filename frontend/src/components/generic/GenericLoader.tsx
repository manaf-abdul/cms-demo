import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const GenericLoader = () => {
    return (
        <Box className="flex items-center justify-center pt-[40vh]">
            <CircularProgress />
        </Box>
    );
};

export default GenericLoader;
