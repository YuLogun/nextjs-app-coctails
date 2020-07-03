import React from "react";
import Carousel from "react-multi-carousel";
import CarouselItem from "./CarouselItem";
//import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    partialVisibilityGutter: 10,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
    partialVisibilityGutter: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    partialVisibilityGutter: 10,
  },
};

const MyCarousel = ({ items }) => {
  return (
    <Carousel
      responsive={responsive}
      infinite
      ssr
      slidesToSlide={1}
      draggable={false}
      partialVisible
      itemClass="image-item"
      removeArrowOnDeviceType={["mobile"]}
    >
      {items.map((it) => {
        return (
          <CarouselItem
            style={{ pading: "0.75em" }}
            key={it.idDrink}
            imageUrl={it.strDrinkThumb}
            imageAlt={it.strDrink}
            title={it.strDrink}
          />
        );
      })}
    </Carousel>
  );
};

export default MyCarousel;

{
  /* <div key={it.idDrink}>
            <img
              style={{ width: "100%", height: "auto" }}
              src={it.strDrinkThumb}
            />
            <h3>{it.strDrink}</h3>
          </div> */
}
