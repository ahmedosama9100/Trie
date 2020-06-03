import React from "react";
import "./home.css";
import coverImage from "./images/trie.jpg";

export default Home;

function Home() {
  return <img src={coverImage} alt="let's trie" className="cover-image" />;
}
