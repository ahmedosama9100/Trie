import React from "react";
import ServicesCard from "./../servicesCard/ServicesCard";
import SidePage from "./../sidePage/SidePage";
import styles from "./styles/hotel.module.css";

export default Hotel;

const hotels = [
  {
    src:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Hotel Name",
    location: "Cairo",
    rating: "Rating: 4.5",
  },
  {
    src:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Hotel Name",
    location: "Cairo",
    rating: "Rating: 4.5",
  },
  {
    src:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Hotel Name",
    location: "Cairo",
    rating: "Rating: 4.5",
  },
  {
    src:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Hotel Name",
    location: "Cairo",
    rating: "Rating: 4.5",
  },
  {
    src:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Hotel Name",
    location: "Cairo",
    rating: "Rating: 4.5",
  },
  {
    src:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Hotel Name",
    location: "Cairo",
    rating: "Rating: 4.5",
  },
  {
    src:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Hotel Name",
    location: "Cairo",
    rating: "Rating: 4.5",
  },
  {
    src:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Hotel Name",
    location: "Cairo",
    rating: "Rating: 4.5",
  },
  {
    src:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Hotel Name",
    location: "Cairo",
    rating: "Rating: 4.5",
  },
];

function Hotel() {
  return (
    <div>
      <div className={styles["hotel-list"]}>
        {hotels.map((hotel) => (
          <ServicesCard
            src={hotel.src}
            title={hotel.title}
            location={hotel.location}
            rating={hotel.rating}
          />
        ))}
      </div>
      <SidePage />
    </div>
  );
}
