import React from "react";
import HomeTemplate from "../templates/HomeTemplate";

export type NewsMenu = {
  id: number;
  key: string;
  date: string;
  title: string;
  discription: string;
  link: string;
};

export type NewsMenus = {
  newsMenus: NewsMenu[];
};

const HomePage: React.FC = () => {
  // これでも動く
  //  const newsMenus: NewsMenus = [
  //    { id: "1", label: "トップニュース" },
  //    { id: "2", label: "速報" },
  //  ];

  // オブジェクトは基本キーをつける構造を意識すること
  const newsMenus = [
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
  ];

  return (
    <HomeTemplate newsContents={newsMenus}>
      <></>
    </HomeTemplate>
  );
};

export default HomePage;
