import React, { useState } from "react";
import axios from "axios";
import Header from "../src/components/Header";
import SectionWithCarousel from "../src/components/Carousel/SectionWithCarousel";
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
  const { cocktailsFirst, cocktailsLast } = props;
  const [inputValue, changeInputValue] = useState("");
  const handleChange = (e) => changeInputValue(e.target.value);
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
        items={cocktailsFirst.drinks.filter((it, ind) => ind < 10)}
      />
      <SectionWithCarousel
        title="Latest hits"
        items={cocktailsLast.drinks.filter((it, ind) => ind < 10)}
      />
    </div>
  );
}

export async function getStaticProps() {
  const urlFirst = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
  const urlLast = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z";
  const { data: cocktailsFirst } = await axios.get(urlFirst);
  const { data: cocktailsLast } = await axios.get(urlLast);
  return {
    props: {
      cocktailsFirst,
      cocktailsLast,
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
