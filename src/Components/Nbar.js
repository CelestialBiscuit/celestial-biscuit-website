import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./../assets/Logo.png";
import { NavLink } from "react-bootstrap";
import { useLocation } from "react-router";
import { useMediaQuery } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const Nbar = () => {
  const location = useLocation();
  const matches = useMediaQuery("(max-width:767px)");
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Container className="nav">
          <img src={logo} alt="Celestial Biscuit IGDTUW" className="logo" />

          {matches ? (
            <>
              <div className="nav-button-mobile" style={{ display: "flex", alignItems: "center" }}>
                {open ? (
                  <div className="cross-mark-nav" onClick={() => setOpen(false)} style={{ marginRight: "10px" }}>
                    ✖ {/* Close icon */}
                  </div>
                ) : (
                  <div onClick={() => setOpen(true)} style={{ marginRight: "10px" }}>
                    ☰ {/* Hamburger icon */}
                  </div>
                )}

                {/* Add the rocket icon next to the bars */}
                <a
                  href="https://cb-genesis.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <FontAwesomeIcon
                    icon={faRocket}
                    style={{ color: "#ffffff", marginTop: "5px", fontSize: "1.2rem"}}
                    beatFade
                  />
                </a>
              </div>

              <div
                className="full-screen-nav"
                style={{
                  height: open ? "100vh" : "0px",
                }}
              >
                <Nav className="navbox-mobile" activeKey={location.pathname}>
                  <NavLink href="/" className="link">
                    HOME
                  </NavLink>
                  <NavLink href="/Project" className="link">
                    PROJECTS
                  </NavLink>
                  <NavLink href="/Gallery" className="link">
                    GALLERY
                  </NavLink>
                  <NavLink href="/About" className="link">
                    ABOUT
                  </NavLink>
                </Nav>

                <Nav className="NavSocials">
                  <div className="social">
                    <a
                      href="https://twitter.com/cbigdtuw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon="fa-brands fa-twitter"
                        className="icon"
                      />
                    </a>
                  </div>
                  <div className="social">
                    <a
                      href="https://www.instagram.com/celestialbiscuit/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon="fa-brands fa-instagram"
                        className="icon"
                      />
                    </a>
                  </div>
                  <div className="social">
                    <a
                      href="https://www.linkedin.com/company/celestial-biscuit-igdtuw/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon="fa-brands fa-linkedin"
                        className="icon"
                      />
                    </a>
                  </div>
                </Nav>
              </div>
            </>
          ) : (
            <>
              <Nav
                className="navbox"
                variant="pills"
                activeKey={location.pathname}
              >
                <NavLink href="/" className="link">
                  HOME
                </NavLink>
                <NavLink href="/Project" className="link">
                  PROJECTS
                </NavLink>
                <NavLink href="/Gallery" className="link">
                  GALLERY
                </NavLink>
                <NavLink href="/About" className="link">
                  ABOUT
                </NavLink>
              </Nav>
              <Nav className="NavSocials">
                <div className="social">
                  <a
                    href="https://twitter.com/cbigdtuw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon="fa-brands fa-twitter"
                      className="icon"
                    />
                  </a>
                </div>
                <div className="social">
                  <a
                    href="https://www.instagram.com/celestialbiscuit/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon="fa-brands fa-instagram"
                      className="icon"
                    />
                  </a>
                </div>
                <div className="social">
                  <a
                    href="https://www.linkedin.com/company/celestial-biscuit-igdtuw/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon="fa-brands fa-linkedin"
                      className="icon"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://cb-genesis.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faRocket}
                      style={{ color: "#ffffff", marginTop: "8px" }}
                      className="icon"
                      beatFade
                    />
                  </a>
                </div>
              </Nav>
            </>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default Nbar;
