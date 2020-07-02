import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "60%",

    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      alignItems: "flex-end",
      width: "53%",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "flex-end",
      width: "35%",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      alignItems: "flex-end",
      width: "30%",
    },
  },
  root: {
    width: "100%",
  },
}));

const CustomInput = (props) => {
  const { value, handleChange, placeholder, label } = props;
  const classes = useStyles();
  return (
    <form className={classes.container}>
      <TextField
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        label={label}
        className={classes.root}
      />
    </form>
  );
};

export default CustomInput;
