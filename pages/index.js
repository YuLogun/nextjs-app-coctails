import { useState } from "react";
import axios from "axios";
import MobileDetect from "mobile-detect";

import Head from "next/head";

import Header from "../src/components/Header";
import SectionWithCarousel from "../src/components/Carousel/SectionWithCarousel";
import CustomInput from "../src/components/CustomInput";
import MyLink from "../src/components/Link";

import { Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "#d400ff",
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const { cocktailsFirst, cocktailsLast, deviceType } = props;
  const [inputValue, changeInputValue] = useState("");
  const handleChange = (e) => changeInputValue(e.target.value);
  return (
    <>
      <Head>
        <title>Cocktails Love</title>
      </Head>
      <Box>
        <Header />
        <CustomInput
          placeholder="try Margarita"
          label="Looking for sth special?"
          value={inputValue}
          handleChange={handleChange}
          buttonTitle="Search"
        />
        <Button
          className={classes.button}
          component={MyLink}
          naked
          href="/cocktails/[cocktailId]"
          as={`/cocktails/${inputValue.toLowerCase()}`}
          variant="outlined"
          color="primary"
        >
          go cocktails
        </Button>
        <SectionWithCarousel
          title="Popular"
          items={cocktailsFirst.drinks.filter((it, ind) => ind < 10)}
          deviceType={deviceType}
        />
        <SectionWithCarousel
          title="Latest hits"
          items={cocktailsLast.drinks.filter((it, ind) => ind < 10)}
          deviceType={deviceType}
        />
      </Box>
    </>
  );
};

export default Home;

export async function getStaticProps({ req }) {
  const urlFirst = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
  const urlLast = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z";
  const { data: cocktailsFirst } = await axios.get(urlFirst);
  const { data: cocktailsLast } = await axios.get(urlLast);
  let userAgent;
  let deviceType;
  if (req) {
    userAgent = req.headers["user-agent"];
  }
  const md = new MobileDetect(userAgent);
  if (md.tablet()) {
    deviceType = "tablet";
  } else if (md.mobile()) {
    deviceType = "mobile";
  } else {
    deviceType = "desktop";
  }
  return {
    props: {
      cocktailsFirst,
      cocktailsLast,
      deviceType,
    },
  };
}
