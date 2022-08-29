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

      {/* <div className="searchBar">
        <input className="input" placeholder="Cari surah..." />
        <button className="search">
          <FiSearch size="1.4rem" color="#D7A86E" />
        </button>
      </div> */}

      <h2 className="bismillah">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h2>
    </header>
  );
};

export default Header;
