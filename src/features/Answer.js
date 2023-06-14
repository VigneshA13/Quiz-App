import { createSlice } from "@reduxjs/toolkit";
let ans = [];
let i = 0;
export const useSlice = createSlice({
  name: "answer",
  initialState: { value: { answers: ans, index: i } },
  reducers: {
    correctAnswers: (state, action) => {
      state.value.answers.push(action.payload);
    },
    changeAnswer: (state, action) => {
      state.value.answers[state.value.index] = action.payload;
    },
    changeIndex: (state, action) => {
      state.value.index = action.payload;
    },
    clearAnswer: (state) => {
      state.value.answers = ans;
      state.value.index = i;
    },
  },
});
export const { correctAnswers, changeAnswer, changeIndex, clearAnswer } =
  useSlice.actions;
export default useSlice.reducer;
