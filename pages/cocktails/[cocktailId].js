import React, { useState } from "react";
import { useRouter } from "next/router";

import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import MyLink from "../../src/components/Link";
import CocktailItem from "../../src/components/CocktailItem";

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
  console.log("props", props.cocktail);
  console.log("state", cocktailState);
  return (
    <>
      <h1>hello {router.query.cocktailId}</h1>
      <Button
        variant="contained"
        color="primary"
        component={MyLink}
        href="/"
        naked
      >
        GO HOME
      </Button>
      <div className={classes.container}>
        {cocktailState.map((cocktail) => (
          <CocktailItem
            key={cocktail.idDrink}
            title={cocktail.strDrink}
            imgUrl={cocktail.strDrinkThumb}
          />
        ))}
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
