import { createSlice } from "@reduxjs/toolkit";

export interface Dress {
  hederColor: string;
  textColor: string;
}

const initialState: Dress = {
  hederColor: "bg-gray-200",
  textColor: "text-white-200",
};

export const dressSlice = createSlice({
  name: "dress",
  initialState,
  reducers: {
    getDress: () => {
      return initialState;
    },
    updateDress: (state, action) => {
      return action.payload;
    },
  },
});

export const { getDress, updateDress } = dressSlice.actions;
