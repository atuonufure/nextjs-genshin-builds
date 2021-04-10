import React from "react";
import Link from "next/link";

const CharacterItem = ({ character }) => {
  return (
    <Link
      href={{
        pathname: "/character",
        query: { name: character.name },
      }}
    >
      <a>
        <div>{character.name}</div>
      </a>
    </Link>
  );
};

export default CharacterItem;
