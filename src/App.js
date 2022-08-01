import React from "react";
import Particles from "./Component/Particles";
import "./App.css";
import Navbar from "./Component/Navbar";

const App = () => {
    return (
        <>
            <Navbar title="HI" About="helpme" />
            <div className="particles">
                <Particles />
            </div>
        </>
    );
};

export default App;
