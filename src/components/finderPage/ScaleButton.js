import "/Users/ashtonbennett/Desktop/projects/amp_guitar/src/styles/buttonandbreakpoints.css";

// style for the scale buttons
const findButton = {
  color: "white",
  width: "30%",
  backgroundColor: "#2EB718",
  marginLeft: "1em",
  marginBottom: "1em",
  padding: ".5em .5em",
  borderRadius: ".5em",
  border: "none",
  fontSize: "1.2rem",
  boxShadow: "0px 16px 15px rgba(0, 0, 0, 0.80)",
  cursor: "pointer",
  fontFamily: "Jacques Francois",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

// obj used to determine the coordinates of all the possible notes
export const fretboardObj = {
  C: [
    { string: 2, fret: 1 },
    { string: 5, fret: 3 },
    { string: 3, fret: 5 },
    { string: 6, fret: 8 },
    { string: 1, fret: 8 },
    { string: 4, fret: 10 },
    { string: 2, fret: 13 },
    { string: 5, fret: 15 },
    { string: 3, fret: 17 },
    { string: 1, fret: 20 },
    { string: 6, fret: 20 },
    { string: 3, fret: 5 },
    { string: 4, fret: 22 },
  ],
  "C#": [
    { string: 2, fret: 2 },
    { string: 5, fret: 4 },
    { string: 3, fret: 6 },
    { string: 1, fret: 9 },
    { string: 6, fret: 9 },
    { string: 4, fret: 11 },
    { string: 2, fret: 14 },
    { string: 5, fret: 16 },
    { string: 3, fret: 18 },
    { string: 1, fret: 21 },
    { string: 6, fret: 21 },
    { string: 4, fret: 23 },
  ],
  D: [
    { string: 4, fret: 0 },
    { string: 2, fret: 3 },
    { string: 5, fret: 5 },
    { string: 3, fret: 7 },
    { string: 1, fret: 10 },
    { string: 6, fret: 10 },
    { string: 4, fret: 12 },
    { string: 2, fret: 15 },
    { string: 5, fret: 17 },
    { string: 3, fret: 19 },
    { string: 1, fret: 22 },
    { string: 6, fret: 22 },
    { string: 4, fret: 24 },
  ],
  "D#": [
    { string: 4, fret: 1 },
    { string: 2, fret: 4 },
    { string: 5, fret: 6 },
    { string: 3, fret: 8 },
    { string: 1, fret: 11 },
    { string: 6, fret: 11 },
    { string: 4, fret: 13 },
    { string: 2, fret: 16 },
    { string: 5, fret: 18 },
    { string: 3, fret: 20 },
    { string: 1, fret: 23 },
    { string: 6, fret: 23 },
  ],
  E: [
    { string: 6, fret: 0 },
    { string: 1, fret: 0 },
    { string: 4, fret: 2 },
    { string: 2, fret: 5 },
    { string: 5, fret: 7 },
    { string: 3, fret: 9 },
    { string: 1, fret: 12 },
    { string: 6, fret: 12 },
    { string: 4, fret: 14 },
    { string: 2, fret: 17 },
    { string: 5, fret: 19 },
    { string: 3, fret: 21 },
    { string: 1, fret: 24 },
    { string: 6, fret: 24 },
  ],
  F: [
    { string: 1, fret: 1 },
    { string: 6, fret: 1 },
    { string: 4, fret: 3 },
    { string: 2, fret: 6 },
    { string: 5, fret: 8 },
    { string: 3, fret: 10 },
    { string: 1, fret: 13 },
    { string: 6, fret: 13 },
    { string: 4, fret: 15 },
    { string: 2, fret: 18 },
    { string: 5, fret: 20 },
    { string: 3, fret: 22 },
  ],
  "F#": [
    { string: 1, fret: 2 },
    { string: 6, fret: 2 },
    { string: 4, fret: 4 },
    { string: 2, fret: 7 },
    { string: 5, fret: 9 },
    { string: 3, fret: 11 },
    { string: 1, fret: 14 },
    { string: 6, fret: 14 },
    { string: 4, fret: 16 },
    { string: 2, fret: 19 },
    { string: 5, fret: 21 },
    { string: 3, fret: 23 },
  ],
  G: [
    { string: 3, fret: 0 },
    { string: 1, fret: 3 },
    { string: 6, fret: 3 },
    { string: 4, fret: 5 },
    { string: 2, fret: 8 },
    { string: 5, fret: 10 },
    { string: 3, fret: 12 },
    { string: 1, fret: 15 },
    { string: 6, fret: 15 },
    { string: 4, fret: 17 },
    { string: 2, fret: 20 },
    { string: 5, fret: 22 },
    { string: 3, fret: 24 },
  ],
  "G#": [
    { string: 3, fret: 1 },
    { string: 1, fret: 4 },
    { string: 6, fret: 4 },
    { string: 4, fret: 6 },
    { string: 2, fret: 9 },
    { string: 5, fret: 11 },
    { string: 3, fret: 13 },
    { string: 1, fret: 16 },
    { string: 6, fret: 16 },
    { string: 4, fret: 18 },
    { string: 2, fret: 21 },
    { string: 5, fret: 23 },
  ],
  A: [
    { string: 5, fret: 0 },
    { string: 3, fret: 2 },
    { string: 1, fret: 5 },
    { string: 6, fret: 5 },
    { string: 4, fret: 7 },
    { string: 2, fret: 10 },
    { string: 5, fret: 12 },
    { string: 3, fret: 14 },
    { string: 1, fret: 17 },
    { string: 6, fret: 17 },
    { string: 4, fret: 19 },
    { string: 2, fret: 22 },
    { string: 5, fret: 24 },
  ],
  "A#": [
    { string: 5, fret: 1 },
    { string: 3, fret: 3 },
    { string: 1, fret: 6 },
    { string: 6, fret: 6 },
    { string: 4, fret: 8 },
    { string: 2, fret: 11 },
    { string: 5, fret: 13 },
    { string: 3, fret: 15 },
    { string: 1, fret: 18 },
    { string: 6, fret: 18 },
    { string: 4, fret: 20 },
    { string: 2, fret: 23 },
  ],
  B: [
    { string: 2, fret: 0 },
    { string: 5, fret: 2 },
    { string: 3, fret: 4 },
    { string: 1, fret: 7 },
    { string: 6, fret: 7 },
    { string: 4, fret: 9 },
    { string: 2, fret: 12 },
    { string: 5, fret: 14 },
    { string: 3, fret: 16 },
    { string: 1, fret: 19 },
    { string: 6, fret: 19 },
    { string: 4, fret: 21 },
    { string: 2, fret: 24 },
  ],
};

// helps convert sharps/flats and remove items like Fb
// Remember: Fb and Cb dont exist
// Remember: B# and E# dont exist
const noteReferance = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

// function adds a flat to a note
const flatNote = (note) => {
  const index = noteReferance.indexOf(note);

  return index !== 0 ? noteReferance[index - 1] : noteReferance[11];
};

// function used to add a sharp to a note
const sharpNote = (note) => {
  const index = noteReferance.indexOf(note);
  return index !== 11 ? noteReferance[index + 1] : noteReferance[0];
};

// stores the notes in the major scales that are compared to the scale formulas to create more scales.
// remember: make sure to only use sharps here----> !E# &&& !B#
export const scaleReferance = {
  C: ["C", "D", "E", "F", "G", "A", "B"],
  "C#": ["C#", "D#", "F", "F#", "G#", "A#", "C"],
  D: ["D", "E", "F#", "G", "A", "B", "C#"],
  "D#": ["D#", "F", "G", "G#", "A#", "C", "D"],
  E: ["E", "F#", "G#", "A", "B", "C#", "D#"],
  F: ["F", "G", "A", "Bb", "C", "D", "E"],
  "F#": ["F#", "G#", "A#", "B", "C#", "D#", "F"],
  G: ["G", "A", "B", "C", "D", "E", "F#"],
  "G#": ["G#", "A#", "C", "C#", "D#", "F", "G"],
  A: ["A", "B", "C#", "D", "E", "F#", "G#"],
  "A#": ["A#", "C", "D", "D#", "F", "G", "A"],
  B: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
};

// compared to the scale referance to determine the notes of a scale.
const scaleFormulas = {
  Ionian: ["1", "2", "3", "4", "5", "6", "7"],
  Dorian: ["1", "2", "b3", "4", "5", "6", "b7"],
  Phrygian: ["1", "b2", "b3", "4", "5", "b6", "b7"],
  Lydian: ["1", "2", "3", "#4", "5", "6", "7"],
  Mixolydian: ["1", "2", "3", "4", "5", "6", "b7"],
  Aeolian: ["1", "2", "b3", "4", "5", "b6", "b7"],
  Locrian: ["1", "b2", "b3", "4", "b5", "b6", "b7"],
  "Minor Pentatonic": ["1", "b3", "4", "5", "b7"],
  "Major Pentatonic": ["1", "2", "3", "5", "6"],
  "Major Arpeggio": ["1", "3", "5"],
  "Minor Arpeggio": ["1", "b3", "5"],
  "Minor Blues": ["1", "b3", "4", "b5", "5", "b7"],
  "Major Blues": ["1", "2", "b3", "3", "5", "6"],
  "Harmonic Minor": ["1", "2", "b3", "4", "5", "b6", "7"],
  "Harmonic Major": ["1", "2", "3", "4", "5", "b6", "7"],
  Byzantine: ["1", "b2", "3", "4", "5", "b6", "7"],
  Enigmatic: ["1", "b2", "3", "#4", "#5", "#6", "7"],
  Persian: ["1", "b2", "3", "4", "b5", "b6", "7"],
  "Javanese Pelog": ["1", "b2", "b3", "4", "5", "6", "b7"],
  "Neapolitan Minor": ["1", "b2", "b3", "4", "5", "b6", "7"],
  "Hungarian Minor": ["1", "2", "b3", "#4", "5", "b6", "7"],
  Hindu: ["1", "2", "3", "4", "5", "b6", "b7"],
  Romanian: ["1", "b2", "3", "#4", "5", "6", "b7"],
  "Spanish Gipsy": ["1", "b2", "3", "4", "5", "b6", "b7"],
  Arabian: ["1", "2", "3", "4", "b5", "b6", "b7"],
  Asian: ["1", "b2", "3", "4", "b5", "6", "b7"],
  Prometheus: ["1", "2", "3", "#4", "6", "b7"],
  Ritsu: ["1", "b2", "b3", "4", "b6", "b7"],
  "In Sen": ["1", "b2", "4", "5", "b7"],
  Iwato: ["1", "b2", "4", "b5", "b7"],
  Scottish: ["1", "2", "4", "5", "6"],
  "Han-Kumoi": ["1", "2", "4", "5", "b6"],
  "Hon-Kumoi-Joshi": ["1", "b2", "4", "5", "b6"],
  Egyptian: ["1", "2", "4", "5", "b7"],
  Hirajoshi: ["1", "2", "b3", "5", "b6"],
  "Balinese Pelog": ["1", "b2", "b3", "5", "b6"],
};

// adjusts the chord param to be displayed. Ex: C#m returns C# for displaying C# Dorian.
export const rootNoteFinder = (chordOne) => {
  return chordOne[1] === "#" ? chordOne[0].concat("#") : chordOne[0];
};

export function notesOfAScale(name, chord) {
  const chordOne = rootNoteFinder(chord);

  var notesToDisplay = [];
  // compares the scale formula with the chordOne ref scale(major scale)
  // also handles cases of when flats are provided and converts to a sharp
  for (let i = 0; i < scaleFormulas[name].length; i++) {
    var scaleDegree = scaleFormulas[name][i];

    if (scaleDegree.length === 1) {
      notesToDisplay = notesToDisplay.concat(
        scaleReferance[rootNoteFinder(chordOne).toUpperCase()][scaleDegree - 1]
      );
    } else {
      if (scaleDegree.includes("b")) {
        scaleDegree = scaleDegree[1];
        notesToDisplay = notesToDisplay.concat(
          flatNote(scaleReferance[rootNoteFinder(chordOne)][scaleDegree - 1])
        );
      } else {
        scaleDegree = scaleDegree[1];
        notesToDisplay = notesToDisplay.concat(
          sharpNote(scaleReferance[rootNoteFinder(chordOne)][scaleDegree - 1])
        );
      }
    }
  }

  return notesToDisplay;
}
// creates the button that onced clicked will display the fretboard diagram
const ScaleButton = ({
  name,
  chordOne,
  setCoordinatesToShow,
  setScaleToDisplay,
}) => {
  const scaleToDisplay = async (event) => {
    event.preventDefault();

    // will first set coordinates to nothing removing the diagram
    await setCoordinatesToShow([]);

    // takes the information needed from the form to find the key and sets name of the scale to be rendered
    setScaleToDisplay(`${rootNoteFinder(chordOne)} ${name}`);

    const notes = notesOfAScale(name, chordOne);

    // loops over the fretboard obj to find the coordinates needed to display and sets the state to display them
    var coordinates = [];

    for (let i = 0; i < notes.length; i++) {
      coordinates = coordinates.concat(fretboardObj[notes[i]]);
    }
    setCoordinatesToShow(coordinates);
  };

  return (
    <button style={findButton} className="button" onClick={scaleToDisplay}>
      {name}
    </button>
  );
};

export default ScaleButton;
