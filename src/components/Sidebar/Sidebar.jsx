import React from "react";
import "./SidebarStyles.css";
import { useState } from "react";
import { useEffect } from "react";

function Sidebar({ setNumber }) {
  const [surahs, setSurahs] = useState([]);

  function getQuran() {
    fetch("https://quran-endpoint.vercel.app/quran", {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setSurahs(result.data);
      })

      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    getQuran();
  }, []);

  return (
    <div className="wrapper">
      {surahs.map((element, index) => {
        return (
          <div
            className="wrappers"
            key={index}
            onClick={() => {
              setNumber(element.number);
            }}
          >
            <div className="number">
              <p>{element.number}</p>
            </div>
            <div className="nameWrapper">
              <p>{element.asma.id.short}</p>
            </div>
            <div className="typeWrapper">
              <p>{element.type.id}</p>
              <p className="divider"> | </p>
              <p> {element.ayahCount} ayat </p>
            </div>
          </div>
        );
      })}

      <div className="theEnd"></div>
    </div>
  );
}

export default Sidebar;
