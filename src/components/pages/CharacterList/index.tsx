import React, { useState, useEffect } from "react";

// 執筆者一覧はここで取得
import { CharacterListTemplate } from "../../templates/CharacterList";
import { fetchCharacterList } from "../../../service/ApiSample";

export const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState([]);

  // 名前
  useEffect(() => {
    fetchCharacterList().then((res) => {
      // res.dataで中身が取得
      setCharacters(res.data.characters);
    });
  }, []);

  return (
    <>
      <CharacterListTemplate characters={characters} />;
    </>
  );
};
