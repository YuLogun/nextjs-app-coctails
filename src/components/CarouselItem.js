import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.common.background,
    padding: "0 0.5em",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  title: {
    color: theme.palette.primary.main,
  },
  img: {
    width: "100%",
  },
}));

const CarouselItem = (props) => {
  const { title, imageUrl, imageAlt } = props;
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <img src={imageUrl} alt={imageAlt} className={classes.img} />
        <Typography variant="subtitle1" className={classes.title}>
          {title}
        </Typography>
      </div>
    </>
  );
};

export default CarouselItem;
