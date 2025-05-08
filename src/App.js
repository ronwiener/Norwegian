import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import GradientText from "./GradientText";

const RenderTime = ({ remainingTime }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const minutes = Math.floor(remainingTime / 60);
  const seconds = ("0" + (remainingTime % 60)).slice(-2);

  if (remainingTime === 0) {
    return (
      <div>
        <Typography
          style={{
            color: "red",
            fontSize: "2rem",
            fontWeight: "bold",
            letterSpacing: "0.1em",
          }}
        >
          BREATHE
        </Typography>
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          color: "#b00c22",
          fontSize: matchesSM ? "1.75rem" : "2rem",
          fontWeight: "bold",
          letterSpacing: "0.1em",
        }}
      >
        {remainingTime > 240 ? "RECOVER" : "WORK IT!!"}
      </div>
      <div
        style={{
          fontSize: matchesSM ? "1.95rem" : "2.75rem",
          fontWeight: "bold",
        }}
      >
        {minutes}:{seconds}
      </div>
    </div>
  );
};
const useStyles = makeStyles({
  bike: {
    marginTop: 0,
    backgroundImage: `url("https://res.cloudinary.com/ron7602/image/upload/o_79/v1636639431/bike.jpg")`,
    height: "100vh",
    textAlign: "center",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
});

function App(remainingTime) {
  const [key, setKey] = useState(0);
  const [play, setPlay] = useState(false);
  const [loopCount, setLoopCount] = useState(0);
  const theme = useTheme();
  const classes = useStyles();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  let One = [
    "One rep at a time",
    "Push on",
    "Fight the pain",
    "You are strong!",
    "You got this",
    "Don't go easy",
    "Tired? Do it anyway",
    "Ok, not so bad",
    "Workin' it 😬",
    "Breathe deep",
    "Easy? You're doing it wrong",
  ];
  const Quote1 = One[Math.floor(Math.random() * One.length)];

  let Two = [
    "The pain is only temporary",
    "That's 2, good job",
    "Keep it going!",
    "Hang in there",
    "Yes, keep it up",
    "Starting to sweat 😰",
    "Get what you give",
    "Make every sprint count!",
    "No excuses, just do it",
    "Stay tough",
    "It's hell, but keep going",
    "It's too soon to quit",
  ];
  const Quote2 = Two[Math.floor(Math.random() * Two.length)];

  let Three = [
    "You can do this",
    "No pain, no gain",
    "Hit your goal",
    "Hey warrior, keep going",
    "Stay tough",
    "Ride or die",
    "KEEP GOING!",
    "Get bold",
    "Dig down, Deep breaths",
    "Bring it",
    "Stay motivated",
    "Never give up",
    "Stay strong",

    "I think I can, I know I can",
  ];
  const Quote3 = Three[Math.floor(Math.random() * Three.length)];

  let Four = [
    "You are Amazing!",
    "YOU DID IT!",
    "Great Job",
    "No Mas, No Mas!",
    "Rest and Recover",
  ];
  const Quote4 = Four[Math.floor(Math.random() * Four.length)];

  const encouragement = (loopCount) => {
    if (loopCount === 1) {
      return Quote1;
    } else if (loopCount === 2) {
      return Quote2;
    } else if (loopCount === 3) {
      return Quote3;
    } else if (loopCount === 4) {
      return Quote4;
    } else return;
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column">
        <Grid item container className={classes.bike}>
          <Grid item container justifyContent="center" direction="row">
            <Typography
              style={{
                textAlign: matchesSM ? "center" : "center",
                paddingTop: matchesSM ? 10 : 14,
                fontSize: matchesSM ? 30 : 44,
                color: "darkblue",
              }}
            >
              The Norwegian
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            style={{ marginTop: matchesSM ? 0 : 30 }}
          >
            <Grid item container justifyContent="center">
              <CountdownCircleTimer
                //key={loopCount}
                key={key}
                isPlaying={play}
                size={matchesSM ? 190 : 260}
                trailColor={"#adada9"}
                trailStrokeWidth={0}
                strokeWidth={matchesSM ? 10 : 18}
                duration={420}
                initialRemainingTime={240}
                colors={[["#004777", 0.33], ["#07804b", 0.33], ["#A30000"]]}
                onComplete={() => [
                  true,
                  1100,
                  setLoopCount((loopCount) => loopCount + 1),
                ]}
              >
                <RenderTime />
              </CountdownCircleTimer>
            </Grid>

            <Grid
              item
              container
              justifyContent="center"
              style={{
                marginBottom: matchesSM ? 40 : 60,
                marginTop: matchesSM ? 10 : 25,
              }}
            >
              <Typography
                variant="h4"
                style={{
                  fontSize: matchesSM ? "1.35rem" : "2.5rem",
                  letterSpacing: "0.10rem",
                  fontWeight: "bold",
                  color: "#051293",
                  marginTop: matchesSM ? 90 : 30,
                  marginRight: matchesSM ? 15 : null,
                }}
              >
                Completed: {loopCount}
                <div>
                  <GradientText
                    colors={[
                      "#40ffaa",
                      "#4079ff",
                      "#40ffaa",
                      "#4079ff",
                      "#40ffaa",
                    ]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class"
                  >
                    <span>{encouragement(loopCount)}</span>
                  </GradientText>

                  {/*
                  <span style={{ color: "#FFFFFF" }}>
                    {encouragement(loopCount)}
                  </span>
                  */}
                </div>
              </Typography>
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              style={{
                marginTop: matchesSM ? 10 : 40,
                marginBottom: matchesSM ? 20 : 30,
              }}
            >
              <Button
                style={{
                  height: 35,
                  backgroundColor: "#07804b",
                  padding: 5,
                  alignItems: "center",
                  marginBottom: 5,
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "gray",
                  borderRadius: 5,
                  width: matchesSM ? 170 : 300,
                }}
                variant="contained"
                onClick={() => setPlay((play) => !play)}
              >
                <Typography
                  style={{
                    color: "white",
                    fontSize: matchesSM ? 12 : 16,
                    fontWeight: "bold",
                    textAlign: "center",
                    letterSpacing: 1.5,
                  }}
                >
                  Start/Stop Timer
                </Typography>
              </Button>
            </Grid>
            <Grid item container justifyContent="center">
              <Button
                style={{
                  height: 35,
                  backgroundColor: "#96082b",
                  padding: 5,
                  alignItems: "center",
                  marginBottom: 10,
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "grey",
                  borderRadius: 5,
                  width: matchesSM ? 170 : 300,
                }}
                variant="contained"
                onClick={() => setKey((prevKey) => prevKey + 1)}
              >
                <Typography
                  style={{
                    color: "white",
                    fontSize: matchesSM ? 12 : 16,
                    fontWeight: "bold",
                    textAlign: "center",
                    letterSpacing: 1.5,
                  }}
                >
                  Reset Timer
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
