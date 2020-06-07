import React from "react";
import Card from "../aboutCard/AboutCard";
import styles from "./styles/about.module.css";

export default About;

function About() {
  const cardsData = [
    {
      src:
        "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Mission",
      content:
        "Our mission is to allow our users to access and gain benefits from our application as much as we can.We are a diverse youth team, equipped with both tech and passion to help our users find their ideal hotel, historic sites, entertainment venues and even transportation in many different places across Egypt.",
    },
    {
      src:
        "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Vision",
      content:
        "Our vision is to facilitate as much services as we can by converting everything the user may need in the form of organized information and make it accessible and useful.",
    },
    {
      src:
        "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Our Culture",
      content:
        "We 're not just embracing change, we are making change. In such a rapidly evolving technological environment we know the speed of our learning is our competitive advantage. We believe that our vision, progressive organizational structure and self-determined hours of work keep our talents satisfied, inspired, productive and looking forward to coming to work every morning.",
    },
  ];
  return (
    <div className={styles["about"]}>
      <h1 className={styles["about-header"]}>About Us</h1>
      <div className={styles["about-cards"]}>
        {cardsData.map((card) => (
          <Card
            key={card.title}
            src={card.src}
            title={card.title}
            content={card.content}
            page="about"
          />
        ))}
      </div>
    </div>
  );
}
