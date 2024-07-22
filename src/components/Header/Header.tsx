import React, { useEffect, useState } from "react";
import MobileNav from "../Navbar/MobileNav";
import MainNav from "../Navbar/MainNav";

import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="header-nav">
      <div>
        <h1 className="header-h1">
          <Link to="/" className="no-style-link">
            Notes Block
          </Link>
        </h1>
      </div>
      <div className="nav">
        {windowSize.width <= 768 ? <MobileNav /> : <MainNav />}
      </div>
    </div>
  );
};

export default Header;
