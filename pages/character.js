import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import CharacterInfo from "../components/CharacterInfo";
import styles from "../styles/character.module.css";

const character = ({ data }) => {
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
        <CharacterInfo name={name} data={data} />
      </div>
    </div>
  );
};

export default character;
