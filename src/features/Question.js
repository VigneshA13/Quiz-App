import { createSlice } from "@reduxjs/toolkit";
import API from "../components/API";

export const useSlice = createSlice({
  name: "question",
  initialState: { value: API },
  reducers: {
    quest: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default useSlice.reducer;
