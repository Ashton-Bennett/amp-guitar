import "/Users/ashtonbennett/Desktop/projects/amp_guitar/src/styles/mainNavButton.css";

const formEnterField = {
  width: "5em",
  marginRight: "1em",
  marginLeft: "1em",
  fontSize: "1.5rem",
  color: "white",
  border: "solid 1px",
  borderColor: "#2EB718",
  borderRadius: "5px",
  backgroundColor: "#201D1D",
  outline: "none",
};

const findButton = {
  color: "white",
  width: "5em",
  backgroundColor: "#2EB718",
  marginLeft: "1em",
  padding: ".5em .5em",
  borderRadius: ".5rem",
  border: "none",
  fontSize: "1.4rem",
  boxShadow: "0px 16px 15px rgba(0, 0, 0, 0.80)",
  cursor: "pointer",
  fontFamily: "Jacques Francois",
};

const formButtonClear = {
  backgroundColor: "#E3941C",
  color: "white",
  width: "5em",
  marginLeft: "1em",
  marginRight: ".5em",
  padding: ".5em .5em",
  borderRadius: ".5rem",
  border: "none",
  fontSize: "1.4rem",
  boxShadow: "0px 16px 15px rgba(0, 0, 0, 0.80)",
  cursor: "pointer",
  fontFamily: "Jacques Francois",
};

const chordFormStyle = {
  backgroundColor: "#201D1D",
  width: "85%",
  borderRadius: "10px",
  margin: "3rem",
  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.60)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "3em",
};

const ChordForm = ({
  chordOne,
  chordTwo,
  chordThree,
  chordFour,
  handleChordOneChange,
  handleChordTwoChange,
  handleChordThreeChange,
  handleChordFourChange,
  chordSubmit,
  clearChordForm,
}) => {
  return (
    <div style={chordFormStyle}>
      <form onSubmit={chordSubmit}>
        <label>Key:</label>
        <input
          style={formEnterField}
          type="text"
          value={chordOne}
          onChange={handleChordOneChange}
          required
          title="The following chords are not allowed: 'FB ', 'CB', 'B#', or 'E#'
                "
          pattern="^((?!FB |CB|B#|E#).)*$"
        ></input>
        <label>2nd Chord:</label>
        <input
          style={formEnterField}
          type="text"
          value={chordTwo}
          onChange={handleChordTwoChange}
        ></input>
        <label>3rd Chord:</label>
        <input
          style={formEnterField}
          type="text"
          value={chordThree}
          onChange={handleChordThreeChange}
        ></input>
        <label>4th Chord:</label>
        <input
          style={formEnterField}
          type="text"
          value={chordFour}
          onChange={handleChordFourChange}
        ></input>
        <button className="button" style={findButton} type="submit">
          Find
        </button>
      </form>
      <button
        className="button"
        style={formButtonClear}
        onClick={clearChordForm}
      >
        Clear
      </button>
    </div>
  );
};

export default ChordForm;
