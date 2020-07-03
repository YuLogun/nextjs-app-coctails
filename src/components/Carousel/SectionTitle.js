import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const SectionTitle = (props) => {
  const { title } = props;
  const classes = makeStyles((theme) => ({}));
  return (
    <Typography variant="h2" component="h2">
      {title}
    </Typography>
  );
};

export default SectionTitle;
