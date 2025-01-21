import { createSlice } from "@reduxjs/toolkit";

const data = {
  carsModels: [
    {
      id: 1,
      img: "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/model-navigation/bmw-m8-competition-coupe-flyout.png?imwidth=1280",
      model: "BMW M8 Coupé",
      style: "Coupé",
      date: "2025",
      color: "Blue",
      price: "285,892",
    },
    {
      id: 2,
      img: "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/model-navigation/bmw-m8-competition-cabrio-flyout.png?imwidth=1440",
      model: "BMW M8 Convertible",
      style: "Convertible",
      date: "2025",
      color: "Grey",
      price: "285,892",
    },
  ],
  carDetails: {},
};
const carsSlice = createSlice({
  name: "cars",
  initialState: data,
  reducers: {
    deleteCar: (state, { payload }) => {
      const newArray = state.carsModels.filter((model) => {
        if (model.id !== payload) {
          return model;
        }
      });
      state.carsModels = newArray;
    },
    singleCarDetails: (state, { payload }) => {
      const newObject = state.carsModels.find((model) => model.id == payload);
      state.carDetails = newObject;
    },
  },
});

export const cars = carsSlice.reducer;
export const { deleteCar, singleCarDetails } = carsSlice.actions;
