import { createSelector } from "@reduxjs/toolkit";
import { selectfilters } from "../filters/selectors";
export const selectContacts = (state) => {
  return state.contacts.items;
};

export const selectLoading = (state) => {
  return state.contacts.loading;
};

export const selectFilteredContacts = createSelector(
  [selectContacts, selectfilters],

  (contacts, filters) => {
    return contacts.filter((contact) => {
      /* console; */
      const isValidName = contact.name
        .toLowerCase()
        .includes(filters.toLowerCase().trim());
      const isValidNumber = contact.number
        .toLowerCase()
        .includes(filters.toLowerCase().trim());
      return isValidName || isValidNumber;
    });
  }
);
