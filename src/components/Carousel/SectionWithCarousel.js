import SectionTitle from "./SectionTitle";
import MyCarousel from "./Carousel";

const SectionWithCarousel = (props) => {
  return (
    <div style={{ marginTop: "1em" }}>
      <SectionTitle title={props.title} />
      <MyCarousel items={props.items} deviceType={props.deviceType} />
    </div>
  );
};

export default SectionWithCarousel;
