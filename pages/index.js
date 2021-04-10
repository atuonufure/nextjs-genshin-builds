import React from "react";
import CharacterItem from "../components/CharacterItem";
import styles from "../styles/index.module.css";

// временно
import data from "../public/db.json";

const arrayOfElements = ["Все элементы", "Анемо", "Крио", "Электро", "Гео", "Гидро", "Пиро"];

const arrayOfWeapons = ["Всё оружие", "Одноручный меч", "Двуручный меч", "Копье", "Катализатор", "Лук"];

export default function Home() {
  const [activeElement, setActiveElement] = React.useState("Все элементы");
  const [activeWeapon, setActiveWeapon] = React.useState("Всё оружие");

  return (
    <div className={styles.container}>
      <h1>Genshin Impact - сборки персонажей</h1>
      <nav className={styles.weaponBar}>
        {arrayOfElements.map((element, index) => {
          return (
            <div
              key={index}
              className={activeElement === element ? `${styles.element} ${styles.active}` : `${styles.element}`}
              onClick={() => setActiveElement(element)}
            >
              {element}
            </div>
          );
        })}
      </nav>
      <nav className={styles.weaponBar}>
        {arrayOfWeapons.map((weapon, index) => {
          return (
            <div
              key={index}
              className={activeWeapon === weapon ? `${styles.weapon} ${styles.active}` : `${styles.weapon}`}
              onClick={() => setActiveWeapon(weapon)}
            >
              {weapon}
            </div>
          );
        })}
      </nav>
      <main>
        {data.map((character, index) => {
          if (activeElement === "Все элементы" && activeWeapon === "Всё оружие") {
            return (
              <div key={index}>
                <CharacterItem character={character} />
              </div>
            );
          }
          if (activeElement === character.element && activeWeapon === "Всё оружие") {
            return <CharacterItem key={index} character={character} />;
          }
          if (activeElement === "Все элементы" && activeWeapon === character.weapon) {
            return <CharacterItem key={index} character={character} />;
          }
          if (activeElement === character.element && activeWeapon === character.weapon)
            return <CharacterItem key={index} character={character} />;
        })}
      </main>
    </div>
  );
}
