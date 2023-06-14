import { createSlice } from "@reduxjs/toolkit";

let name = "";
export const useSlice = createSlice({
  name: "user",
  initialState: { value: name },
  reducers: {
    insert: (state, action) => {
      state.value = action.payload;
    },
    clearUser: (state) => {
      state.value = name;
    },
  },
});
export const { insert, clearUser } = useSlice.actions;
export default useSlice.reducer;
