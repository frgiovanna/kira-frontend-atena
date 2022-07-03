import React from "react";
import PropTypes from "prop-types";

import { Typography } from "@mui/material";
import * as Styles from "./styles";
import { useRouter } from "next/router";

export default function Card(props) {
  const { push } = useRouter();

  const handleRedirect = () => {
    push(props.link);
  };

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

      <Styles.Button secondary={props.secondary} onClick={handleRedirect}>
        {props.label}
      </Styles.Button>

      {props.footer && (
        <Styles.Footer>
          <Styles.Item>
            <Styles.FooterTitle color="text.secondary">
              {props.footer.firstTitle}
            </Styles.FooterTitle>
            <Typography
              fontSize={16}
              color={props.secondary ? "secondary" : "primary"}
            >
              {props.footer.firstContent}
            </Typography>
          </Styles.Item>
          {props.footer.secondContent && (
            <Styles.Item>
              <Styles.FooterTitle color="text.secondary">
                {props.footer.secondTitle}
              </Styles.FooterTitle>
              <Typography
                fontSize={16}
                color={props.secondary ? "secondary" : "primary"}
              >
                {props.footer.secondContent}
              </Typography>
            </Styles.Item>
          )}
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
