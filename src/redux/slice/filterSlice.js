const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  filteredProducts: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_BY_CATEGORY: (state, action) => {
      const { products, category } = action.payload;
      let temProducts = [];
      if (category === "All") {
        temProducts = products;
      } else {
        temProducts = products.filter(
          (product) => product.category === category
        );
      }
      state.filteredProducts = temProducts;
    },
    FILTER_BY_BRAND: (state, action) => {
      const { products, brand } = action.payload;
      let temProducts = [];
      if (brand === "All") {
        temProducts = products;
      } else {
        temProducts = products.filter((product) => product.brand === brand);
      }
      state.filteredProducts = temProducts;
    },
    FILTER_BY_PRICE: (state, action) => {
      const { products, price } = action.payload;
      let temProducts = [];

      temProducts = products.filter((product) => product.price <= price);

      state.filteredProducts = temProducts;
    },
    FILTER_BY: (state, action) => {
      const { products, price, brand, category } = action.payload;
      let temProducts = [];

      if (category === "All") {
        temProducts = products;
      } else {
        temProducts = products.filter(
          (product) => product.category === category
        );
      }
      if (brand === "All") {
        temProducts = temProducts;
      } else {
        temProducts = temProducts.filter((product) => product.brand === brand);
      }

      temProducts = temProducts.filter((product) => product.price <= price);

      state.filteredProducts = temProducts;
    },
  },
});

export const {
  FILTER_BY_BRAND,
  FILTER_BY_CATEGORY,
  FILTER_BY_PRICE,
  FILTER_BY,
} = filterSlice.actions;

export const selectFilteredProducts = (state) => state.filter.filteredProducts;

export default filterSlice.reducer;
