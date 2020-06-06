import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Cover from "./../cover/Cover";
import About from "./../about/About";
import ContactUs from "./../contactUs/ContactUs";

export default Home;

function Home() {
  return (
    <ReactFullpage
      anchors={["/", "about", "contact"]}
      sectionsColor={["#1b120f", "#e6dedd", "#1b120f"]}
      navigation={true}
      fitToSection={true}
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
