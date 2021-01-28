import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  media: {
    height: 140,
  },
  typography: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
});

export default function Filtered({ filterBy }) {
  const classes = useStyles();
  const countries = useSelector((state) => state.countries);
  return (
    <div>
      <Box my={5}>
        <Grid container spacing={3}>
          {countries
            .filter((item) => {
              //console.log(item.region);
              if (filterBy === "All") {
                return true;
              }
              return item.region === filterBy;
            })
            .map((item, index) => {
              return (
                <Grid key={index} item sm={6} md={3} xs={12}>
                  <Card>
                    <CardActionArea>
                      <CardMedia className={classes.media} image={item.flag} />
                      <CardContent>
                        <Typography
                          className={classes.typography}
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Capital: {item.capital || "unknown"}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <div>
                        <Button
                          size="small"
                          color="primary"
                          component={Link}
                          to={item.name + "/details"}
                        >
                          Learn More
                        </Button>
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </div>
  );
}
