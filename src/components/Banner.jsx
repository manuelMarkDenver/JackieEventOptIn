import { Typography } from "@mui/material";
import SignupForm from "./SignupForm";

const Banner = () => {
  return (
    <>
      <Typography variant="h1" component="h2" align="center">
        Jackie's Event
      </Typography>
      <SignupForm />
    </>
  );
};

export default Banner;
