import * as React from "react";
import PropTypes from "prop-types";

import { IconButton, Dialog, Typography, Link } from "@mui/material/";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";

import * as Styles from "./styles";

export default function RegisterDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={false} maxWidth="40px">
      <Styles.Content>
        <InfoIcon style={{ fontSize: 80 }} color="secondary" />
        <Typography variant="h6" marginBottom="8px">
          <Link
            style={{ textDecoration: "none" }}
            color="secondary"
            href="/register"
          >
            Complete seu cadastro!
          </Link>
        </Typography>
        <Typography
          variant="body2"
          style={{ width: 280 }}
          color="text.secondary"
        >
          Mantenha-se conectada com a Kira, saiba mais sobre seu ciclo e tenha
          Kira como sua melhor amiga.
        </Typography>
      </Styles.Content>
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </Dialog>
  );
}

RegisterDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
