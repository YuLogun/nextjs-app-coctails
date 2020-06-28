import React from "react";
import SectionTitle from "./SectionTitle";
import MyCarousel from "./Carousel";

const SectionWithCarousel = (props) => {
  return (
    <div>
      <SectionTitle title={props.title} />
      <MyCarousel items={props.items} />
    </div>
  );
};

export default SectionWithCarousel;
