import React, { useState } from "react";
import { useRouter } from "next/router";

import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Button } from "@material-ui/core";

import CocktailItem from "../../src/components/CocktailItem/CocktailItem";
import Header from "../../src/components/Header";

import MyLink from "../../src/components/Link";

const useStyles = makeStyles((theme) => ({
  greeting: {
    marginTop: "1.75em",
    paddingLeft: "0.5em",
  },
  cocktailItemContainer: {
    display: "flex",
    flexDirection: "column",
  },
  queryColor: {
    color: theme.palette.primary.main,
    fontStyle: "italic",
  },
}));

const CocktailPage = (props) => {
  const classes = useStyles();
  const router = useRouter();
  console.log("router", router);
  const [cocktailState, changeCocktail] = useState(props.cocktail.drinks);
  console.log("state", cocktailState);
  if (props.cocktail.drinks === null) {
    return (
      <>
        <h1>
          You seem to have very... singular tastes.
          <br />
          We don't serve{" "}
          <span className={classes.queryColor}>
            {router.query.cocktailId}
          </span>{" "}
          here.
        </h1>
        <span>
          We suggest you{" "}
          <Button component={MyLink} href="/" naked color="primary">
            go home
          </Button>
        </span>
      </>
    );
  }
  return (
    <Box>
      <Header />
      <Typography variant="h2" component="h1" className={classes.greeting}>
        Hi there,{" "}
        <span className={classes.queryColor}>{router.query.cocktailId}</span>{" "}
        lover! Look what we have
      </Typography>

      <div className={classes.cocktailItemContainer}>
        {cocktailState.map((cocktail) => {
          const ingredients = Object.keys(cocktail)
            .filter((it) => it.indexOf("strIngredient") !== -1)
            .map((it) => cocktail[it])
            .filter((it) => it !== null);
          const measures = Object.keys(cocktail)
            .filter((it) => it.indexOf("strMeas") !== -1)
            .map((it) => cocktail[it])
            .filter((it) => it !== null);
          return (
            <CocktailItem
              key={cocktail.idDrink}
              title={cocktail.strDrink}
              imgUrl={cocktail.strDrinkThumb}
              instructions={cocktail.strInstructions}
              alcoholic={cocktail.strAlcoholic}
              ingredients={ingredients}
              measures={measures}
            />
          );
        })}
      </div>
    </Box>
  );
};

export default CocktailPage;

export async function getServerSideProps({ params }) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params.cocktailId}`;
  const { data: cocktail } = await axios.get(url);
  return {
    props: {
      cocktail,
    },
  };
}
