const initalState = [
  {
    _id: "11",
    src:
      " https://media-cdn.tripadvisor.com/media/photo-o/1a/b5/29/69/dubai-house-special-breakfast.jpg",
    name: " Dubai House",
    location: " 4 El Thawra Street, Cairo 11511 Egypt",
    rating: "5/5",
    description:
      "Throughout the centuries, Egyptian cuisine has been part of the country’s heritage, history and romantic past. At Al Khal, the finest authentic Egyptian dishes and delights are brought to you in a classic setting with a modern twist and traditionally perfect service. Enjoy the tastes and flavours of the ages created for you.",
    items: [
      {
        itemName: "Tables",
        currentAmount: 5,
      },
    ],
  },

  {
    _id: "22",
    src:
      " https://media-cdn.tripadvisor.com/media/photo-s/0e/ae/b1/9a/al-khal-egyptian-dishes.jpg",
    name: " Al Khal Egyptian Restaurant",
    location:
      " InterContinental Cairo Citystars Omar Bin Khattab Street, Cairo 11511 Egypt",
    rating: "4.8/5",
    description:
      " Throughout the centuries, Egyptian cuisine has been part of the country’s heritage, history and romantic past. At Al Khal, the finest authentic Egyptian dishes and delights are brought to you in a classic setting with a modern twist and traditionally perfect service. Enjoy the tastes and flavours of the ages created for you.",
    items: [
      {
        itemName: "Tables",
        currentAmount: 9,
      },
    ],
  },
  {
    _id: "33",
    src:
      " https://s7d2.scene7.com/is/image/ritzcarlton/RCCAIRO_00049?$XlargeViewport100pct$",
    name: " Culina",
    location:
      " 1113 Corniche El Nil Street The Nile Ritz-Carlton, Downtown, Cairo 11221 Egypt",
    rating: "4.5/5",
    description:
      " Casual, contemporary, all-day dining, featuring a kitchen theater with a wide selection of international and local favorites with the best Friday brunch in town.",
    items: [
      {
        itemName: " Tables ",
        currentAmount: 10,
      },
    ],
  },

  {
    _id: "44",
    src:
      "https://media-cdn.tripadvisor.com/media/photo-s/0e/3e/82/5f/fayruz-lebanese-restaurant.jpg",
    name: " Fayruz Lebanese Restaurant",
    location:
      " InterContinental Cairo Citystars Omar Ibn El Khattab St., Heliopolis, Cairo 11511 Egypt",
    rating: "4/5",
    description:
      " Guests familiar with the flavours and spices of Lebanese cuisine will find them blended to perfection at Fayruz. for newcomers, let the famously friendly staff introduce you over lunch on the outdoor terrace or an exotic dinner show with live belly dancing. The interior is delightfully authentic and evocative.",
    items: [
      {
        itemName: " Tables ",
        currentAmount: 2,
      },
    ],
  },
];

function restaurantReducer(state = initalState) {
  return state;
}

export default restaurantReducer;
