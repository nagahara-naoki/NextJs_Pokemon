export const createImageColor = (type: string[]): string => {
  let resultColor = '';
  if (type[0] == 'Normal') resultColor = '#ffa8a7';
  if (type[0] == 'Electric') resultColor = '#dede22';
  if (type[0] == 'Fire') resultColor = '#e13c3c';
  if (type[0] == 'Water') resultColor = '#5656e1';
  if (type[0] == 'Bug') resultColor = '#70ec70';
  if (type[0] == 'Grass') resultColor = '#23e623';
  if (type[0] == 'Ice') resultColor = '#ff96d9';
  if (type[0] == 'Fighting') resultColor = '#ffc22e';
  if (type[0] == 'Poison') resultColor = '#993999';
  if (type[0] == 'Flying') resultColor = '#ffa98f';
  if (type[0] == 'Psychic') resultColor = '#fff955';
  if (type[0] == 'Rock') resultColor = '#ffb6a1';
  if (type[0] == 'Ghost') resultColor = '#ff7357';
  if (type[0] == 'Rock') resultColor = '#ffb6a1';
  if (type[0] == 'Dragon') resultColor = '#ff6f35';
  if (type[0] == 'Dark') resultColor = '#ff7057';
  if (type[0] == 'Steel') resultColor = '#ffb7b7';
  if (type[0] == 'Fairy') resultColor = '#ffd685';
  if (type[0] == 'Ground') resultColor = '#ffe2bf';
  return resultColor;
};

export const createPokemonType = (type: string[]): string => {
  let resultType = '';
  if (type[0] == 'Normal') resultType = 'ノーマル';
  if (type[0] == 'Electric') resultType = 'でんき';
  if (type[0] == 'Fire') resultType = 'ほのお';
  if (type[0] == 'Water') resultType = 'みず';
  if (type[0] == 'Bug') resultType = 'むし';
  if (type[0] == 'Grass') resultType = 'くさ';
  if (type[0] == 'Ice') resultType = 'こおり';
  if (type[0] == 'Fighting') resultType = 'かくとう';
  if (type[0] == 'Poison') resultType = 'どく';
  if (type[0] == 'Flying') resultType = 'ひこう';
  if (type[0] == 'Psychic') resultType = 'エスパー';
  if (type[0] == 'Rock') resultType = 'いわ';
  if (type[0] == 'Ghost') resultType = 'ゴースト';
  if (type[0] == 'Dragon') resultType = 'ドラゴン';
  if (type[0] == 'Dark') resultType = 'あく';
  if (type[0] == 'Steel') resultType = 'はがね';
  if (type[0] == 'Fairy') resultType = 'フェアリー';
  if (type[0] == 'Ground') resultType = 'じめん';

  return resultType;
};
