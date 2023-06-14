import {
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Stack,
  Typography,
  Radio,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sum } from "../features/Count";
import { correctAnswers, changeAnswer, changeIndex } from "../features/Answer";
import { useNavigate } from "react-router-dom";

const Questions = () => {
  // the below line is used for navigate to another page
  const navigate = useNavigate();

  // question is get from state
  let q = useSelector((state) => state.question.value);

  // question array count is get from state
  let count = useSelector((state) => state.count.value);
  // seleting question using count state
  let questions = q[count];
  // store the option in answer[] and sorted
  let answer = [];
  for (let i = 0; i < 3; i++) {
    answer.push(questions.incorrectAnswers[i]);
  }
  answer.push(questions.correctAnswer);
  answer.sort();

  // dispatch is used to chage the redux state
  const dispatch = useDispatch();

  // the below useState is used to store selected of the particular question
  const [value, setValue] = useState("");

  const [enable, setEnable] = useState(false);

  // length of the correct answer array
  let ans = useSelector((state) => state.answer.value.answers);
  let len = ans.length;

  // temp array to store the selected answers

  const previous = () => {
    if (len !== count) {
      dispatch(changeIndex(count));
      dispatch(changeAnswer(value));
    }
    dispatch(sum(count - 1));
  };

  const next = () => {
    setEnable(false);
    if (len === count) {
      dispatch(correctAnswers(value));
    } else {
      dispatch(changeIndex(count));
      dispatch(changeAnswer(value));
    }

    dispatch(sum(count + 1));
  };

  const submit = () => {
    if (len === count) {
      dispatch(correctAnswers(value));
    } else {
      dispatch(changeIndex(count));
      dispatch(changeAnswer(value));
    }
    navigate("/scorecard");
  };

  const onchange = (event) => {
    setEnable(true);
    setValue(event.target.value);
  };
  console.log(enable);
  return (
    <Stack alignItems="center" justifyContent="center">
      <Box
        sx={{
          width: "135vh",
          backgroundColor: "white",
          m: "10vh",
          boxShadow: 15,
          borderRadius: "35px",
        }}>
        <Box sx={{ m: "9vh", ml: "20vh" }}>
          <Typography variant="h6">{questions.question.text}</Typography>
          <FormControl sx={{ mt: "5vh", ml: "9vh" }}>
            <RadioGroup
              defaultValue={value}
              aria-labelledby="answer"
              name="answer-group"
              value={value}
              onChange={onchange}>
              {answer.map((ans) => {
                return (
                  <FormControlLabel
                    value={ans}
                    control={<Radio />}
                    label={ans}
                    key={ans}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </Box>
        <Box sx={{ mt: "-5vh" }}>
          <Typography
            variant="body1"
            align="center"
            sx={{ fontWeight: "bold" }}>
            {count < len ? "Your Answer : " + ans[count] : ""}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            m: "3vh",
            ml: "20vh",
            mb: "7vh",
          }}>
          <Button
            variant="contained"
            disabled={count < 1}
            onClick={previous}
            sx={{ ml: "33vh" }}>
            Previous
          </Button>

          <Button
            sx={{ ml: "5vh" }}
            variant="contained"
            onClick={count === 9 ? submit : next}
            disabled={!enable}>
            {count === 9 ? "Submit" : "Next"}
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default Questions;
