import React from "react";
import { GiBookmarklet } from "react-icons/gi";
// import { FiSearch } from "react-icons/fi";
import "./HeaderStyles.css";

const Header = () => {
  return (
    <header>
      <div className="title">
        <h2>Baca</h2>
        <GiBookmarklet size="2rem" />
        <h2>Quran</h2>
      </div>
    </header>
  );
};

export default Header;
