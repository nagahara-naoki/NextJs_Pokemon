"use client";
import { useState } from "react";
import { POKEMON } from "../api/pokedex";
import { AiOutlineInteraction } from "react-icons/ai";

export default function Header() {
  const [selectedValue, setSelectedValue] = useState("");
  const [radioValue, setRadioValue] = useState("");
  const pokemon = POKEMON;

  const handleSelectChange = (e: any) => {
    setSelectedValue(e.target.value);
  };
  const handleRadioCange = (e: any) => {
    setRadioValue(e.target.value);
  };
  const handleSort = () => {
    const sortRule = radioValue === "heigh" ? true : false;
    const result = pokemon.sort((a, b) => {
      if (sortRule) return b.base[selectedValue] - a.base[selectedValue];
      else return a.base[selectedValue] - b.base[selectedValue];
    });
  };

  return (
    <div className="p-3 bg-slate-600 text-white">
      <h1>ポケモン図鑑</h1>
      <ul className="flex justify-around">
        <li className="hover:bg-slate-400 p-2 rounded-sm cursor-pointer">
          <p>初期化</p>
        </li>
        <li className="hover:bg-slate-400 p-2 rounded-sm cursor-pointer">
          <p>ポケモン一覧</p>
        </li>
        <li className="hover:bg-slate-400 p-2 rounded-sm cursor-pointer">
          <p>アイテム一覧</p>
        </li>
        <li className="hover:bg-slate-400 p-2 rounded-sm cursor-pointer">
          <p>着せ替え</p>
        </li>
        <li>
          <input type="text" />
          <button className="hover:bg-slate-400 p-2 rounded-sm cursor-pointer">
            検索
          </button>
        </li>
        <li className="flex items-center">
          <label className="">並び替え:</label>
          <select
            className="text-black rounded p-1 m-2"
            value={selectedValue}
            onChange={handleSelectChange}
          >
            <option value="power">HP</option>
            <option value="Attack">こうげき</option>
            <option value="Defense">ぼうぎょ</option>
            <option value="Speed">すばやさ</option>
          </select>
          <form>
            <label className="mr-1">
              <input
                type="radio"
                name="option"
                value="heigh"
                onChange={handleRadioCange}
              />
              高い
            </label>
            <label>
              <input
                type="radio"
                name="option"
                value="row"
                onChange={handleRadioCange}
              />
              低い
            </label>
          </form>
          <div className="m-1 flex items-center">
            <button onClick={handleSort}>
              <AiOutlineInteraction className="size-6" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
