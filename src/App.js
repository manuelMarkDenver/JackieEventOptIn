import "./App.css";
import { Box } from "@mui/material";
import Banner from "./components/Banner";
import CountdownContainer from "./components/CountdownContainer";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <Box>
      <Banner />
      <CountdownContainer />
      <SignupForm />
    </Box>
  );
}

export default App;
