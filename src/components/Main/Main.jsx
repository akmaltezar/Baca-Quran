import React from "react";
import { GiBookmarklet, GiOldLantern } from "react-icons/gi";
import "./MainStyles.css";
import { useEffect } from "react";
import { useState } from "react";

const Main = ({ number }) => {
  const [surah, setSurah] = useState([]);
  const [nameAr, setNameAr] = useState({});
  const [nameId, setNameId] = useState({});
  const [translate, setTranslate] = useState({});
  const [ayat, setAyat] = useState({});
  const [loading, setLoading] = useState(false);

  function getSurah() {
    setLoading(true);
    fetch(`https://quran-endpoint.vercel.app/quran/${number}`, {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        setSurah(result.data.ayahs);
        setNameAr(result.data.asma.ar);
        setNameId(result.data.asma.id);
        setTranslate(result.data.asma.translation);
        setAyat(result.data);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    getSurah();
  }, [number]);

  return (
    <div className="border">
      {loading ? (
        <div></div>
      ) : number === 1 || number === 9 ? (
        <div className="data">
          <p className="arabic">{nameAr.short}</p>
          <div className="names">
            <p>{nameId.short}</p>
            <span> | </span>
            <p>{translate.id}</p>
          </div>
          <p>{ayat.ayahCount} ayat </p>
        </div>
      ) : (
        <div className="datasurah">
          <div className="data">
            <p className="arabic">{nameAr.short}</p>
            <div className="names">
              <p>{nameId.short}</p>
              <span> | </span>
              <p>{translate.id}</p>
            </div>

            <p>{ayat.ayahCount} ayat </p>
          </div>
          <div className="bismillahwrap">
            <GiOldLantern />
            <p>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
            <GiOldLantern />
          </div>
        </div>
      )}
      {loading ? (
        <div className="loading">
          <GiBookmarklet className="book" />
          <p> Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan </p>
          <p> [Q.S. Al - Alaq : 1] </p>
        </div>
      ) : (
        surah.map((element, index) => {
          return (
            <div className="borders" key={index}>
              <div className="number">
                <p> {element.number.insurah} </p>
              </div>
              <p className="arabic">{element.text.ar}</p>
              <p className="translate">{element.translation.id}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Main;
