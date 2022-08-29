import React from "react";
import "./MainStyles.css";
import { useEffect } from "react";
import { useState } from "react";

const Main = ({ number }) => {
  const [surah, setSurah] = useState([]);
  // const [loading, setLoading] = useState(false);

  function getSurah() {
    // setLoading(true);
    fetch(`https://quran-endpoint.vercel.app/quran/${number}`, {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setSurah(result.data.ayahs);
        // setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    getSurah();
  }, []);

  return (
    <div className="border">
      {surah.map((element, index) => {
        return (
          <div className="borders" key={index}>
            <div className="number">
              <p> {element.number.insurah} </p>
            </div>
            <p className="arabic">{element.text.ar}</p>
            <p className="translate">{element.translation.id}</p>
          </div>
        );
      })}

      <div className="theEnd"> </div>
    </div>
  );
};

export default Main;
