import React from "react";
import PropTypes from "prop-types";

import { Typography } from "@mui/material";
import * as Styles from "./styles";

export default function Card(props) {
  return (
    <Styles.Card secondary={props.secondary}>
      <Styles.TitleWrapper>
        {props.icon}
        <Typography variant="h6" marginLeft="8px">
          {props.title}
        </Typography>
      </Styles.TitleWrapper>
      <Typography paddingY="16px" variant="body2" fontSize={12}>
        {props.description}
      </Typography>

      <Styles.Button secondary={props.secondary} href={props.link}>
        {props.label}
      </Styles.Button>

      {props.footer && (
        <Styles.Footer>
          <Styles.Item>
            <Styles.FooterTitle>{props.footer.firstTitle}</Styles.FooterTitle>
            <Typography
              fontSize={16}
              color={props.secondary ? "secondary" : "primary"}
            >
              {props.footer.firstContent}
            </Typography>
          </Styles.Item>
          <Styles.Item>
            <Styles.FooterTitle>{props.footer.secondTitle}</Styles.FooterTitle>
            <Typography
              fontSize={16}
              color={props.secondary ? "secondary" : "primary"}
            >
              {props.footer.secondContent}
            </Typography>
          </Styles.Item>
        </Styles.Footer>
      )}
    </Styles.Card>
  );
}

Card.propTypes = {
  secondary: PropTypes.bool,
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  footer: {
    firstTitle: PropTypes.string,
    firstContent: PropTypes.string,
    secondTitle: PropTypes.string,
    secondContent: PropTypes.string,
  },
};
