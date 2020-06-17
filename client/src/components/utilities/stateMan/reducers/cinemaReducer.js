const initialState = [
  {
    _id: "1",
    src:
      "https://identity-mag.com/wp-content/uploads/2016/10/64290506-a3dd-4f5b-a886-b91bafe41614.jpg",
    name: " Cinema Century Grand Nile Tower",
    description:
      "Facebook page link: https://www.facebook.com/CenturyCinemasGrandNileTower",
    location: " Galleria Mall at Grand Nile Tower, Corniche, El Nil",
    rating: "3.9/5",
    items: [
      {
        itemName: "Avengers End Game ",
        currentAmount: 6,
      },
      {
        itemName: "Joker ",
        currentAmount: 14,
      },
    ],
  },
  {
    _id: "2",
    src:
      "https://www.aswakegypt.com/images/userfiles/business/163/GalaxyCinema02.jpg",
    name: " Galaxy Cinema",
    description: "Facebook page link: https://www.facebook.com/CinemaGalaxy/",
    location: " 67 Abd Al-Aziz Al Saud Street, Al-Manial",
    rating: "4.1/5",
    items: [
      {
        itemName: "Avengers End Game ",
        currentAmount: 2,
      },
      {
        itemName: "Joker ",
        currentAmount: 9,
      },
    ],
  },
  {
    _id: "3",
    src:
      "https://4.bp.blogspot.com/-FBb7Ju1N-f8/V9-EoNix3wI/AAAAAAAAAGQ/pbVZq88qMWw-61ap1MSxuT_e4NQyPtwagCLcB/s1600/b_2012082620180811-City-Stars-Cinema.jpg",
    name: " Ramses Cinema",
    description:
      "Facebook page link: https://www.facebook.com/RamsesHiltonEG/?rf=1383909698544966",
    location: " Ramses, Cairo",
    rating: "3.7/5",

    items: [
      {
        itemName: "Avengers End Game ",
        currentAmount: 7,
      },
      {
        itemName: "Joker ",
        currentAmount: 15,
      },
    ],
  },
  {
    _id: "4",
    src: "https://www.fondationhiba.ma/img/cinema-renaissance.jpg",
    name: " Renaissance Cinema Dandy Mall",
    description: "Facebook page link: https://www.facebook.com/RnsCinemas/",
    location: " Carrfour, Giza",
    rating: " 3/5",

    items: [
      {
        itemName: "Avengers End Game ",
        currentAmount: 14,
      },
      {
        itemName: "Joker ",
        currentAmount: 8,
      },
    ],
  },
];

function cinemaReducer(state = initialState) {
  return state;
}

export default cinemaReducer;
