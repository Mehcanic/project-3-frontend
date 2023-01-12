import { Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <HashLink color="inherit" to="/#home" smooth>
        KLEUR
      </HashLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright