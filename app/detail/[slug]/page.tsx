"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Header from "@/app/components/Header";
import ImageItem from "@/app/components/ImageItem";

import { createPokemonType } from "@/app/types/transType";
import { useSelector } from "react-redux";

import { RootState } from "@/app/redux/store/store";

export default function Detail() {
  const PathName = usePathname();
  const path = PathName.split("/")[2];
  const id = Number(path.replace(/^0+/, ""));
  const pokemon = useSelector((state: RootState) => state.poke);

  let pokemonType = "";
  const select = pokemon.find((poke) => {
    if (poke.id == id) {
      pokemonType = createPokemonType(poke.type);
    }
    return poke.id !== undefined && id === poke.id;
  });

  return (
    <div>
      <Header></Header>
      <div className="w-full h-svh bg-yellow-500 flex items-center justify-center">
        <div className="absolute bottom-10">
          <Link
            href="/"
            className="p-2 px-40 bg-white rounded hover:opacity-70"
          >
            HOME
          </Link>
        </div>
        <div className="min-h-96">
          <div>
            <ImageItem
              isDetail={true}
              src={path}
              width={250}
              alt={"OK"}
              name={select?.name.japanese}
            />
          </div>
          <p className="text-center">タイプ：{pokemonType}</p>
          <p className="text-center">こうげき：{select?.base.Attack}</p>
          <p className="text-center">ぼうぎょ{select?.base.Defense}</p>
          <p className="text-center">スピード{select?.base.Speed}</p>
        </div>
      </div>
    </div>
  );
}
