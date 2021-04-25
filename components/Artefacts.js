import React from "react";

const Artefacts = ({ artefacts }) => {
  const specifications = [];
  const type = [
    "Цветок жизни",
    "Перо смерти",
    "Пески времени",
    "Кубок пространства",
    "Корона разума",
  ];
  for (let key in artefacts) {
    specifications.push([key, artefacts[key].map((item) => item)]);
  }
  return (
    <div>
      {specifications.map((item, key) => {
        const stats = [...item];
        return (
          <div>
            <h4>{type[key]}</h4>
            <div>Основные характеристики:</div>
            <div>{stats[0]};</div>
            <div>Дополнительные характеристики:</div>
            <div>
              {stats[1].map((item) => (
                <div>{item}; </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Artefacts;
