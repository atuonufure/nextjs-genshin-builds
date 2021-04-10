import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import CharacterInfo from "../components/CharacterInfo";
import styles from "../styles/characters.module.css";

const character = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div className={styles.container}>
      <Link
        href={{
          pathname: "/",
        }}
      >
        <a>
          <div>Назад</div>
        </a>
      </Link>
      <div>
        <CharacterInfo name={name} />
      </div>
    </div>
  );
};

export default character;
