import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../features/User";
import { clearAnswer } from "../features/Answer";

const Scorecard = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  let ans = useSelector((state) => state.answer.value.answers);
  let question = useSelector((state) => state.question.value);
  let name = useSelector((state) => state.user.value);

  const result = () => {
    let score = 0;
    for (let i = 0; i < 10; i++) {
      if (question[i].correctAnswer === ans[i]) {
        score++;
        console.log(true);
      }
    }
    return score;
  };

  const attempt = () => {
    dispatch(clearUser());
    dispatch(clearAnswer());
    navigate("/");
  };
  return (
    <Box
      sx={{
        width: "100vh",
        backgroundColor: "white",
        m: "10vh",
        boxShadow: 15,
        borderRadius: "35px",
      }}>
      <Box>
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: "bold", m: "5vh" }}>
          ScoreCard
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h5"
          align="center"
          sx={{ fontWeight: "bold", m: "4vh" }}>
          {name} your score out of 10 is
        </Typography>
        <Typography
          variant="h2"
          align="center"
          sx={{ fontWeight: "bold", m: "5vh" }}>
          {result()}
        </Typography>
      </Box>
      <Box sx={{ m: "2vh", ml: "3vh" }}>
        <Button
          variant="contained"
          sx={{ m: "3vh", ml: "32vh" }}
          onClick={attempt}>
          Make another attempt
        </Button>
      </Box>
    </Box>
  );
};

export default Scorecard;
