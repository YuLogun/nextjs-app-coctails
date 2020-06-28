import React from "react";
import axios from "axios";
import Header from "../src/components/Header";
import MyCarousel from "../src/components/Carousel";
import SectionWithCarousel from "../src/components/SectionWithCarousel";

export default function Home(props) {
  const { cocktails } = props;
  console.log(cocktails);
  return (
    <div>
      <Header />
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
