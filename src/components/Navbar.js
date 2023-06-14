import React from "react";
import QuizIcon from "@mui/icons-material/Quiz";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <QuizIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Quiz App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
