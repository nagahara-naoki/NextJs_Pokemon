"use client";
import { useState } from "react";

import { AiOutlineInteraction } from "react-icons/ai";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "../redux/store/store";
import { updateState } from "../redux/slice/sliece";
import { POKEMON } from "../api/pokedex";
import DressChangeModal from "./DressChangeModal";
import { Dress, updateDress } from "../redux/slice/dressSlice";
import { colors } from "../types/colors";

export default function Header() {
  const [selectedValue, setSelectedValue] = useState("");
  const [radioValue, setRadioValue] = useState("");
  const [inputText, setInputText] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [selectColor, setSelectColor] = useState(0);
  const pokemon = useSelector((state: RootState) => state.poke);
  const dressColor: Dress = useSelector((state: RootState) => state.dress);
  const dispatch = useDispatch();
  dispatch(updateDress(colors[selectColor]));
  console.log(selectColor, "--------------");

  const target = [...POKEMON];
  const pressEnter = (e: any) => {
    if (e.key === "Enter") {
      serachPokemon();
    }
  };

  const replateString = (inputString: string): string => {
    // 正規表現でひらがなを検出して、それをカタカナに変換
    const convertedString = inputString.replace(
      /[\u3041-\u3096]/g,
      function (match) {
        const charCode = match.charCodeAt(0) + 0x60;
        return String.fromCharCode(charCode);
      }
    );
    return convertedString;
  };

  const handleInput = (e: any) => {
    setInputText(e.target.value);
    if (e.target.value === "") {
      dispatch(updateState(target));
    }
  };
  const handleSelectChange = (e: any) => {
    setSelectedValue(e.target.value);
  };
  const handleRadioCange = (e: any) => {
    setRadioValue(e.target.value);
  };
  const handleSort = () => {
    const sortRule = radioValue === "heigh" ? true : false;
    const target = [...pokemon];
    const result = target.sort((a, b) => {
      if (sortRule) return b.base[selectedValue] - a.base[selectedValue];
      else return a.base[selectedValue] - b.base[selectedValue];
    });
    dispatch(updateState(result));
  };

  const serachPokemon = () => {
    if (inputText == "") {
      dispatch(updateState(target));
    }
    const str = replateString(inputText);
    const result = target.filter((poke) => {
      return poke.name.japanese.includes(str);
    });
    dispatch(updateState(result));
  };
  const modalOpen = () => {
    document.body.style.overflow = "hidden";
    setIsModal(true);
  };

  return (
    <Provider store={store}>
      {isModal! && (
        <DressChangeModal
          setIsModal={setIsModal}
          isModal={isModal}
          setSelectColor={setSelectColor}
        />
      )}
      <div
        className={`p-3 flex items-center`}
        // className={`p-3 ${dressColor.hederColor} ${dressColor.textColor} flex items-center`}
      >
        <div className="flex items-center">
          <h1 className="">ポケモン図鑑</h1>
        </div>
        <div className="flex flex-1 justify-around">
          <div className="flex items-center">
            <div className="hover:bg-slate-400 p-2 rounded-sm cursor-pointer">
              <p onClick={modalOpen}>着せ替え</p>
            </div>
            <label className="">並び替え:</label>
            <select
              className="text-black rounded p-1 m-2"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="">選択してください</option>
              <option value="Attack">こうげき</option>
              <option value="Defense">ぼうぎょ</option>
              <option value="Speed">すばやさ</option>
              <option value="HP">HP</option>
            </select>
            <form>
              <label className="mr-1">
                <input
                  className="mr-1"
                  type="radio"
                  name="option"
                  value="heigh"
                  onChange={handleRadioCange}
                />
                高い
              </label>
              <label>
                <input
                  className="mr-1"
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
            <div>
              <input
                type="text"
                className="pl-2 pr-2 pt-1 pb-1 text-black"
                onChange={handleInput}
                onKeyDown={(e) => pressEnter(e)}
                placeholder="名前を入力してください"
              />
              <button
                onClick={serachPokemon}
                className="hover:bg-slate-400 p-2 rounded-sm cursor-pointer"
              >
                検索
              </button>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}
