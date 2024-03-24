import { Box, Button, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTES } from "../../route/routes";

const SuccessPage = () => {
  const navigate = useNavigate();

  const homeHandler = () => {
    navigate(generatePath(ROUTES.home));
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={3}
      justifyContent="center"
      height={"70vh"}
    >
      <CheckCircleRoundedIcon color="success" sx={{ fontSize: "15rem" }} />
      <Typography variant="h5" textAlign={"center"} color="green">
        Success
      </Typography>
      <Button
        sx={{ marginTop: 2 }}
        fullWidth
        variant="outlined"
        onClick={homeHandler}
        color="primary"
        disableElevation
      >
        <Typography fontWeight="bold" className="capitalize text-inherit">
          Home
        </Typography>
      </Button>
    </Box>
  )
}

export default SuccessPage