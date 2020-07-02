import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  img: {
    width: "35%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
}));

const CocktailItem = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <Typography variant="h2">{props.title}</Typography>
      <img src={props.imgUrl} alt={props.title} className={classes.img} />
    </Paper>
  );
};

export default CocktailItem;
