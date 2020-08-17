import { makeStyles } from "@material-ui/core";
// import { GridSpacing } from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import React from "react";

// 画像は一つ一つimportが必要
import top from "../../images/top.jpg";

import { Header } from "../Elememt/shared/Header";
import { Copyright } from "../Elememt/shared/Copyright";
import { Navigation } from "../Elememt/shared/Navigation";
import { News } from "../Elememt/News/News";

import { NewsType } from "../../pages/Home";

type Props = {
  news: NewsType;
};

export const HomeTemplate: React.FC<Props> = ({ news }) => {
  //const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();

  return (
    <>
      <Header />
      <Navigation />
      <Box height="100vh" display="flex" flexDirection="column">
        <img src={top} width="100%" alt="top" />
      </Box>
      <News newsMenus={news.newsMenus} />
      <Copyright />
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
