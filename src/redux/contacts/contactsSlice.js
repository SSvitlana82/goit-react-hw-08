import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";
import { addContact } from "./operations";
import { deleteContact } from "./operations";
import { changeContact } from "./operations";
import { logOut } from "../auth/operations";
/* import { createSelector } from "@reduxjs/toolkit"; */
const fetchIsLoading = (state) => {
  state.isLoading = true;
};
const fetchError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, fetchIsLoading)
      .addCase(fetchContacts.rejected, fetchError)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.pending, fetchIsLoading)
      .addCase(addContact.rejected, fetchError)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.pending, fetchIsLoading)
      .addCase(deleteContact.rejected, fetchError)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const deleteContact = state.items.findIndex((contact) => {
          return contact.id === action.payload.id;
        });

        state.items.splice(deleteContact, 1);
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      })

      .addCase(changeContact.pending, fetchIsLoading)
      .addCase(changeContact.rejected, fetchError)
      .addCase(changeContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const indexContact = state.items.findIndex((contact) => {
          return contact.id === action.payload.id;
        });
        state.items[indexContact] = action.payload;
      });
  },
});

export const contactReducer = contactsSlice.reducer;
