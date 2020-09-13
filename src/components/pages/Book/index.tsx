// フック
// https://ja.reactjs.org/docs/hooks-state.html
// https://ja.reactjs.org/docs/hooks-reference.html
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// 執筆者一覧はここで取得
import { BookTemplate } from "../../templates/Book";
import { fetchBook, BookResponse } from "../../../service/ApiSample";

export const Book: React.FC = () => {
  const initialBook: BookResponse = {
    id: "",
    title: "",
    description: "",
    url: "",
    author_id: 0,
  };
  const [book, setBook] = useState(initialBook);
  const [loading, setLoading] = useState(false);

  const { id } = useParams<{ id: string }>();
  // APIリクエストはuseEffectで行うこと。
  // useEffectは無名関数。
  useEffect(() => {
    setLoading(true);
    if (id) {
      fetchBook(id).then((res) => {
        if (res.data) {
          setLoading(false);
          setBook(res.data.book);
        }
      });
    }
  }, [id]);
  if (loading) return <div>Loading...</div>;
  return (
    <>
      <BookTemplate book={book} />
    </>
  );
};
