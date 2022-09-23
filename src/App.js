import "./App.css";
import { Box } from "@mui/material";
import Banner from "./component/Banner";

function App() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Banner />
    </Box>
  );
}

export default App;
