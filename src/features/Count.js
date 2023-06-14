import { createSlice } from "@reduxjs/toolkit";

export const useSlice = createSlice({
  name: "count",
  initialState: { value: 0 },
  reducers: {
    sum: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { sum } = useSlice.actions;
export default useSlice.reducer;
