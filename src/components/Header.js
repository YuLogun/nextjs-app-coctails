import React from "react";

import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "1.5em 0",
    backgroundColor: theme.palette.common.background,
    position: "sticky",
    top: "0",
    boxShadow: "1px 1px 20px #d400ff",
  },
  headerTitle: {
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Link href="/" passHref>
        <Typography
          variant="h1"
          component="h2"
          color="primary"
          className={classes.headerTitle}
        >
          Cocktails - love
        </Typography>
      </Link>
    </Box>
  );
};

export default Header;
