import React, { useCallback, Fragment } from "react";
//import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import WebIcon from "@mui/icons-material/Web";
import CloseIcon from "@mui/icons-material/Close";
//import NotificationsIcon from "@mui/icons-material/Notifications";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SnackbarProvider } from "notistack";
import { Collapse, IconButton } from "@mui/material";
import ButtonClick from "./Componets/ButtonClick";
import { useSnackbar } from "notistack";

export default function MyForm(props) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleClickWithAction = useCallback(() => {
    enqueueSnackbar("Bienvenidos... afimpel.com", {
      variant: "success",
      preventDuplicate: true,
      action: (key) => (
        <Fragment>
          <ButtonClick
            color="inherit"
            icons={true}
            to="//github.com/afimpel"
            target="_blank"
          >
            <GitHubIcon />
          </ButtonClick>
          <IconButton color="inherit" onClick={() => closeSnackbar(key)}>
            <CloseIcon />
          </IconButton>
        </Fragment>
      ),
    });
  }, [enqueueSnackbar, closeSnackbar]);
  handleClickWithAction();
  return (
    <Fragment>
      <ButtonClick
        color="success"
        icons={true}
        to="//github.com/afimpel"
        target="_blank"
      >
        <GitHubIcon />
      </ButtonClick>

      <ButtonClick
        color="success"
        to="//afimpel.com"
        target="_blank"
        startIcon={<WebIcon />}
        variant="contained"
      >
        afimpel.com
      </ButtonClick>
    </Fragment>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider
        preventDuplicate
        dense={true}
        maxSnack={9}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        TransitionComponent={Collapse}
      >
        <MyForm />
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
