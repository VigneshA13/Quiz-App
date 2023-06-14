import { Stack } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Questions from "./components/Questions";
import Scorecard from "./components/Scorecard";

function App() {
  return (
    <Stack alignItems="center" justifyContent="center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/scorecard" element={<Scorecard />} />
      </Routes>
    </Stack>
  );
}

export default App;
