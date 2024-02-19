import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "../slice/sliece";
import { dressSlice } from "../slice/dressSlice";

export const store = configureStore({
  reducer: {
    poke: pokemonSlice.reducer,
    dress: dressSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
