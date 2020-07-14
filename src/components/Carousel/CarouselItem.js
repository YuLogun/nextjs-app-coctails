import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

import MyLink from "../Link";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.common.background,
    padding: "0 0.5em",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  link: {
    textDecoration: "none",
  },
  title: {
    color: theme.palette.primary.main,
  },
  img: {
    width: "100%",
  },
}));

const CarouselItem = (props) => {
  const { title, imageUrl, imageAlt } = props;
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box
        className={classes.link}
        component={MyLink}
        naked
        href="/cocktails/[cocktailId]"
        as={`cocktails/${title.toLowerCase()}`}
      >
        <img src={imageUrl} alt={imageAlt} className={classes.img} />
        <Typography variant="subtitle1" className={classes.title}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default CarouselItem;
