import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentProjet: null, 
};

export const projetSlice = createSlice({
  name: "projet",
  initialState,
  reducers: {
    setCurrentProjet: (state, action) =>{
        state.currentProjet = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentProjet } = projetSlice.actions;

export default projetSlice.reducer;

export const selectCurrentProjet =(state)=> state.projet.currentProjet;

