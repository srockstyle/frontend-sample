import axios from "axios";

// パラメーター型定義
type BookParams = {
  book_id: number;
};

type AuthorParams = {
  author_id: number;
};

type NewsParams = {
  news_id: number;
};

// 戻り値型定義
export type BookResponse = {
  id: string;
  title: string;
  description: string;
  url: string;
  author_id: number;
};

export type AuthorResponse = {
  first_name: string;
  last_name: string;
};

// HTTP Client axiosがメジャー
const httpClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
  },
});

export function fetchBookList() {
  return httpClient.get("/v1/books");
  // headerとかはこの中に書いてく
  // {
  //     headers: {
  //        Authorization: `Token token=${apiToken}`,
  //     }
  // }
}

export function fetchBook(bookId: string) {
  // この中にこんな感じで認証
  // const apiToken = localStorage.getItem('apiKey')
  return httpClient.get(`/v1/books/${bookId}`);
  // headerとかはこの中に書いてく
  // {
  //     headers: {
  //        Authorization: `Token token=${apiToken}`,
  //     }
  // }
}
