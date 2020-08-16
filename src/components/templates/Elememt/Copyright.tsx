import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import React from "react";

export const Copyright: React.FC = () => {
  const classes = usesStyles();
  return (
    <Box height="10vh" display="flex" flexDirection="column">
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        {new Date().getFullYear()}
        {"."}
        <Link color="inherit" to="/" className={classes.link}>
          by ClossFire:Thousand
        </Link>{" "}
      </Typography>
    </Box>
  );
};
const usesStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "#666666",
    margin: "5pt",
  },
}));

export default Copyright;
