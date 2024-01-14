'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { POKEMON } from '@/app/api/pokedex';
import Header from '@/app/components/Header';
import ImageItem from '@/app/components/ImageItem';
import { PokemonType } from '@/app/types/Pokemon';
import { createPokemonType } from '@/app/types/transType';

export default function Detail() {
  const PathName = usePathname();
  const path = PathName.split('/')[2];
  const PokemonList = POKEMON;
  const id = Number(path.replace(/^0+/, ''));
  let select: PokemonType | undefined = {
    id: 0,
    name: {
      english: 'string',
      japanese: 'string',
      chinese: 'string',
      french: 'string',
    },
    type: [''],
    base: {
      HP: 0,
      Attack: 0,
      Defense: 0,
      'Sp. Attack': 0,
      'Sp. Defense': 0,
      Speed: 0,
    },
  };
  let pokemonType = '';
  select = PokemonList.find((poke) => {
    if (poke.id == id) {
      pokemonType = createPokemonType(poke.type);
    }
    return poke.id !== undefined && id === poke.id;
  });

  return (
    <div>
      <Header></Header>
      <div className="w-full h-[calc(100vh-100px)] bg-yellow-500 flex items-center justify-center">
        <div className="absolute bottom-10">
          <Link href="/" className="p-2 px-40 bg-white rounded hover:opacity-70">
            HOME
          </Link>
        </div>
        <div className="min-h-96">
          <div>
            <ImageItem isDetail={true} src={path} width={250} alt="ok" name={select?.name.japanese} />
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
