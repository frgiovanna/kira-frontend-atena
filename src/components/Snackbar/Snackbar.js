/* eslint-disable @next/next/no-html-link-for-pages */
import * as React from "react";
import {
  Snackbar as MUISnackbar,
  SnackbarContent,
  IconButton,
} from "@mui/material/";
import CloseIcon from "@mui/icons-material/Close";

export default function Snackbar() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <MUISnackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={10000}
        onClose={handleClose}
        action={action}
      >
        <SnackbarContent
          style={{
            backgroundColor: "white",
            color: "grey",
            maxWidth: "400px",
          }}
          message={
            <>
              Parabéns! Você atualizou seu calendário e ganhou 50 pontos!
              <a
                href="/points"
                style={{
                  color: "#f62459",
                  textDecoration: "underline",
                  marginLeft: "4px",
                }}
              >
                Saiba como utilizar
              </a>
            </>
          }
        />
      </MUISnackbar>
    </div>
  );
}
