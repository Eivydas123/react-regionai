import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { fetchCountries } from "../Actions/RootAction";
import { useDispatch, useSelector } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttons: {
    marginInline: theme.spacing(1),
  },
}));
export default function Header() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  return (
    <div>
      {loading && <LinearProgress color="secondary" />}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Countries
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
