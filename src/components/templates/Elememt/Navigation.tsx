import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import Grid from '@material-ui/core/Grid'
import React from "react";

type HeaderNavItem = {
  label: string;
  link: string;
};

export const Navigation: React.FC = () => {
  // CSSを使う
  const classes = usesStyles();
  // 配列定義
  // 多分これAPIとかで引っ張ってくるんだろうな
  const items: HeaderNavItem[] = [
    { label: "HOME", link: "/" },
    { label: "NEWS", link: "/overview" },
    { label: "Character", link: "/authors" },
    { label: "System", link: "/reguration" },
    { label: "Gallery", link: "/applicationform" },
    { label: "Form", link: "/form" },
  ];
  // classNameでclassを指定
  return (
    <>
      <Box height="10vh" display="flex" flexDirection="column">
        <Typography align="center">
          {items.map((item: HeaderNavItem) => (
            <Link key={item.link} to={item.link} className={classes.link}>
              {item.label}
            </Link>
          ))}
        </Typography>
      </Box>
    </>
  );
};

// CSSを書く
const usesStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "#333333",
    margin: "10pt",
  },
}));
