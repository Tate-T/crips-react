const defaultUsers = [
  {
    id: "user-id-1",
    first_name: "John",
    last_name: "Doe",
    email: "JohnDoe12345@gmail.com",
    password: "password",
    basket: [
      {
        img: "https://i.postimg.cc/bNnCQRYX/catalog-image-2.jpg",
        category: "Top Women",
        name: "Angels malu zip jeans slim black used",
        price: 139,
        colors: ["#88ABCB", "#FACBCE", "#A75E5D"],
        id: "2",
        size: "W32",
        ammount: 1,
      },
    ],
    addresses: [{}],
    wishlist: [
      {
        img: "https://i.postimg.cc/bNnCQRYX/catalog-image-2.jpg",
        category: "Top Women",
        name: "Angels malu zip jeans slim black used",
        price: 139,
        colors: ["#88ABCB", "#FACBCE", "#A75E5D"],
        id: "2",
        size: "W32",
        ammount: 1,
      },
    ],
  },
];

export const userDataReducer = (state = [], action) => {
  switch (action.type) {
    case "address/addAddress": {
      return [
        ...state,
        {
          id: action.payload.id,
          first_name: "-",
          last_name: "-",
          email: "-",
          password: "-",
          basket: [],
          addresses: [action.payload.address],
          wishlist: [],
        },
      ];
    }
    default: {
      return state;
    }
  }
};
