import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import React from 'react';

export const Copyright: React.FC = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        {new Date().getFullYear()}
        {"."}
        <Link color="inherit" to="/">
            by NieR：Automata Anthology
        </Link>{" "}
      </Typography>
    );
  };
export default Copyright;