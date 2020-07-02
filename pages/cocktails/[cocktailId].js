import React, { useState } from "react";
import { useRouter } from "next/router";

import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import CocktailItem from "../../src/components/CocktailItem/CocktailItem";
import Header from "../../src/components/Header";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
}));

const CocktailPage = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const [cocktailState, changeCocktail] = useState(props.cocktail.drinks);
  console.log("state", cocktailState);

  return (
    <>
      <Header />
      <Typography variant="h2" component="h1">
        Hi there, {router.query.cocktailId} lover! Look what we have
      </Typography>

      <div className={classes.container}>
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
    </>
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
