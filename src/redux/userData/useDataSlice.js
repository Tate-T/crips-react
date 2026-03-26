import { createSlice } from "@reduxjs/toolkit";
import { addAddress } from "./operations";

const defaultUsers = {
  items: [
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
  ],
  error: null,
};

const useDataSlice = createSlice({
  name: "userData",
  initialState: defaultUsers,
  extraReducers(builder) {
    builder
      .addCase(addAddress.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = null;
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const userDataReducer = useDataSlice.reducer;
