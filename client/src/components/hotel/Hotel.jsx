import React from "react";
import Card from "../aboutCard/AboutCard";
import styles from "./styles/hotel.module.css";

export default Hotel;

const hotels = [
  {
    src:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Hotel Name",
    content: "Rating: 4.5",
  },
  {
    src:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Hotel Name",
    content: "Rating: 4.5",
  },
  {
    src:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Hotel Name",
    content: "Rating: 4.5",
  },
  {
    src:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Hotel Name",
    content: "Rating: 4.5",
  },
  {
    src:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Hotel Name",
    content: "Rating: 4.5",
  },
  {
    src:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Hotel Name",
    content: "Rating: 4.5",
  },
  {
    src:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Hotel Name",
    content: "Rating: 4.5",
  },
  {
    src:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Hotel Name",
    content: "Rating: 4.5",
  },
  {
    src:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Hotel Name",
    content: "Rating: 4.5",
  },
];

function Hotel() {
  return (
    <div className={styles["hotel-container"]}>
      {hotels.map((hotel) => (
        <Card
          src={hotel.src}
          title={hotel.title}
          content={hotel.content}
          page="hotel"
        />
      ))}
    </div>
  );
}
