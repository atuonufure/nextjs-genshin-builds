import React from "react";
import BuildType from "./BuildType";
import Artefacts from "./Artefacts";

const CharacterInfo = ({ name, data }) => {
  const character = data.find((item) => item.name === name);
  return (
    <div>
      <h1>{name}</h1>
      <div>{character ? character.stars : null} ★</div>
      <div>Элемент: {character ? character.element : null}</div>
      <div>Оружие: {character ? character.weapon : null}</div>
      <div>-----</div>
      <div>Дополнительная характеристика оружия:</div>
      <div>
        {character ? character.extra.map((item, key) => <span key={key}>{item}; </span>) : null}
      </div>
      <div>-----</div>
      <div>Комплект артефактов:</div>
      <BuildType buildType={character ? character.build.type : null} />
      <h2>Бонусы артефатов:</h2>
      <Artefacts artefacts={character ? character.build.specifications : null} />
    </div>
  );
};

export default CharacterInfo;
