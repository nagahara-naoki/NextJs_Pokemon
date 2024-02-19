import { createSlice } from "@reduxjs/toolkit";
import { POKEMON, PokemonType } from "../../api/pokedex";
import { POKEMONAPI } from "../../api/pokemonAPI";
const initialState: PokemonType[] = POKEMONAPI;

export const pokemonSlice = createSlice({
  name: "poke",
  initialState,
  reducers: {
    //ポケモンの初期値
    getPokemon: () => {
      return POKEMON;
    },

    //変更されたポケモンの値
    updateState: (state, actions) => {
      return actions.payload;
    },
  },
});

export const { getPokemon, updateState } = pokemonSlice.actions;
