import { createSlice } from '@reduxjs/toolkit';

export interface ICityState {
  defaultCity: any;
  selectedCity: any;
  cityList: any;
  jobList: any;
  menuList: any;
}

type TCityAction = {
  // Define your action properties here
  // ...
};

const initialState: ICityState = {
  defaultCity: {},
  selectedCity: {},
  cityList: {},
  jobList: {},
  menuList: {},
};

export const citySlice: any = createSlice({
  name: 'city',
  initialState: initialState,
  reducers: {
    updateDefaultCity: (state, action) => {
      state.defaultCity = action.payload;
    },
    updateSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },
    updateCityList: (state, action) => {
      state.cityList = action.payload;
    },
    updateMenuList: (state, action) => {
      state.menuList = action.payload;
    },
    updateJobList: (state, action) => {
      state.jobList = action.payload;
    },
  },
});

export const {
  updateDefaultCity,
  updateSelectedCity,
  updateCityList,
  updateMenuList,
  updateJobList,
} = citySlice.actions;

export default citySlice.reducer;
