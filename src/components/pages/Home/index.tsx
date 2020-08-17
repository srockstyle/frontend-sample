import React from "react";
import { HomeTemplate } from "../../templates/Home";

export type NewsMenu = {
  id: number;
  key: string;
  date: string;
  title: string;
  discription: string;
  link: string;
};

export type NewsType = {
  newsMenus: NewsMenu[];
};
export const Home: React.FC = () => {
  const news: NewsType = {
    newsMenus: [
      {
        id: 1,
        key: "1",
        date: "20200402",
        title: "サイトオープン",
        discription: "公式サイトを起動",
        link: "",
      },
      {
        id: 2,
        key: "2",
        date: "20200402",
        title: "サイト更新1",
        discription: "システム情報を追加。",
        link: "",
      },
      {
        id: 3,
        key: "3",
        date: "20200402",
        title: "サイト更新2",
        discription: "キャラクター第一弾を追加",
        link: "",
      },
      {
        id: 4,
        key: "4",
        date: "20200402",
        title: "サイト更新3",
        discription: "キャラクター第二弾を追加",
        link: "",
      },
    ],
  };

  // JSONの構造としてはこういう↓のを想定してる
  // news.newsMenus[0].id;
  // このnewsのnewsMenus配列が、HomeTemplateコンポーネント以下で必要になるので
  // 一旦、以下のようにしてnewsのPropsで値を渡してあげてる

  return (
    <HomeTemplate news={news}>
      <></>
    </HomeTemplate>
  );
};
