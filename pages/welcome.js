import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../src/components/Header";

export default function Home(props) {
  const { cocktails } = props;
  console.log(cocktails);
  return (
    <div>
      <Header />
      {cocktails.drinks.map((it) => (
        <h1 key={it.idDrink}>{it.strDrink}</h1>
      ))}
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
