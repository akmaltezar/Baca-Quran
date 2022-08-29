import React from "react";
import "./SidebarStyles.css";
import { useState } from "react";
import { useEffect } from "react";

function Sidebar({ setNumber }) {
  const [surahs, setSurahs] = useState([]);
  const [nomor, setNomor] = useState(0);

  function getQuran() {
    fetch("https://quran-endpoint.vercel.app/quran", {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        result.data.map((item, index) => {
          setNomor(item[index]);
        });
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
              setNumber(nomor);
              console.log(nomor);
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
              <p> | </p>
              <p> {element.ayahCount} </p>
            </div>
          </div>
        );
      })}

      <div className="theEnd"></div>
    </div>
  );
}

export default Sidebar;
