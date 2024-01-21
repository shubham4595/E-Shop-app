import React from "react";
import Navbar from "../components/navbar/Navbar";
import "../components/styles/About.css";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="about ">
        <h5 className="title mt-2">My Provision-Store</h5>
        {/* src folder */}
        <h5 className="folder">├── src</h5>
        {/* components folder */}
        <h5 className="folder">│ ├── components</h5>
        {/* login folder */}
        <h5 className="folder">│ ├── card</h5>
        <h5 className="file">│ │ └── Card.jsx</h5>
        {/* navbar folder */}
        <h5 className="folder">│ ├── navbar </h5>
        <h5 className="file">│ │ └── Navbar.jsx</h5>
        {/* images folder */}
        <h5 className="folder">│ ├── images</h5>
        <h5 className="file">│ │ └── logo.png</h5>
        <h5>│ └── ...</h5>
        {/* pages folder */}
        <h5 className="folder">│ ├── pages</h5>
        <h5 className="folder">│ ├── style</h5>
        <h5 className="file">│ │ └── About.css</h5>
        <h5 className="file">│ │ └── Login.css</h5>
        <h5 className="file">│ ├── About.jsx</h5>
        <h5 className="file">│ ├── Login.jsx</h5>
        <h5 className="file">│ ├── ProductList.jsx</h5>
        <h5>│ └── ...</h5>
        {/* Root files folder */}
        <h5 className="file">│ ├── App.css</h5>
        <h5 className="file">│ ├── App.js</h5>
        <h5 className="file">│ ├── index.js</h5>
        <h5>│ └── ...</h5>
        <h5 className="folder">├── public</h5>
        <h5>│ └── ...</h5>
        <h5>└── ... </h5>
      </div>
    </>
  );
}
