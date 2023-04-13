import { createSlice } from "@reduxjs/toolkit";



const initialState ={
    currentJob: {
      id: null,
      title: null,
      role: null,
      experience: null,
      description: null,
      skill: null,
      certification: null,
      langue: null,
      isWorkTeam: null,
      contract: null,
      delay: null,
      workPreference: null,
      file: null,
      rate: null

    }
}


export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setCurrentJob: (state, action) => {
      state.currentJob = action.payload;
    },
  },
});


export const { setCurrentJob } = jobSlice.actions;

export default jobSlice.reducer;

export const selectCurrentJob = (state) => state.projet.currentJob;