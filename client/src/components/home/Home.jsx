// home page that views landing page , about and contact us with a nice animation (react full page)

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Cover from "./../cover/Cover";
import About from "./../about/About";
import ContactUs from "./../contactUs/ContactUs";

function Home() {
  // react full-page responsible for sliding animation
  return (
    <ReactFullpage
      anchors={["", "about", "contact"]} // giving name for each slide
      sectionsColor={["#1b120f", "#e6dedd", "#1b120f"]} // color every page
      navigation={true} // enable 3 dots for navigation
      fitToSection={true} // fitting section into the page
      render={() => {
        return (
          <div id="fullpage-wrapper">
            <div className="section">
              <Cover />
            </div>
            <div className="section">
              <About />
            </div>
            <div className="section">
              <ContactUs />
            </div>
          </div>
        );
      }}
    />
  );
}

export default Home;
