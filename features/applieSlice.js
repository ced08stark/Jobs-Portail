import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentApplie: {
    jobID: null,
    consultantID: null
  },
};

export const applieSlice = createSlice({
  name: "applie",
  initialState,
  reducers: {
    setCurrentApplie: (state, action) => {
      state.currentApplie = action.payload;
    },
  },
});

export const { setCurrentApplie } = applieSlice.actions;

export default applieSlice.reducer;

export const selectCurrentApplie = (state) => state.applie.currentApplie;
