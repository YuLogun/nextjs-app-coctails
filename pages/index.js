import React, { useState } from "react";
import axios from "axios";
import Header from "../src/components/Header";
import SectionWithCarousel from "../src/components/SectionWithCarousel";
import CustomInput from "../src/components/CustomInput";

import Link from "next/link";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import MyLink from "../src/components/Link";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "#d400ff",
  },
}));

export default function Home(props) {
  const classes = useStyles();
  const { cocktails } = props;
  const [inputValue, changeInputValue] = useState("");
  const handleChange = (e) => changeInputValue(e.target.value);
  console.log("state", inputValue);
  console.log(cocktails.drinks[0].idDrink);
  return (
    <div>
      <Header />
      <CustomInput
        placeholder="try Margarita"
        label="Looking for sth special?"
        value={inputValue}
        handleChange={handleChange}
        buttonTitle="Search"
      />
      <Link
        href="/cocktails/[cocktailId]"
        as={`/cocktails/${inputValue.toLowerCase()}`}
        passHref
      >
        <Button
          className={classes.button}
          component={MyLink}
          variant="outlined"
          color="primary"
        >
          go cocktails
        </Button>
      </Link>
      <SectionWithCarousel
        title="Popular"
        items={cocktails.drinks.filter((it, ind) => ind < 10)}
      />
      <SectionWithCarousel
        title="Latest hits"
        items={cocktails.drinks.filter((it, ind) => ind < 10)}
      />
    </div>
  );
}

export async function getStaticProps() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c";
  const { data: cocktails } = await axios.get(url);
  return {
    props: {
      cocktails,
    },
  };
}

/* import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>*/
