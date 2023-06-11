import { Box, TextField, Stack, Typography, Button } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ mt: "17vh" }}>
      <Box
        sx={{
          backgroundColor: "white",
          width: "100vh",
          height: "50vh",
          boxShadow: 15,
          borderRadius: "15px",
          border: 2,
          borderColor: "white",
          "&:hover": {
            borderColor: "primary.main",
          },
        }}>
        <Box sx={{ mt: "7vh" }}>
          <Typography variant="h4" align="center" fontWeight={"bold"}>
            Quiz App
          </Typography>
        </Box>

        <form>
          <Box sx={{ mt: "9vh", flexDirection: "row" }}>
            <Typography variant="h5" fontWeight={"bold"} sx={{ ml: "15vh" }}>
              Player Name :
              <TextField
                label="Player name"
                variant="outlined"
                sx={{ mt: "-2vh", ml: "8vh", width: "45vh" }}
              />
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{ m: "7vh", ml: "25vh", width: "47vh", height: "7vh" }}>
              Play Game
            </Button>
          </Box>
        </form>
      </Box>
    </Stack>
  );
};

export default Home;
