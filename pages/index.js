import React from "react";
import Character from "../components/Character";
import styles from "../styles/Home.module.css";

const arrayOfElements = ["Все элементы", "Анемо", "Крио", "Электро", "Гео", "Гидро", "Пиро"];

const arrayOfWeapons = ["Всё оружие", "Одноручный меч", "Двуручный меч", "Копье", "Катализатор", "Лук"];

const characters = [
  { id: 0, name: "Гань Юй", element: "Крио", weapon: "Лук" },
  { id: 1, name: "Аяка", element: "Крио", weapon: "Одноручный меч" },
  { id: 2, name: "Фишль", element: "Электро", weapon: "Лук" },
];

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
        {characters.map((character, index) => {
          if (activeElement === "Все элементы" && activeWeapon === "Всё оружие") {
            return (
              <div key={index} onClick={() => console.log("test")}>
                <Character character={character} />
              </div>
            );
          }
          if (activeElement === character.element && activeWeapon === "Всё оружие") {
            return <Character key={index} character={character} />;
          }
          if (activeElement === "Все элементы" && activeWeapon === character.weapon) {
            return <Character key={index} character={character} />;
          }
          if (activeElement === character.element && activeWeapon === character.weapon)
            return <Character key={index} character={character} />;
        })}
      </main>
    </div>
  );
}
