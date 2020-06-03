import React from "react";
import "./styles/home.css";
import trieLogo from "./images/trieLogo.png";

export default Home;

function Home() {
  return (
    <div className="solid-color">
      <img src={trieLogo} alt="trie logo" className="logo-cover"/>
    </div>
  );
}
