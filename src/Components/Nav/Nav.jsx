import { AppBar, Toolbar } from "@mui/material";

// react-router
import { Link } from "react-router-dom";

const Nav = () => (
  <AppBar position="static" sx={{ backgroundColor: "rgb(30, 30, 30)" }}>
    <Toolbar
      sx={{ display: "flex", justifyContent: "flex-start", padding: "0 20px" }}
    >
      <img
        src="http://bigramyweb.inovaeg.com/static/media/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg"
        alt="logo"
        style={{ width: "100px", height: "auto", padding: "10px" }}
      />
      <ul
        className="nav-links"
        style={{
          listStyle: "none",
          display: "flex",
          gap: "20px",
          color: "white",
        }}
      >
        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
            LogIn
          </Link>
        </li>
        <li>
          <Link to="/ebook" style={{ color: "white", textDecoration: "none" }}>
            Ebook
          </Link>
        </li>
      </ul>
    </Toolbar>
  </AppBar>
);

export default Nav;
