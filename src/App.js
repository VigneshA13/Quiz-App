import { Stack } from "@mui/material";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Questions from "./components/Questions";

function App() {
  return (
    <Stack alignItems="center" justifyContent="center">
      <Navbar />
      {/* <Home /> */}
      <Questions />
    </Stack>
  );
}

export default App;
