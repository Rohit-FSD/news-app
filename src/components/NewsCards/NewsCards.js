import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";

import NewsCard from "../NewsCard/NewsCard";
import useStyles from "./styles.js";

const infoCards = [
  { color: "#F24968", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#3C5E73",
    title: "News by Categories",
    info:
      "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Sports news",
  },
  {
    color: "#F26444",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with CoronaVirus",
  },
  {
    color: "#F24444",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from BCC",
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography
                  style={{ fontFamily: "Roboto" }}
                  variant="h5"
                  component="h5"
                >
                  <strong>{infoCard.title}</strong>
                </Typography>
                {infoCard.info ? (
                  <Typography
                    style={{ fontFamily: "Poppins, sans-serif" }}
                    variant="h6"
                    component="h6"
                  >
                    <strong>{infoCard.title.split(" ")[2]}</strong>: <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  variant="h6"
                  component="h6"
                >
                  Try saying: <br />{" "}
                  <i>
                    {" "}
                    <strong> {infoCard.text}</strong>
                  </i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
