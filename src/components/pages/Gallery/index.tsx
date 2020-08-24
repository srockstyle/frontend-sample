// フック
// https://ja.reactjs.org/docs/hooks-state.html
// https://ja.reactjs.org/docs/hooks-reference.html
import React, { useState, useEffect } from "react";

// 執筆者一覧はここで取得
import { GalleryTemplate } from "../../templates/Gallery";
import { fetchBookList } from "../../../service/ApiSample";

export const Gallery: React.FC = () => {
  const [books, setBooks] = useState([]);

  // 名前
  useEffect(() => {
    fetchBookList().then((res) => {
      // res.dataで中身が取得
      setBooks(res.data.books);
    });
  }, []);

  return (
    <>
      <GalleryTemplate books={books} />
    </>
  );
};
