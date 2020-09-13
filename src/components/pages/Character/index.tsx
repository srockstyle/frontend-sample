import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharacterTemplate } from "../../templates/Character";
import { fetchCharacter, CharacterResponse } from "../../../service/ApiSample";

export const Character: React.FC = () => {
  const initialCharacter: CharacterResponse = {
    id: "",
    title: "",
    description: "",
    catchphrase: "",
  };
  const [character, setCharacter] = useState(initialCharacter);
  const [loading, setLoading] = useState(false);

  const { id } = useParams<{ id: string }>();
  // APIリクエストはuseEffectで行うこと。
  // useEffectは無名関数。
  useEffect(() => {
    setLoading(true);
    if (id) {
      fetchCharacter(id).then((res) => {
        if (res.data) {
          setLoading(false);
          setCharacter(res.data.character);
        }
      });
    }
  }, [id]);
  if (loading) return <div>Loading...</div>;
  return (
    <>
      <CharacterTemplate character={character} />
    </>
  );
};
