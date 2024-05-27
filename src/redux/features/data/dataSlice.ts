import { createSlice } from "@reduxjs/toolkit";
import { IIProps } from "../../../interface";

const initialState: IIProps = {
  loading: true,
  isSidebarOpen: false,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.loading = action.payload;
    },

    openSidebar: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setLoader, openSidebar } = dataSlice.actions;

export default dataSlice.reducer;
