import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const onRejected = (state, action) => {
  state.isRefreshing = false;
  if (action.payload === "Unable to fetch user") {
    return;
  }
  toast.error(action.payload, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(register.rejected, onRejected)
      .addCase(logIn.rejected, onRejected)
      .addCase(logOut.rejected, onRejected)
      .addCase(refreshUser.rejected, onRejected)
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      });
  },
});
export const authReducer = authSlice.reducer;
