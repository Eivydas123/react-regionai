import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Box, IconButton, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
  media: {
    width: "100%",
    height: "600px",
    objectFit: "cover",
  },
  icon: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(1),
  },
}));
export default function Details() {
  const countries = useSelector((state) => state.countries);

  const history = useHistory();
  const { country } = useParams();
  const classes = useStyles();

  console.log(country);
  return (
    <div>
      <IconButton
        aria-label="delete"
        color="secondary"
        className={classes.icon}
        onClick={history.goBack}
      >
        <ArrowBackIcon />
      </IconButton>
      <Container maxWidth="lg" className={classes.root}>
        {countries
          .filter((item) => item.name === country)
          .map((item, index) => {
            console.log(item);
            return (
              <div key={index}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                >
                  <img className={classes.media} src={item.flag} alt="" />

                  <Typography variant="h3">{item.name}</Typography>
                  <Typography variant="body1" color="textSecondary">
                    Area: {item.area}
                  </Typography>
                </Box>
                <Container maxWidth="xs">
                  <Typography variant="h6">Languages:</Typography>

                  {item.languages.map((kalba, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      color="textSecondary"
                    >
                      <li> {kalba.name}</li>
                    </Typography>
                  ))}
                </Container>
              </div>
            );
          })}
      </Container>
    </div>
  );
}
