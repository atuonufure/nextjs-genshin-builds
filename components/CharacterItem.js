import React from "react";
import Link from "next/link";

import styles from "../styles/CharacterInfo.module.css";

const CharacterItem = ({character}) => {
  return (
    <Link
      href={{
        pathname: "/character",
        query: {name: character.name},
      }}
    >
      <a>
        <div>{character.name}</div>
      </a>
    </Link>
  );
};

export default CharacterItem;
