import React from "react";
import ServicesCard from "../servicesCard/ServicesCard";
import SidePage from "../sidePage/SidePage";
import styles from "./styles/service.module.css";

export default Service;

const services = [
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

function Service() {
  return (
    <div>
      <div className={styles["hotel-list"]}>
        {services.map((service) => (
          <ServicesCard
            src={service.src}
            title={service.title}
            location={service.location}
            rating={service.rating}
          />
        ))}
      </div>
      <SidePage />
    </div>
  );
}
