import React from "react";
import BuildType from "./BuildType";
import Artefacts from "./Artefacts";

const CharacterInfo = ({ name, data }) => {
  const character = data.find((item) => item.name === name);
  return (
    <div>
      <h1>{name}</h1>
      <div>{character.stars} ★</div>
      <div>Элемент: {character.element}</div>
      <div>Оружие: {character.weapon}</div>
      <div>-----</div>
      <div>Дополнительная характеристика оружия:</div>
      <div>
        {character.extra.map((item, key) => (
          <span key={key}>{item}; </span>
        ))}
      </div>
      <div>-----</div>
      <div>Комплект артефактов:</div>
      <BuildType buildType={character.build.type} />
      <h2>Бонусы артефатов:</h2>
      <Artefacts artefacts={character.build.specifications} />
    </div>
  );
};

export default CharacterInfo;
