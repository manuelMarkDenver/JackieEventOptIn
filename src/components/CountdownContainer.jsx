import { useEffect, useState } from "react";
import { Box, Typography, Card, Paper } from "@mui/material";

const CountdownContainer = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();

    const difference = +new Date(`09/30/${year}`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        // seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <Paper
        elevation={12}
        sx={{
          width: "10em",
          paddingTop: "5em",
          paddingBottom: "5em",
          backgroundColor: "Teal",
          color: "white",
        }}
      >
        <Box>
          <Typography
            component="span"
            sx={{
              textAlign: "center",
              width: "100%",
              fontSize: "2.5em",
              marginBottom: "1em",
            }}
          >
            {timeLeft[interval]}
          </Typography>
        </Box>
        <Box component="span">
          <Typography
            component="span"
            sx={{
              textAlign: "center",
              width: "100%",
              fontSize: "1.5em",
              marginBottom: "1em",
            }}
          >
            {interval}
          </Typography>
        </Box>

        {/* <Typography
          component="span"
          sx={{
            textAlign: "center",
            width: "100%",
            fontSize: "2em",
          }}
        >
          {timeLeft[interval] < 10
            ? ` 0${timeLeft[interval]} ${interval} `
            : ` ${timeLeft[interval]} ${interval} `}
        </Typography> */}
      </Paper>
    );
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        width: "100%",
        textAlign: "center",
        marginBottom: "30px",
      }}
    >
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </Box>
  );
};

export default CountdownContainer;
