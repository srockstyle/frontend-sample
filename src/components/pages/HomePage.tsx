import React from "react";
import HomeTemplate from "../templates/HomeTemplate";

export type NewsMenu = {
  id: string;
  label: string;
};

export type NewsMenus = {
  newsMenus: NewsMenu[];
};

const HomePage: React.FC = () => {
  // これでも動く
  //const newsMenus: NewsMenus = [
  //    {id: '1', label: 'トップニュース'},  {id: '2', label: '速報'}
  //]

  // オブジェクトは基本キーをつける構造を意識すること
  const newsMenus: NewsMenus = {
    newsMenus: [
      { id: "1", label: "トップニュース" },
      { id: "2", label: "速報" },
    ],
  };

  return (
    <HomeTemplate newsContents={newsMenus}>
      <></>
    </HomeTemplate>
  );
};

export default HomePage;
