import React from "react";
import SectionTitle from "./SectionTitle";
import MyCarousel from "./Carousel";

const SectionWithCarousel = (props) => {
  return (
    <div style={{ marginTop: "1em" }}>
      <SectionTitle title={props.title} />
      <MyCarousel items={props.items} />
    </div>
  );
};

export default SectionWithCarousel;