import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar
          setNumber={(res) => {
            setNumber(res);
          }}
        />
        <Main number={number} />
      </div>
    </>
  );
}

export default App;
