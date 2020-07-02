import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  outerContainer: {
    padding: "1em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1em",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
    },
    width: "80%",
  },
  ingredientsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    marginTop: "1em",
  },
  img: {
    width: "65%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    borderRadius: "5px",
    justifySelf: "center",
  },
}));
