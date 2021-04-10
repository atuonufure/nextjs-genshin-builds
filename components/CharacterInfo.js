import React from "react";
import BuildType from "./BuildType";
// временно
import data from "../public/db.json";

const CharacterInfo = ({ name }) => {
  const character = data.find((item) => item.name === name);
  return (
    <div>
      <h1>{name}</h1>
      <div>{character.stars} ★</div>
      <div>Элемент: {character.element}</div>
      <div>Оружие: {character.weapon}</div>
      <div>-----</div>
      <div>Дополнительная характеристика оружия:</div>
      <div>{character.extra}</div>
      <div>-----</div>
      <div>Комплект артефактов:</div>
      <BuildType buildType={character.build.type} />
      <div>-----</div>
      <div>Бонусы артефатов:</div>
      <div>in the pipeline</div>
    </div>
  );
};

export default CharacterInfo;
