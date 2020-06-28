import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const Header = () => (
  <Box>
    <Typography variant="h1" component="h2" color="primary">
      Cocktails - love
    </Typography>
  </Box>
);

export default Header;
