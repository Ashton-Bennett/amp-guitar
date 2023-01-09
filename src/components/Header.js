import { Link } from "react-router-dom";
import "/Users/ashtonbennett/Desktop/projects/amp_guitar/src/styles/buttonandbreakpoints.css";
import logo from "/Users/ashtonbennett/Desktop/projects/amp_guitar/src/images/logos.svg";

const brandLogo = {
  display: "flex",
  alignItems: "center",
  color: "inherit",
  textDecoration: "none",
  marginLeft: "3rem",
};

const logoImage = {
  width: "5rem",
};

const logoName = {
  marginLeft: "1rem",
  fontSize: "2em",
};

const mainNav = {
  display: "flex",
  listStyle: "none",
  color: "inherit",
  margin: "3rem",
  fontSize: "2.5em",
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "140px",
};

const finder = {
  marginLeft: "3rem",
};

const header = () => {
  return (
    <header style={headerStyle}>
      <Link to="/" style={brandLogo}>
        <img
          style={logoImage}
          src={logo}
          alt="company logo in the shape of muscal note"
        />
        <div style={logoName}>Amp Guitar</div>
      </Link>
      <nav>
        <ul style={mainNav}>
          <Link style={{ textDecoration: "none" }} to="/">
            {" "}
            <li className="btn MainNavButton">Home</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/Finder">
            {" "}
            <li className="btn MainNavButton" style={finder}>
              Finder
            </li>{" "}
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default header;
