"use client";

import Link from "next/link";
import React, { useEffect, useReducer } from "react";

import { POKEMON, PokemonType } from "../api/pokedex";
import { createImageColor } from "../types/transType";
import ImageItem from "./ImageItem";

const createImageSrc = (src: number): string => {
  const numStr = Math.abs(src).toString();
  const char = String(src);
  let result = "";

  if (numStr.length == 1) result = "00" + char;
  if (numStr.length == 2) result = "0" + char;
  if (numStr.length == 3) result = char;
  return result;
};

export default function ImageList() {
  // export default function ImageList(props: PokemonType[]) {
  const PokemonList: PokemonType[] = POKEMON;

  useEffect(() => {}, []);

  return (
    <div className="flex w-full flex-wrap">
      {PokemonList.map((pokemon: PokemonType) => {
        const srcString = createImageSrc(pokemon.id);
        const rgbColor = createImageColor(pokemon.type);

        return (
          <Link href={`/detail/${srcString}`} key={pokemon.id}>
            <div
              className="m-2 rounded-md cursor-pointer transition duration-100 ease-in-out transform hover:scale-105 hover:shadow-lg"
              style={{ background: rgbColor }}
            >
              <ImageItem
                isDetail={false}
                src={srcString}
                alt="ok"
                name={pokemon.name.japanese}
                width={86}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
