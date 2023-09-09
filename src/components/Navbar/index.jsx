import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const AppNavbar = ({ themeMode, toggleDarkMode }) => {
  return (
    <Navbar expand className={`shadow-sm`}>
      <Container>
        <Link
          to="/"
          href="#"
          className={`${
            themeMode === "dark" ? "text-white" : "text-dark"
          } fw-bold navbar-brand`}
        >
          Where in the world?
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="d-flex ms-auto">
            <Button
              onClick={toggleDarkMode}
              variant={`${
                themeMode === "light" ? "outline-dark" : "outline-light"
              } border-0 fw-normal`}
            >
              {themeMode === "light" && (
                <span>
                  <i className="fa-regular fa-moon"></i> Dark Mode
                </span>
              )}
              {themeMode === "dark" && (
                <span>
                  <i className="fa-solid fa-moon"></i> light Mode
                </span>
              )}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
