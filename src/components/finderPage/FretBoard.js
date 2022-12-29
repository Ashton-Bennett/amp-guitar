import { Fretboard } from "@moonwave99/fretboard.js";
import "/Users/ashtonbennett/Desktop/projects/amp_guitar/src/styles/mainNavButton.css";
import React, { useEffect } from "react";
import { fretboardObj } from "./ScaleButton";

const syleToShowUp = {
  width: "100%",
  maxWidth: "50vw",
  background: "white",
  borderRadius: "5px",
  border: "5px solid black",
};

const FretBoard = ({ coordinatesToShow, chordOne }) => {
  useEffect(() => {
    const fretboard = new Fretboard({
      el: "#fretboard",
      stringWidth: 5,
      stringColor: "#201D1D",
      fretColor: "#201D1D",
      fretCount: 24,
      fretWidth: 4,
      nutWidth: 10,
      nutColor: "#000000",
      middleFretColor: "#E3941C",
      middleFretWidth: 6,
      scaleFrets: false,
      height: 300,
      width: 1200,
      dotSize: 25,
      dotFill: "#201D1D",
      dotStrokeColor: "#000000",
      fretNumbersColor: "#000000",
      font: "inherit",
      highlightPadding: 0,
      highlightRadius: 5,
      highlightFill: "#E3941C",
      highlightStroke: "transparent",
      highlightBlendMode: "color-burn",
    });

    const alteredChordOne = chordOne
      .split("")
      .filter((x) => x !== "M")
      .join("");
    const fretBoardWithOrangeDots = fretboardObj[alteredChordOne].map(
      (obj) => ({ ...obj, interval: 1 })
    );
    const coordinatesWithOrangeDots = coordinatesToShow.concat(
      fretBoardWithOrangeDots
    );

    fretboard
      .setDots(coordinatesWithOrangeDots)
      .render()
      .style({
        filter: { interval: 1 },
        fill: "#E3941C",
      });
  }, []);

  return <figure id="fretboard" style={syleToShowUp}></figure>;
};

export default FretBoard;
