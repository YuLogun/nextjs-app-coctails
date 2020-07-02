import React from "react";

import { Paper, Typography, Box } from "@material-ui/core";
import { useStyles } from "./CocktailItem.styles";

const CocktailItem = (props) => {
  const classes = useStyles();
  const {
    title,
    imgUrl,
    instructions,
    alcoholic,
    ingredients,
    measures,
  } = props;
  return (
    <Box className={classes.outerContainer}>
      <Typography variant="h2" gutterBottom color="primary">
        {props.title}
      </Typography>
      <Paper className={classes.gridContainer}>
        <img src={imgUrl} alt={title} className={classes.img} />
        <Box>
          <Typography variant="caption" color="primary">
            {alcoholic}
          </Typography>
          <Typography variant="body1">{instructions}</Typography>
          <Box className={classes.ingredientsContainer}>
            <div style={{ borderTop: "0.5px solid #d400ff" }}>
              {ingredients.map((it) => (
                <p>{it}</p>
              ))}
            </div>
            <div style={{ borderTop: "0.5px solid #d400ff" }}>
              {measures.map((it) => (
                <p>{it}</p>
              ))}
            </div>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default CocktailItem;
