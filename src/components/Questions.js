import {
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Stack,
  Typography,
  Radio,
} from "@mui/material";
import React from "react";

const Questions = () => {
  let question = [
    {
      category: "society_and_culture",
      id: "622a1c367cc59eab6f95010c",
      correctAnswer: "Odin",
      incorrectAnswers: ["Thor", "Loki", "Freya"],
      question: { text: "Which Norse god had the Valkyries as handmaidens?" },
      tags: ["society_and_culture"],
      type: "text_choice",
      difficulty: "medium",
      regions: [],
      isNiche: false,
    },
    {
      category: "geography",
      id: "622a1c367cc59eab6f9503ae",
      correctAnswer: "Australia",
      incorrectAnswers: ["New Zealand", "The United Kingdom", "The USA"],
      question: { text: "Which Country Owns Christmas Island?" },
      tags: ["geography"],
      type: "text_choice",
      difficulty: "hard",
      regions: [],
      isNiche: false,
    },
    {
      category: "society_and_culture",
      id: "622a1c3c7cc59eab6f9518f9",
      correctAnswer: "Igraine",
      incorrectAnswers: ["Gwendolyn", "Uther", "Morgase"],
      question: { text: "What was King Arthur's mother's name?" },
      tags: ["mythology", "uk", "society_and_culture"],
      type: "text_choice",
      difficulty: "hard",
      regions: [],
      isNiche: false,
    },
    {
      category: "geography",
      id: "622a1c357cc59eab6f94ffa4",
      correctAnswer: "Cuba",
      incorrectAnswers: ["Jamaica", "Haiti", "Dominican Republic"],
      question: { text: "In Which Country Will You Find The Bay Of Pigs?" },
      tags: ["places", "geography"],
      type: "text_choice",
      difficulty: "medium",
      regions: [],
      isNiche: false,
    },
    {
      category: "society_and_culture",
      id: "64824eaa7778562fd76a9664",
      correctAnswer: "Oxford",
      incorrectAnswers: ["Cambridge", "Bristol", "London"],
      question: {
        text: "Which British city gives its name to a type of laced shoe as well as a shirting fabric?",
      },
      tags: ["fashion", "society_and_culture", "clothing", "cities", "uk"],
      type: "text_choice",
      difficulty: "medium",
      regions: [],
      isNiche: false,
    },
    {
      category: "arts_and_literature",
      id: "622a1c347cc59eab6f94f984",
      correctAnswer: "The Remains of the Day",
      incorrectAnswers: ["Post Office", "Heart of Darkness", "Lucky Jim"],
      question: { text: "Which book contains the character 'Stevens'?" },
      tags: ["film", "fictitious_characters", "arts_and_literature"],
      type: "text_choice",
      difficulty: "hard",
      regions: [],
      isNiche: false,
    },
    {
      category: "science",
      id: "622a1c377cc59eab6f950568",
      correctAnswer:
        "Statistics which illustrate the changing structure of human populations",
      incorrectAnswers: [
        "Anesthesia and anesthetics",
        "The age of the Earth",
        "Bacteria",
      ],
      question: { text: "What is Demography the study of?" },
      tags: ["words", "science"],
      type: "text_choice",
      difficulty: "medium",
      regions: [],
      isNiche: false,
    },
    {
      category: "film_and_tv",
      id: "62573f593d2f5c16bfb88330",
      correctAnswer:
        "A secretary checks into a remote motel run by a young man under the domination of his mother.",
      incorrectAnswers: [
        "The story of how the scandal of child molestation within the Boston Catholic church was uncovered.",
        "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler.",
        "When a heist goes wrong, the surviving criminals suspect that one of them is a police informant.",
      ],
      question: { text: "What is the plot of the movie Psycho?" },
      tags: ["film", "film_and_tv"],
      type: "text_choice",
      difficulty: "medium",
      regions: [],
      isNiche: false,
    },
    {
      category: "science",
      id: "622a1c377cc59eab6f950583",
      correctAnswer: "Bell ringing",
      incorrectAnswers: ["Diseases of the lungs", "Mushrooms", "Evolution"],
      question: { text: "What is campanology the study of?" },
      tags: ["words", "science"],
      type: "text_choice",
      difficulty: "hard",
      regions: [],
      isNiche: false,
    },
    {
      category: "history",
      id: "622a1c3d7cc59eab6f951c77",
      correctAnswer: "Trafalgar",
      incorrectAnswers: ["Waterloo", "Hastings", "Bosworth Field"],
      question: { text: "21 October 1805 Is The Date Of Which Famous Battle?" },
      tags: ["history"],
      type: "text_choice",
      difficulty: "hard",
      regions: [],
      isNiche: false,
    },
  ];

  return (
    <Stack alignItems="center" justifyContent="center">
      <Box
        sx={{
          width: "155vh",
          backgroundColor: "white",
          m: "10vh",
          boxShadow: 15,
          borderRadius: "5px",
        }}>
        <Box sx={{ m: "5vh" }}>
          <Typography variant="h5" align="center">
            Questions
          </Typography>
        </Box>
        <Box sx={{ m: "15vh" }}>
          {question.map((temp) => {
            let num = Math.floor(Math.random() * 4);
            let k = 0;
            return (
              <Box key={temp.id}>
                <Typography variant="body1">{temp.question.text}</Typography>
                <FormControl sx={{ ml: " 5vh" }}>
                  <RadioGroup
                    name={temp.incorrectAnswers}
                    arial-aria-labelledby="anwers">
                    {temp.incorrectAnswers.map((t) => {
                      if (k === num) {
                        k++;
                        return (
                          <>
                            <FormControlLabel
                              control={<Radio />}
                              label={temp.correctAnswer}
                              value={temp.correctAnswer}
                              key={temp.correctAnswer}
                            />
                            <FormControlLabel
                              control={<Radio />}
                              label={t}
                              value={t}
                              key={t}
                            />
                          </>
                        );
                      } else {
                        k++;
                        return (
                          <FormControlLabel
                            control={<Radio />}
                            label={t}
                            value={t}
                            key={t}
                          />
                        );
                      }
                    })}
                    {num > 2 && (
                      <FormControlLabel
                        control={<Radio />}
                        label={temp.correctAnswer}
                        value={temp.correctAnswer}
                        key={temp.correctAnswer}
                      />
                    )}
                  </RadioGroup>
                </FormControl>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Stack>
  );
};

export default Questions;
