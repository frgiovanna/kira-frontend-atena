import React from "react";
import PropTypes from "prop-types";

import { useRouter } from "next/router";
import { Typography } from "@mui/material";

import * as Styles from "./styles";

export default function TextBox(props) {
  const { push } = useRouter();

  const redirect = () => {
    push(props.link);
  };

  return (
    <Styles.Box onClick={props.link && redirect}>
      {props.icon}
      <Typography
        color="text.secondary"
        fontSize={12}
        lineHeight="13px"
        marginLeft="10px"
      >
        {props.message}
      </Typography>
    </Styles.Box>
  );
}

TextBox.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.element.isRequired,
  message: PropTypes.string.isRequired,
};
