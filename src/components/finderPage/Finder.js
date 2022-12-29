import ChordForm from "./ChordForm";
import ScaleButton from "./ScaleButton";
import { useState } from "react";
import FretBoard from "./FretBoard";

const MainContentContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  zIndex: "0",
  padding: "7em",
  height: "55%",
};

const scaleDisplayContainer = {
  backgroundColor: "#201D1D",
  margin: "0, 2rem",
  borderRadius: "10px",
  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.60)",
  display: "flex",
  width: "100%",
};

const scaleDisplayLeft = {
  paddingRight: ".5em",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "space-around",
  marginBottom: "2em",
  width: "70%",
};

const scaleDisplayRight = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyItems: "center",
  justifyContent: "center",
  width: "100%",
  paddingRight: "3em",
  paddingBottom: "2em",
};

export const subtitle = {
  fontWeight: "500",
  fontSize: "2em",
  marginLeft: "2em",
};

export const Title = {
  fontWeight: "500",
  fontSize: "2.4rem",
  marginBottom: "0px",
};

const gradientTitle = {
  fontWeight: "500",
  fontSize: "2.4rem",
  marginBottom: "0px",
  background: "linear-gradient(to bottom, #2EB718, #E3941C)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const intialDirections = {
  zIndex: "1",
  width: "80vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyItems: "center",
};

const Finder = () => {
  const [chordOne, setChordOne] = useState("");
  const [chordTwo, setChordTwo] = useState("");
  const [chordThree, setChordThree] = useState("");
  const [chordFour, setChordFour] = useState("");
  const [scales, setScales] = useState([]);
  const [coordinatesToShow, setCoordinatesToShow] = useState([]);
  const [scaleToDisplay, setScaleToDisplay] = useState("");

  const majorScales = ["Ionian", "Lydian", "Mixolydian"];
  const minorScales = ["Dorian", "Phrygian", "Aeolian", "Locrian"];

  const clearChordForm = (event) => {
    setChordOne("");
    setChordTwo("");
    setChordThree("");
    setChordFour("");
    setScales([]);
    setCoordinatesToShow([]);
  };

  const chordSubmit = (event) => {
    event.preventDefault();

    let chords = [chordOne, chordTwo, chordThree, chordFour];

    chords[0].includes("M") ? setScales(minorScales) : setScales(majorScales);
  };
  return (
    <div style={MainContentContainer}>
      <div style={scaleDisplayContainer}>
        {scales.length === 0 && (
          <div style={intialDirections}>
            <h1 style={intialDirections}>Enter chords to start</h1>
          </div>
        )}
        <div style={scaleDisplayLeft}>
          {scales.length > 0 && (
            <>
              <p style={subtitle}>Pick a scale to display</p>
              {scales.map((scale) => (
                <ScaleButton
                  key={scale}
                  name={scale}
                  chordOne={chordOne}
                  coordinatesToShow={coordinatesToShow}
                  setCoordinatesToShow={setCoordinatesToShow}
                  setScaleToDisplay={setScaleToDisplay}
                />
              ))}
            </>
          )}
        </div>
        <div style={scaleDisplayRight}>
          {coordinatesToShow.length > 0 && (
            <>
              <h3 style={gradientTitle}>{scaleToDisplay}</h3>
              <FretBoard
                coordinatesToShow={coordinatesToShow}
                chordOne={chordOne}
              />
            </>
          )}
        </div>
      </div>
      <ChordForm
        chordOne={chordOne}
        chordTwo={chordTwo}
        chordThree={chordThree}
        chordFour={chordFour}
        chordSubmit={chordSubmit}
        handleChordOneChange={({ target }) =>
          setChordOne(target.value.toUpperCase())
        }
        handleChordTwoChange={({ target }) => setChordTwo(target.value)}
        handleChordThreeChange={({ target }) => setChordThree(target.value)}
        handleChordFourChange={({ target }) => setChordFour(target.value)}
        clearChordForm={clearChordForm}
      />
    </div>
  );
};

export default Finder;
