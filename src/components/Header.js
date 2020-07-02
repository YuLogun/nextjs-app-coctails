import React from "react";

import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  headerTitle: {
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
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
    </>
  );
};

export default Header;
