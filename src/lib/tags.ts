const person = {};

export const tags = {
  person: {
    id: "person",
    label: "people",
    children: [
      {
        id: "actor",
        label: "Actors",
      },
      {
        id: "musician",
        label: "musicians",
      },

      {
        id: "sports",
        label: "sports",
        children: [
          {
            id: "nba",
            label: "NBA",
          },
          { id: "nfl", label: "NFL" },
        ],
      },
      {
        id: "comedian",
        label: "comedians",
      },
    ],
  },
  place: {
    id: "place",
    label: "places",
    children: [
      { id: "museum", label: "Museum" },
      { id: "restaurant", label: "Restaurant" },
      { id: "park", label: "Park" },
      { id: "local", label: "Locale" },
    ],
  },
  movie: {
    id: "movie",
    label: "movies",
    children: [
      { id: "action-adventure", label: "Action/Adventure" },
      { id: "comedy", label: "Comedy" },
      { id: "thriller-suspense", label: "Thriller/Suspense" },
    ],
  },
};
