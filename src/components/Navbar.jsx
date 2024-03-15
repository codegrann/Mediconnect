import { useState } from "react";
import { Link } from "react-router-dom";
// import { animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";

import Logo from "./Minor/Logo";
import "../App.css";
import ImageContainer from "./Minor/ImageContainer";

const Navbar = ({ isLogged, setIsLogged }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar shadow-xl">
      <div className="container">
        <div className="logo">
          <Link to="/" className="">
            <h2>LOGO</h2>
            {/* <Logo /> */}
          </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
          {/* <p>menu icon</p> */}
        </div>
        <div className={`nav-elements  ${showNavbar && "active"} `}>
          <ul>
            <li className="nav-link">
              <Link to="/" className="">
                Home
              </Link>
            </li>
            {/* <Link
              activeClass="active"
              to="/about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {" "}
              About
            </Link> */}
            <li className="nav-link">
              <a href="/#aboutus">About&nbsp;us</a>
              {/* <Link to="/#aboutus">About us</Link> */}
            </li>
            <li className="nav-link">
              <a href="/#services" className="">
                Services
              </a>
              {/* <Link to="#services">Services</Link> */}
            </li>
            <li className="nav-link">
              <a href="/#contactus" className="">
                Contact
              </a>
              {/* <Link to="/#contactus">Contact</Link> */}
            </li>
            {isLogged ? (
              <>
                <li
                  className=""
                  onClick={() => {
                    navigate("/client/dashboard");
                  }}
                >
                  <div className="flex items-center justify-center p-2 rounded-full border-2 border-gray-400 cursor-pointer size-10">
                    <ImageContainer imageurl="/person.png" />
                  </div>
                </li>
                <li
                  className=""
                  onClick={() => {
                    navigate("/practitioner/dashboard");
                  }}
                >
                  <div className="flex items-center justify-center p-2 rounded-full border-2 border-gray-400 cursor-pointer size-10">
                    <ImageContainer imageurl="/person.png" />
                  </div>
                </li>
                <button
                  className="btn btn-error btn-sm"
                  onClick={() => {
                    setIsLogged(false);
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <li
                id="getstarted"
                className="btn btn-success "
                onClick={() => {
                  navigate("/signup");
                }}
              >
                <span className="font-semibold">Get started</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);

export default Navbar;
