import { createSlice } from "@reduxjs/toolkit";

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

const useDataSlice = createSlice({
  name: "userData",
  initialState: defaultUsers,
  reducers: {
    addAddress: {
      reducer(state, action) {
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
      },
      prepare(
        id,
        firstName,
        lastName,
        company,
        phone,
        fax,
        streetaddress,
        streetaddress2,
        country,
        state,
        code,
      ) {
        return {
          type: "address/addAddress",
          payload: {
            id,
            address: {
              firstName,
              lastName,
              company,
              phone,
              fax,
              streetaddress,
              streetaddress2,
              country,
              state,
              code,
            },
          },
        };
      },
    },
  },
});

export const { addAddress } = useDataSlice.actions;
export const userDataReducer = useDataSlice.reducer;
